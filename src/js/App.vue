<template>
  <div
    :class="{
          iqiyi: this.website === 'iqiyi',
          bilibili: this.website === 'bilibili',
       }"
    class="disable"
    id="bgm_tv_tracker"
  >
    <!--episodeMarked: this.episodeMarked ,-->
    <div
      :class="{}"
      @click="trigger"
      class="bgm_tv_tracker_btn bgm_tv_tracker bgm_tv_tracker_radius"
      id="bgm_tv_tracker_btn_on_page"
    >bgm.tv{{ score }} {{ episodeMarked?'✓':'' }}
    </div>
    <div class="bgm_tv_tracker_info">
      <div class="not_found" v-if="!subjectID">
        <label>
          <input class="subject" placeholder="条目ID或者对应条目链接" type="text"
                 v-model="tmpSubjectID"/>
          <button @click="userSubmitSubjectID" class="notfound">
            submit subject
            id
          </button>
        </label>
      </div>
      <br/>
      <div>
        <p>
          你正在看:
          <span id="bgm_tv_tracker_title">{{ bangumiName }}</span>
        </p>
        <p>
          第
          <span id="bgm_tv_tracker_episode">{{ episodeSort }}</span>
          集
        </p>
      </div>
      <br/>
      <div id="bgm_tv_tracker_link">
        <a
          :href="`https://bgm.tv/ep/${episodeID}`"
          rel="noopener noreferrer"
          target="_blank"
          v-if="episodeID"
        >吐槽本集</a>
        <br/>
        <br/>
        <a
          :href="`https://bgm.tv/subject/${subjectID}`"
          rel="noopener noreferrer"
          target="_blank"
          v-if="subjectID"
        >subject/{{ subjectID }}</a>

        <a
          :href="`https://bgm.tv/subject_search/${ title }?cat=2`"
          rel="noopener noreferrer"
          target="_blank"
          v-else
        >search in bgm.tv</a>
      </div>
      <br/>
      <div v-if="subjectID">
        <button
          @click="watchEps"
          class="bgm_tv_tracker_radius"
          id="bgm_tv_tracker_mark_watch"
        >标记本集为看过
        </button>
        <button
          @click="setWatchProgress"
          class="bgm_tv_tracker_radius"
          id="bgm_tv_tracker_mark_watched"
        >看到本集
        </button>
      </div>

      <!--      <div class="not_found" v-if="episodeNotMatch">-->
      <!--      <br>-->

      <!--        <label>填写本集对应的bgm单集网址来帮助我们精确定位这是哪一集-->
      <!--          <input class="subject" placeholder="https://bgm.tv/ep/12345"-->
      <!--                 type="text" v-model="tmpEpisodeID"/>-->
      <!--          <button @click="userSubmitEpisodeID" class="notfound">submit</button>-->
      <!--        </label>-->

      <!--      </div>-->

      <br/>
      <a :href="reportUrl" rel="noopener noreferrer" style="color: red"
         target="_blank">
        <p>报告问题</p>
      </a>
      <!--      <a-->
      <!--        href="https://github.com/Trim21/-->
      <!--        bgm-tv-auto-tracker/blob/master/docs/user_info_collection.md"-->
      <!--        rel="noopener noreferrer"-->
      <!--        style="color: red"-->
      <!--        target="_blank"-->
      <!--      >-->
      <!--        <p>关于信息收集</p>-->
      <!--      </a>-->
      <!--<br>-->
      <p v-if="!subjectID">"bangumi_id" : "{{ bangumiID }}",</p>
      <p v-if="!subjectID">"title" : "{{ title }}",</p>
      <p v-if="!subjectID">"website" : "{{ website }}",</p>
      <p v-if="!subjectID">"subject" : "",</p>

      <!--<p>本集观看进度: {{ (watchPercent * 100).toString().substr(0, 4) }}%</p>-->
      <br/>
      <input id="bgm_tv_tracker_auto_mark_watched" type="checkbox"
             v-model="config.autoMarkWatched"/>
      <label for="bgm_tv_tracker_auto_mark_watched">播放进度大于80%时自动标记为看过</label>
      <br/>
      <input
        id="bgm_tv_tracker_collection_status_when_watch_status"
        type="checkbox"
        v-model="config.collectionSubjectWhenMarkStatus"
      />
      <label for="bgm_tv_tracker_collection_status_when_watch_status">标记播放进度时把条目标记为在看</label>

      <br/>
      <div id="bgm_tv_tracker_notification">
        <div :key="index" v-for="(message, index) in messages">
          <hr/>
          <div>
            <p>
              {{ message.time.getHours() }}:{{ message.time.getMinutes() }}:
              {{ message.time.getSeconds() }}
            </p>
            <p>{{ message.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Vue, $ } from './externals'

import {
  gmGetValue,
  gmOpenInTab,
  gmSetValue,
  gmUnsafeWindow,
  URLS
} from './vars'
import { getConfig, serverApi, sortEps } from './utils'
import { SubjectResponse } from '@/lib/responses'

let collection = gmGetValue('collection', false)

if (!collection) {
  collection = {}
} else {
  collection = JSON.parse(collection)
}

export default Vue.extend({
  data () {
    let website = this.$website.name
    let config = getConfig()

    return {
      episodeNotMatch: false,
      tmpEpisodeID: null,

      tmpSubjectID: null,
      messages: [],
      bangumiID: null,
      bangumiName: null,
      // is episode starts with 1,
      // like https://www.bilibili.com/bangumi/play/ep200167
      episodeStartWith: null,
      // episode id in bgm.tv
      episodeID: null,
      episode: null,
      episodeSort: null,
      title: null,
      subjectID: null,
      score: '',
      config: {
        autoMarkWatched: config.autoMarkWatched,
        collectionSubjectWhenMarkStatus: config.collectionSubjectWhenMarkStatus
      },
      watchPercent: 0,
      episodeMarked: false,
      website
      // $website: null,
    }
  },
  computed: {
    reportUrl () {
      let baseURL =
        'https://github.com/' + 'Trim21/bgm-tv-auto-tracker/issues/new'
      let hrefWithoutHash =
        gmUnsafeWindow.location.protocol +
        '//' +
        gmUnsafeWindow.location.host +
        gmUnsafeWindow.location.pathname
      let body =
        `问题页面: [${ this.bangumiName }](${ hrefWithoutHash })` +
        '\n' +
        `Bangumi ID: ${ this.bangumiID }` +
        '\n' +
        `episode: ${ this.episode }` +
        '\n' +
        'bgm page: \n' +
        `Subject: https://bgm.tv/subject/${ this.subjectID }` +
        '\n' +
        `episode: https://bgm.tv/ep/${ this.episodeID }` +
        '\n' +
        '\n<!-- 描述你遇到的问题 -->\n'

      let params = {
        labels: 'bug',
        body
      }

      let query = $.param(params)

      return baseURL + '?' + query
    }
  },
  watch: {
    config: {
      handler (val) {
        // this.notify(JSON.stringify(val, null, 2))
        gmSetValue('config', JSON.stringify(val))
      },
      deep: true
    },
    subjectID (val) {
      this.episodeMarked = false
      let vm = this
      if (val) {
        this.$bgmApi.getSubject(val).then((response: SubjectResponse) => {
          vm.score = ' ' + response.data.rating.score
          vm.bangumiName = response.data.name_cn || response.data.name
        })
      }
    },
    bangumiID () {
      this.episodeMarked = false
    },
    episode: function () {
      this.episodeMarked = false
      if (!this.subjectID) return
      let vm = this

      // serverApi.getBgmEpisodeID(this.$website).then(
      //   data => {
      //     this.episodeID = data.bgm_ep_id
      //     this.episodeNotMatch = false
      //
      //     vm.$bgmApi.getEps(this.subjectID).then(
      //       (data: any) => {
      //         let eps = data.eps.filter((val: { id: number }) => val.id === parseInt(vm.episodeID, 10))
      //         try {
      //           this.episodeSort = eps[0].sort
      //         } catch (e) {
      //           vm.notify('没找到这集...')
      //         }
      //       },
      //       (error: any) => {
      //         vm.notify('233')
      //         vm.notify(JSON.stringify(error))
      //       }
      //     )
      //
      //   },
      //   () => {
      this.episodeNotMatch = true

      this.updateEpisode()

      // }
      // )
    }
  },
  methods: {
    updateEpisode () {
      let vm = this
      this.$bgmApi.getEps(this.subjectID).then(
        (data: any) => {
          let episode = vm.episode
          let eps = data.eps.filter(
            (val: { sort: string; type: string }) =>
              Number.isInteger(Number(val.sort)) && parseInt(val.type, 10) === 0
          )

          eps = sortEps(eps)
          try {
            this.episodeID = eps[episode - 1].id

            if (this.episodeStartWith) {
              this.episodeSort =
                parseInt(this.episode) + parseInt(this.episodeStartWith) - 1
            } else {
              this.episodeSort = this.episode
            }
          } catch (e) {
            vm.notify('没找到这集...')
          }
        },
        (error: any) => {
          vm.notify('233')
          vm.notify(JSON.stringify(error))
        }
      )
    },
    userSubmitSubjectID () {
      if (this.tmpSubjectID) {
        if (this.tmpSubjectID.startsWith('http')) {
          const myURL = new URL(this.tmpSubjectID)
          const p = myURL.pathname
          const pList = p.split('/')
          this.tmpSubjectID = pList[pList.length - 1]
        }
        this.subjectID = this.tmpSubjectID
        serverApi.report_missing_bangumi(
          this.bangumiID,
          this.subjectID,
          this.title,
          this.website
        )
      }
    },

    // userSubmitEpisodeID () {
    //   if (this.tmpEpisodeID) {
    //     if (this.tmpEpisodeID.startsWith('http')) {
    //       const myURL = new URL(this.tmpEpisodeID)
    //       const p = myURL.pathname
    //       const pList = p.split('/')
    //       this.tmpEpisodeID = pList[pList.length - 1]
    //     }
    //     this.episodeID = this.tmpEpisodeID
    //     serverApi.report_missing_episode(
    //       this.bangumiID.toString(),
    //       this.$website.episodeID.toString(),
    //       this.episodeID,
    //       this.website
    //     )
    //   }
    // },

    notify (message: string) {
      let now = new Date()
      this.messages.unshift({
        time: now,
        text: message
      })
      console.log(this.messages)
    },

    collectSubject (subjectID: any) {
      if (!this.config.collectionSubjectWhenMarkStatus) return
      let vm = this
      if (!collection[subjectID]) {
        this.$bgmApi
          .setSubjectCollectionStatus({
            subjectID,
            status: 'do'
          })
          .then(
            (response: any) => {
              if (response.data.code === 401) {
                vm.notify(JSON.stringify(response))
                vm.notify(response.data.error)
              } else {
                vm.notify('add this bangumi to your collection')
                collection[subjectID] = true
                gmSetValue('collection', JSON.stringify(collection))
              }
            },
            (error: any) => vm.notify(error.response.data.detail)
          )
      }
    },

    trigger () {
      $('.bgm_tv_tracker_info').toggle('fast')
    },

    async watchEps () {
      this.collectSubject(this.subjectID)
      let vm = this
      try {
        let data = await vm.$bgmApi.getEps(this.subjectID)
        let episode = vm.episode
        let eps = sortEps(
          data.eps.filter(
            (val: { sort: string; type: string }) =>
              Number.isInteger(Number(val.sort)) && parseInt(val.type, 10) === 0
          )
        )
        let ep = eps[episode - 1].id
        await vm.$bgmApi.setEpisodeWatched(ep)
        this.episodeMarked = true
        vm.notify('mark your status successfully')
      } catch (error) {
        if (error.response.status === 401) {
          vm.notify('授权已过期 请重新授权')
          gmOpenInTab(URLS.authURL, { active: true })
        }
        vm.notify(error.toString())
        vm.notify(JSON.stringify(error))
      }
    },
    async setWatchProgress () {
      let episode = this.episode
      this.collectSubject(this.subjectID)
      try {
        await this.$bgmApi.setSubjectProgress(this.subjectID, episode)
        this.notify('mark status successful')
        this.episodeMarked = true
      } catch (error) {
        if (error.response.data.code === 400) {
          this.notify(
            'error: ' +
            error.response.data.error +
            ',' +
            '应该是因为你在bgm上的状态已经是看到本集'
          )
        } else {
          this.notify('error: ' + JSON.stringify(error.response))
        }
      }
    }
  },
  created () {
    // serverApi.getBgmEpisodeID(this.$website).then(
    //   (res: any) => {},
    //   (err: any) => {
    //     this.notify('不能精确定位这是哪一集, 只能根据集数来猜了, 可能猜的不太对.')
    this.episodeNotMatch = true
    // }
    // )

    // episode-item
    this.$website.init().then(
      (data: InitResult) => {
        let {
          episodeID, // todo
          episodeIndex,
          title,
          bangumiID,
          episodeStartWith
        } = data
        this.episode = episodeIndex
        this.episodeID = episodeID
        this.title = title
        this.bangumiID = bangumiID
        this.episodeStartWith = episodeStartWith

        serverApi.getBgmSubjectID(this.$website).then(
          res => {
            this.subjectID = res.subject_id
            this.updateEpisode()
          },
          err => {
            console.log(err)
          }
        )
      },
      (error: any) => {
        if (error.error.response.status === 404) {
          this.notify('番剧没找到 手动输入吧')
        }
        let { episode, title, bangumiID, episodeStartWith } = error
        this.episodeStartWith = episodeStartWith
        this.episode = parseInt(episode, 10)
        this.title = title
        this.bangumiID = bangumiID
      }
    )

    let vm = this
    this.$website.detectEpisodeChange(
      (data: any) => {
        if (data.subjectID) {
          vm.subjectID = data.subjectID
        }
        if (data.episode) {
          vm.episode = data.episode
        }
        if (data.bangumiID) {
          vm.bangumiID = data.bangumiID
        }
      },
      (error: any) => {
        vm.episode = error.episode
        if (error.bangumiID !== vm.bangumiID) {
          vm.subjectID = undefined
          vm.bangumiID = error.bangumiID
          vm.title = error.title
          vm.episodeStartWith = error.episodeStartWith
          vm.episode = error.episode
        }
      }
    )

    setInterval(() => {
      this.$website
        .getPlayerInfo()
        .then((info: any) => {
          let { percent, duration } = info
          console.debug('get player percent')
          this.watchPercent = percent
          if (percent > 0.8 && duration > 120) {
            if (
              this.config.autoMarkWatched &&
              this.subjectID &&
              !this.episodeMarked
            ) {
              this.episodeMarked = true
              this.watchEps()
            }
          }
        })
        .catch((e: any) => {
          console.error('can\'t get play time')
        })
    }, 30 * 1000)
  }
})
</script>
<style lang="less">
#bgm_tv_tracker.disable .bgm_tv_tracker_info {
  display: none;
}

/*label {*/
/*width: 100px;*/
/*text-align: left;*/
/*}*/

input[type="checkbox"] {
  appearance: initial;
}

@import "../style/less/iqiyi";
@import "../style/less/bilibili";
</style>
