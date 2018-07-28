<template>
  <div id="bgm_tv_tracker" class="disable"
       :class="{iqiyi:this.website==='iqiyi', bilibili:this.website==='bilibili'}">
    <div class="bgm_tv_tracker_btn bgm_tv_tracker bgm_tv_tracker_radius" @click="trigger">bgm.tv{{ score }}</div>
    <div class="bgm_tv_tracker_info">
      <div class="not_found" v-if="!subjectID">
        <label>
          <input type="text" class="subject" v-model="tmpSubjectID"/>
          <button class="notfound" @click="userSubmitSubjectID()">submit subject id</button>
        </label>
      </div>
      <br>
      <div>
        <p>你正在看:
          <span id="bgm_tv_tracker_title">{{ bangumiName }}</span>
        </p>
        <p>第 <span id="bgm_tv_tracker_episode">{{ episode }}</span>集</p>
        <p>Bangumi ID: {{ bangumiID }}</p>
      </div>
      <br>
      <div id="bgm_tv_tracker_link">
        <a :href="`https://bgm.tv/subject/${subjectID}`" target="_blank"
           rel="noopener noreferrer">subject/{{ subjectID }}</a>
      </div>
      <br>
      <button class="bgm_tv_tracker_radius" id="bgm_tv_tracker_mark_watch" @click="watchEps">标记本集为看过</button>
      <button class="bgm_tv_tracker_radius" id="bgm_tv_tracker_mark_watched" @click="setWatchProgress">看到本集</button>
      <br>
      <br>
      <a href="https://github.com/Trim21/bilibili-bangumi-tv-auto-tracker/issues" target='_blank'
         rel="noopener noreferrer">报告问题</a>
      <br>
      <div id="bgm_tv_tracker_notification">
        <div v-for="(message, index) in messages" :key="index">
          <hr>
          <div><p>
            {{ message.time.getHours() }}:{{ message.time.getMinutes() }}:{{ message.time.getSeconds() }}
          </p>
            <pre><code>{{ message.text }}</code></pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { $, tm_getValue, tm_setValue, tm_unsafeWindow, WEBSITE } from './vars'
import { apiServer } from './utils'

/**
 * @type {Object}
 */
let collection = tm_getValue('collection', false)

if (!collection) {
  collection = {}
} else {
  collection = JSON.parse(collection)
}

