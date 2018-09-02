在任何情况下, 不会收集你的播放记录, 不会把收集到的信息与你的个人身份对应起来.

bgm.tv auto tracker将会在如下的情况下收集如下的信息: 

1. 在没有找到对应的番剧的下, 当你手动填写条目id或者条目链接时, 会收集当前番剧的 `网址`, `标题`, `番剧id`, 你所填写的`条目id`
2. 当查询某个番剧的条目id时, 如果对应的条目id不存在, 会记录所查询的`网站`和`番剧id`

收集到的信息可在[statistics_missing_bangumi](https://bangumi-auto-tracker.trim21.cn/statistics_missing_bangumi)看到

- 网站: `bilibili`或者`iqiyi`
- 番剧id: 参考[bangumi-data](https://github.com/bangumi-data/bangumi-data/blob/master/CONTRIBUTING.md#%E7%AB%99%E7%82%B9-url-%E6%8B%BC%E6%8E%A5). b站的`番剧id`为`window.__INITIAL_STATE__.mediaInfo.season_id`
- 条目id: bgm.tv网页中, 对应条目网址最后的数字. example: [https://bgm.tv/subject/`226677`](https://bgm.tv/subject/226677)
