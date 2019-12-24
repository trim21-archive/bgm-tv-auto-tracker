interface BiliWindow extends Window {
  __INITIAL_STATE__: {
    mediaInfo: {
      ssType: number
      id: number
      title: string
    },
    epList: Array<{
      index: string
      i: number
      title: string
    }>
    epInfo: {
      index: string
      ep_id: string
    }
    pubInfo: {}
  },
  player: {
    getDuration (): number,
    getCurrentTime (): number,
  }
}

declare class iQiyiVideoInfo {
  currentTime: number
  totalDuration: number
}

interface IqiyiWindow extends Window {
  player: {
    getPlayInfo (callback: Function): void,
  },
  Q: {
    PageInfo: {
      playPageInfo: {
        categoryName: string
      }
    }
  }
  // _player: {
  //   getPlayerInfo (f: Function): IqiyiWindow;
  // }
}

declare var unsafeWindow: BiliWindow | IqiyiWindow
declare var GM_setValue: Function
declare var GM_getValue: Function
declare var GM_openInTab: Function
declare var GM_info: {
  version: string,
  script: { version: string },
}
