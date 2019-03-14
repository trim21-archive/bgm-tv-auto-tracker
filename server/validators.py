from validator import Validator, IntegerField, StringField, ListField, \
    DictField, URLField, EnumField

URLField.SCHEMAS = ('http', 'https')


class EpisodeItemValidator(Validator):
    aid = IntegerField()
    badge = StringField()
    badge_type = IntegerField()
    cid = IntegerField()
    cover = StringField()
    duration = IntegerField()  #: 1434005
    ep_id = IntegerField()  #: 114966
    episode_status = IntegerField()  #: 13
    index = StringField()  #: "1"
    index_title = StringField()  #: "亚斯塔与尤诺"
    mid = IntegerField()  #: 21453565
    page = IntegerField()  #: 1
    pub_real_time = StringField()  #: "2017-10-03 18:25:00"
    section_id = IntegerField()  #: 23405
    section_type = IntegerField()  #: 0
    vid = StringField()  #: ""
    # from = StringField()  #: "bangumi"


setattr(EpisodeItemValidator, 'from', StringField())


class EpisodeInfoValidator(EpisodeItemValidator):
    pass


class MediaInfoValidator(Validator):
    actors = StringField()  #:
    # "亚斯塔：梶原岳人↵尤诺：岛崎信长↵夜见介大：诹访部顺一↵诺艾儿·西尔法：优木加奈↵"
    alias = StringField()  #: "黑色五叶草,BLACK CLOVER,黑五,黑色三叶草,黑色四叶草"
    areas = ListField()  #: Array(1)
    cover = StringField()  #: "http://i0.hdslb.com/bfs/bangumi/c33fb1671fe2.jpg"
    evaluate = StringField()  #: \
    # "曾经险些遭到魔神毁灭的世界，拯救它的是一位被后世称为“魔法帝”的魔导士……两位被遗弃
    is_paster_ads = IntegerField()  #: 0
    jp_title = StringField()  #: "ブラッククローバー"
    link = StringField()  #: "http://www.bilibili.com/bangumi/media/md6422/"
    media_id = IntegerField()  #: 6422
    mode = IntegerField()  #: 2
    paster_text = StringField()  #: ""
    season_id = IntegerField()  #: 6422
    season_status = IntegerField()  #: 13
    season_title = StringField()  #: "TV"
    season_type = IntegerField()  #: 1
    series_title = StringField()  #: "黑色四叶草"
    square_cover = StringField()
    #: "http://i0.hdslb.com/bfs/bangumi/1d703634cd3ee35b62db301cae63.jpg"
    staff = StringField()  #: "原作：田畠裕基（集英社《周刊少年JUMP" \
    #
    #  "》连载）↵监督：吉原达矢↵系列构成：：黑色五叶草制作委员会"
    stat = DictField()  #: Object
    style = ListField()  #: Array(4)
    title = StringField()  #: "黑色四叶草"
    total_ep = IntegerField()  #: 0


class PubInfoValidator(Validator):
    is_finish = IntegerField()  #: 0
    is_started = IntegerField()  #: 1
    pub_time = StringField()  #: "2019-01-07 00:15:00"
    pub_time_show = StringField()  #: "01月07日00:15"
    weekday = IntegerField()  #: 1


class InitialStateValidator(Validator):
    epList = ListField(DictField(EpisodeItemValidator), required=True)
    epInfo = DictField(EpisodeInfoValidator)
    mediaInfo = DictField(MediaInfoValidator, required=True)
    pubInfo = DictField(PubInfoValidator)


class EpInputValidator(Validator):
    user = StringField(required=True)
    link = URLField(required=True)
    ep_id = IntegerField(required=True, strict=False)


class ReportMissingBangumiValidator(Validator):
    bangumiID = StringField(strict=False, required=True)
    subjectID = StringField(required=True)
    title = StringField(required=True)
    href = StringField(required=True)
    website = EnumField(choices=['bilibili', 'iqiyi'], required=True)


class ReportMissingEpisodeValidator(Validator):
    bangumiID = StringField(strict=False, required=True)
    episodeID = StringField(required=True)
    bgmEpisodeID = StringField(required=True)
    website = EnumField(choices=['bilibili', 'iqiyi'], required=True)
