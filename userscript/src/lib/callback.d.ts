declare class InitResult {
  episodeIndex: number | string
  episodeID: string
  bangumiID: string
  title: string
  episodeStartWith: number
}

declare interface EpisodeChangeCallback {
  (info: any): void;
}
