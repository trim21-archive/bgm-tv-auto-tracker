def jsonify(d):
    d['_id'] = str(d['_id'])
    d['time'] = str(d['time'])
    return d
