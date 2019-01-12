import pymongo


def epinfo_to_url(epinfo):
    return 'https://www.bilibili.com/bangumi/play/ep{}'.format(epinfo['ep_id'])


def ep_to_url(ep):
    return 'https://bgm.tv/ep/{}'.format(ep['id'])


client = pymongo.MongoClient()
db = client.get_database('bilibili_bangumi')
bilibili_collection = db.get_collection('episode_info')
subject_collection = db.get_collection('bgm_tv_episode_info')
map_collection = db.get_collection('bilibili')
episode_map_collection = db.get_collection('bilibili_episode_map')
for item in bilibili_collection.find({}):
    i = map_collection.find_one({'_id': str(item['mediaInfo']['season_id'])})
    # print({'_id': str(item['_id'])})
    if not i:
        continue
    subject_id = int(i['subject_id'])
    subject_json = subject_collection.find_one({'_id': subject_id})
    if not subject_json or not subject_json['eps']:
        continue

    subject_json['eps'] = list(filter(lambda x: x['type'] == 0, subject_json['eps']))
    item['epList'] = list(filter(lambda x: x["section_type"] == 0, item['epList']))
    item['epList'] = list(filter(lambda x: str.isdecimal(x["index"]), item['epList']))
    if len(subject_json['eps']) == len(item['epList']):
        print(i['title'], item['mediaInfo']['media_id'])
        for i in range(len(subject_json['eps'])):
            print(item['epList'][i]['index'])
            episode_map_collection.update_one({'_id': subject_json['eps'][i]['id'], },
                                              {'$set': {
                                                  'media_id'    : item['mediaInfo']['media_id'],
                                                  'ep_id'       : item['epList'][i]['ep_id'],
                                                  'bgm_tv_ep_id': subject_json['eps'][i]['id'],
                                                  'index'       : item['epList'][i]['index'],
                                              }}, upsert=True)
    else:
        print(item)
        pass
        # print(i['title'], item['mediaInfo']['media_id'])

    # if str(item['mediaInfo']['media_id']) == '427':
    #     pass
    # if len(subject_json['eps']) != len(item['epList']):
    #     print(i['title'], i['subject_id'], item['mediaInfo']['media_id'])