export default {
  data () {
    let website = ''
    if (tm_unsafeWindow.location.href.startsWith('https://www.bilibili.com/bangumi/play/')) {
      website = WEBSITE.bilibili
    }
    else if (tm_unsafeWindow.location.hostname === 'www.iqiyi.com') {
      website = WEBSITE.iqiyi
    }
    return {
      tmpSubjectID: null,
      messages: [],
      bangumiID: null,
      bangumiName: null,
      episode: null,
      title: null,
      subjectID: null,
      score: '',
      website
    }
  },
  watch: {
    subjectID (val) {
      let vm = this
      if (val)
        this.$bgmApi.getSubject(val).then(response => {
          vm.score = ' ' + response.data.rating.score
          vm.bangumiName = response.data.name_cn || response.data.name
        })
    }
  },
  methods: {
    userSubmitSubjectID () {
      this.subjectID = this.tmpSubjectID
      let subjectID = this.tmpSubjectID
      if (subjectID) {
        apiServer.get('/api/v0.1/missingBilibili',
          { params: { bangumi_id: bangumiID, subject_id: subjectID } })
      }
    },

    /**
     * Append a message to banner
     * @param {string} message.
     */
    notify (message) {
      let now = new Date()
      this.messages.unshift({
        time: now,
        text: message,
      })
      console.log(this.messages)
    },

    collectSubject (subjectID) {
      let vm = this
      if (!collection[subjectID]) {
        this.$bgmApi.setSubjectCollectionStatus({ subjectID, status: 'do' }).then(
          response => {
            if (response.data.code === 401) {
              vm.notify(response.data.error)
            } else {
              vm.notify('add this bangumi to your collection')
              collection[subjectID] = true
              tm_setValue('collection', JSON.stringify(collection))
            }
          },
          error => vm.notify(error.response.data.error_description)
        )
      }
    },

    trigger () {
      $('.bgm_tv_tracker_info').toggle('fast')
    },
    watchEps () {
      let message = {
        subject_id: this.subjectID,
        'type': 'watch_episode',
        'website': 'bilibili',
        'bangumi_id': this.bangumiID,
        'title': this.title,
        episode: this.episode,
      }
      this.collectSubject(message.subject_id)
      let vm = this

      vm.$bgmApi.getEps(message.subject_id)
        .then(data => {
          let ep = data.eps.filter(function (val) {
            return val.sort === parseInt(message.episode)
          })
          ep = ep[0].id
            this.$bgmApi.setEpisodeWatched(ep)
            vm.notify(`mark your status successfully`.toString())
          return ep
        },
          error => vm.notify(JSON.stringify(error.response.data)))
        .catch(reason => vm.notify(JSON.stringify(reason))
      )
    },
    setWatchProgress () {
      let ep = this.episode
      this.collectSubject(this.subjectID)
      this.$bgmApi.setSubjectProgress(this.subjectID, ep).then(
        () => this.notify('mark status successful'),
        error => {
          if (error.response.data.code === 400) {
            this.notify('error: ' + error.response.data.error + ',' + '应该是因为你在bgm上的状态已经是看到本集')
          } else {
            this.notify('error: ' + JSON.stringify(error.response))
          }
        }
      )
    }
  },
  created () {
    // episode-item
    this.$website.init().then(data => {
      console.log(data)
      let { subjectID, episode, title, bangumiID } = data
      this.subjectID = subjectID
      this.episode = episode
      this.title = title
      this.bangumiID = bangumiID
    }, error => {
      console.log(error)
      if (error.error.response.status === 404) {
        this.notify('番剧没找到 手动输入吧')
      }
      let { episode, title, bangumiID, } = error
      this.episode = episode
      this.title = title
      this.bangumiID = bangumiID
    })

    let vm = this
    this.$website.detectEpisodeChange(data => {
        if (data.subjectID)
          vm.subjectID = data.subjectID
        if (data.episode)
          vm.episode = data.episode
        if (data.bangumiID)
          vm.bangumiID = data.bangumiID
      },
      error => {
        console.log(error)
        vm.episode = error.episode
        if (error.bangumiID !== vm.bangumiID) {
          if (!error.subjectID) {
            this.subjectID = undefined
          }
          vm.bangumiID = error.bangumiID
        }
      })

    this.$bgmApi.http.interceptors.request.use(function (config) {
      //在发送请求之前做某事
      if (tm_unsafeWindow.bgm_tv_debug || window.bgm_tv_debug) {
        vm.notify('config: ' + JSON.stringify(config, null, 2))
      }
      return config
    }, function (error) {
      //请求错误时做些事
      if (tm_unsafeWindow.bgm_tv_debug || window.bgm_tv_debug) {
        vm.notify('response: ' + JSON.stringify(response, null, 2))
      }
      return Promise.reject(error)
    })

    this.$bgmApi.http.interceptors.response.use(function (response) {
      //对响应数据做些事
      if (tm_unsafeWindow.bgm_tv_debug || window.bgm_tv_debug) {
        vm.notify('response: ' + JSON.stringify(response, null, 2))
      }
      return response
    }, function (error) {
      //请求错误时做些事
      if (tm_unsafeWindow.bgm_tv_debug || window.bgm_tv_debug) {
        vm.notify('error: ' + JSON.stringify(error, null, 2))
      }
      return Promise.reject(error)
    })
  }
}

</script>
<style lang="scss">
  #bgm_tv_tracker.disable .bgm_tv_tracker_info {
    display: none;
  }

  @import "../style/scss/iqiyi";
  @import "../style/scss/bilibili";
</style>
