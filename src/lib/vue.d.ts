import { BgmApi } from '@/js/utils'
import { AbstractWebsite } from '@/js/website'

declare module 'vue/types/vue' {
  interface Vue {
    $website: AbstractWebsite,
    $bgmApi: BgmApi,
  }
}
