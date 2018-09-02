<template>
  <div id="bgm_tv_tracker" class="disable"
       :class="{
          iqiyi: this.website === 'iqiyi',
          bilibili: this.website === 'bilibili',
       }">
    <!--episodeMarked: this.episodeMarked ,-->
    <div class="bgm_tv_tracker_btn bgm_tv_tracker bgm_tv_tracker_radius"
         id="bgm_tv_tracker_btn_on_page"
         :class="{}"
         @click="trigger">
      bgm.tv{{ score }} {{episodeMarked?'✓':''}}
    </div>
    <div class="bgm_tv_tracker_info">
      <div class="not_found" v-if="!subjectID">
        <label>
          <input type="text" class="subject" v-model="tmpSubjectID" placeholder='条目ID或者对应条目链接'/>
          <button class="notfound" @click="userSubmitSubjectID">submit subject id</button>
        </label>
      </div>
      <br>
      <div>
        <p>你正在看:
          <span id="bgm_tv_tracker_title">{{ bangumiName }}</span>
        </p>
        <p>第 <span id="bgm_tv_tracker_episode">{{ episode + (episodeStartWith?episodeStartWith:1) -1 }}</span> 集</p>
      </div>
      <br>
      <div id="bgm_tv_tracker_link">
        <a :href="`https://bgm.tv/ep/${episodeID}`"
           v-if="episodeID" target="_blank" rel="noopener noreferrer">吐槽本集</a>
        <br>
        <br>
        <a :href="`https://bgm.tv/subject/${subjectID}`" v-if="subjectID" target="_blank"
           rel="noopener noreferrer">subject/{{ subjectID }}</a>

        <a :href="`https://bgm.tv/subject_search/${ title }?cat=2`" v-else target="_blank"
           rel="noopener noreferrer">search in bgm.tv</a>
      </div>
      <br>
      <div v-if="subjectID">
        <button class="bgm_tv_tracker_radius"
                id="bgm_tv_tracker_mark_watch"
                @click="watchEps">标记本集为看过
        </button>
        <button class="bgm_tv_tracker_radius"
                id="bgm_tv_tracker_mark_watched"
                @click="setWatchProgress">看到本集
        </button>
      </div>
      <br>
      <a :href="reportUrl" target='_blank' rel="noopener noreferrer" style="color: red"><p>报告问题</p></a>
      <a href="https://github.com/Trim21/bgm-tv-auto-tracker/blob/master/docs/user_info_collection.md"
         target='_blank' rel="noopener noreferrer" style="color: red"><p>关于信息收集</p></a>
      <!--<br>-->
      <p v-if="!subjectID">"bangumi_id" : "{{ bangumiID }}",</p>
      <p v-if="!subjectID">"title" : "{{ title }}",</p>
      <p v-if="!subjectID">"website" : "{{ website }}",</p>
      <p v-if="!subjectID">"subject" : "",</p>

      <!--<p>本集观看进度: {{ (watchPercent * 100).toString().substr(0, 4) }}%</p>-->
      <br>
      <input type="checkbox" v-model="config.autoMarkWatched"
             id="bgm_tv_tracker_auto_mark_watched">
      <label for="bgm_tv_tracker_auto_mark_watched">
        播放进度大于80%时自动标记为看过
      </label>
      <br>
      <input type="checkbox" v-model="config.collectionSubjectWhenMarkStatus"
             id="bgm_tv_tracker_collection_status_when_watch_status">
      <label for="bgm_tv_tracker_collection_status_when_watch_status">
        标记播放进度时把条目标记为在看
      </label>

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
import $ from 'jquery'
import { gmGetValue, gmSetValue, gmUnsafeWindow, WEBSITE } from './vars'
import { apiServer } from './utils'

/**
 * @type {Object}
 */
let collection = gmGetValue('collection', false)

if (!collection) {
  collection = {}
} else {
  collection = JSON.parse(collection)
}

export default {
  data () {
    let website = ''
    if (gmUnsafeWindow.location.href.startsWith('https://www.bilibili.com/bangumi/play/')) {
      website = WEBSITE.bilibili
    }
    else if (gmUnsafeWindow.location.hostname === 'www.iqiyi.com') {
      website = WEBSITE.iqiyi
    }

    /**
     * @namespace
     * @property {object} config
     * @property {Boolean} collectionSubjectWhenMarkStatus
     * @property {Boolean} autoMarkWatched
     */
    let config = gmGetValue('config', false)
    if (config) {
      try {
        config = JSON.parse(config)
      } catch (e) {
        config = {}
        gmSetValue('config', '{}')
      }
    }

    return {
      tmpSubjectID: null,
      messages: [],
      bangumiID: null,
      bangumiName: null,
      // is episode starts with 1, like https://www.bilibili.com/bangumi/play/ep200167
      episodeStartWith: null,
      episodeID: null,
      episode: null,
      title: null,
      subjectID: null,
      score: '',
      config: {
        autoMarkWatched: config.autoMarkWatched,
        collectionSubjectWhenMarkStatus: config.collectionSubjectWhenMarkStatus,
      },
      watchPercent: 0,
      episodeMarked: false,
      website
    }
  },
  computed: {
    reportUrl () {
      let baseURL = 'https://github.com/Trim21/bilibili-bangumi-tv-auto-tracker/issues/new'
      let hrefWithoutHash = location.protocol + '//' + location.host + location.pathname
      let body =
        `问题页面: [${this.bangumiName}](${hrefWithoutHash})` + '\n' +
        `Bangumi ID: ${this.bangumiID}` + '\n' +
        `episode: ${this.episode}` + '\n' +
        'bgm page: \n' +
        `Subject: https://bgm.tv/subject/${this.subjectID}` + '\n' +
        `episode: https://bgm.tv/ep/${this.episodeID}` + '\n' +
        '\n<!-- 描述你遇到的问题 -->\n'

      let params = {
        labels: 'bug',
        body
      }

      let query = $.param(params)

      return baseURL + '?' + query
    },
  },
  watch: {
    config: {
      handler (val, oldVal) {
        // this.notify(JSON.stringify(val, null, 2))
        console.log(val)
        gmSetValue('config', JSON.stringify(val))
      },
      deep: true
    },
    subjectID (val) {
      this.episodeMarked = false
      let vm = this
      if (val)
        this.$bgmApi.getSubject(val).then(response => {
          vm.score = ' ' + response.data.rating.score
          vm.bangumiName = response.data.name_cn || response.data.name
        })
    },
    bangumiID () {
      this.episodeMarked = false
    },
    episode () {
      this.episodeMarked = false
      if (!this.subjectID) return
      let vm = this
      vm.$bgmApi.getEps(this.subjectID).then(
        data => {
          let episode = vm.episode
          let eps = data.eps.filter(val => Number.isInteger(Number(val.sort)) && (parseInt(val.type, 10) === 0))

          eps = eps.sort(function (a, b) {
            let key = 'sort'
            let x = a[key]
            let y = b[key]
            return ((x < y) ? -1 : ((x > y) ? 1 : 0))
          })
          try {
            this.episodeID = eps[episode - 1].id
          } catch (e) {
            vm.notify('没找到这集...')
          }
        },
        error => {
          vm.notify('233')
          vm.notify(JSON.stringify(error))
        }
      )

    }
  },
  methods: {
    userSubmitSubjectID () {
      if (this.tmpSubjectID) {
        if (this.tmpSubjectID.startsWith('http')) {
          const myURL = new URL(this.tmpSubjectID)
          const p = myURL.pathname
          const pList = p.split('/')
          this.tmpSubjectID = pList[pList.length - 1]
        }
        this.subjectID = this.tmpSubjectID
        apiServer.post('/api/v0.1/reportMissingBangumi',
          {
            bangumiID: this.bangumiID,
            subjectID: this.subjectID,
            title: this.title,
            href: gmUnsafeWindow.location.href,
            website: this.website
          })
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
      if (!this.config.collectionSubjectWhenMarkStatus) return
      let vm = this
      if (!collection[subjectID]) {
        this.$bgmApi.setSubjectCollectionStatus({ subjectID, status: 'do' }).then(
          response => {
            if (response.data.code === 401) {
              vm.notify(JSON.stringify(response))
              vm.notify(response.data.error)
            } else {
              vm.notify('add this bangumi to your collection')
              collection[subjectID] = true
              gmSetValue('collection', JSON.stringify(collection))
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
      this.collectSubject(this.subjectID)
      let vm = this
      vm.$bgmApi.getEps(this.subjectID).then(
        data => {
          let episode = vm.episode
          let eps = data.eps.filter(val => Number.isInteger(Number(val.sort)) && (parseInt(val.type, 10) === 0))


          eps = eps.sort(function (a, b) {
            let key = 'sort'
            let x = a[key]
            let y = b[key]
            return ((x < y) ? -1 : ((x > y) ? 1 : 0))
          })

          try {
            let ep = eps[episode - 1].id
            vm.$bgmApi.setEpisodeWatched(ep)
            this.episodeMarked = true
            vm.notify('mark your status successfully')
          } catch (e) {
            vm.notify(e.toString())
          }

        },
        error => {
          vm.notify('233')
          vm.notify(JSON.stringify(error))
        })
      // .catch(reason => vm.notify(JSON.stringify(reason)))

    },
    setWatchProgress () {
      let episode = this.episode
      this.collectSubject(this.subjectID)
      this.$bgmApi.setSubjectProgress(this.subjectID, episode).then(
        () => {
          this.notify('mark status successful')
          this.episodeMarked = true
        },
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
      let { subjectID, episode, title, bangumiID, episodeStartWith } = data
      this.subjectID = subjectID
      this.episode = episode
      this.title = title
      this.bangumiID = bangumiID
      this.episodeStartWith = episodeStartWith
    }, error => {
      console.log(error)
      if (error.error.response.status === 404) {
        this.notify('番剧没找到 手动输入吧')
      }
      let { episode, title, bangumiID, episodeStartWith } = error
      this.episodeStartWith = episodeStartWith
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
          vm.subjectID = undefined
          vm.bangumiID = error.bangumiID
          vm.title = error.title
          vm.episodeStartWith = error.episodeStartWith
          vm.episode = error.episode
        }
      })

    this.$bgmApi.http.interceptors.request.use(function (config) {
      //在发送请求之前做某事
      if (gmUnsafeWindow.bgm_tv_debug || window.bgm_tv_debug) {
        vm.notify('config: ' + JSON.stringify(config, null, 2))
      }
      return config
    }, function (error) {
      //请求错误时做些事
      if (gmUnsafeWindow.bgm_tv_debug || window.bgm_tv_debug) {
        vm.notify('response: ' + JSON.stringify(response, null, 2))
      }
      return Promise.reject(error)
    })

    this.$bgmApi.http.interceptors.response.use(function (response) {
      //对响应数据做些事
      if (gmUnsafeWindow.bgm_tv_debug || window.bgm_tv_debug) {
        vm.notify('response: ' + JSON.stringify(response, null, 2))
      }
      return response
    }, function (error) {
      //请求错误时做些事
      if (gmUnsafeWindow.bgm_tv_debug || window.bgm_tv_debug) {
        vm.notify('error: ' + JSON.stringify(error, null, 2))
      }
      return Promise.reject(error)
    })
    setInterval(() => {
      this.$website.getPlayerInfo().then(info => {
        let { percent, duration } = info
        console.log('get player percent')
        this.watchPercent = percent
        if (percent > 0.8 && (duration > 120)) {
          if (this.config.autoMarkWatched && this.subjectID && !this.episodeMarked) {
            this.episodeMarked = true
            this.watchEps()
          }
        }
      })
    }, 30 * 1000)
  }
}

</script>
<style lang="scss">
  #bgm_tv_tracker.disable .bgm_tv_tracker_info {
    display: none;
  }

  /*label {*/
  /*width: 100px;*/
  /*text-align: left;*/
  /*}*/

  input[type=checkbox] {
    appearance: checkbox
  }

  @import "../style/scss/iqiyi";
  @import "../style/scss/bilibili";
</style>
