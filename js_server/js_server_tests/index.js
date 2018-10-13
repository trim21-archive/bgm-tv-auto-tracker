const request = require('request')
const axios = require('axios')
axios.post('http://localhost:6001/api/v0.1/reportMissingBangumi',
    {
        bangumiID: '1234',
        subjectID: 'Subject id can\'t be blank',
        website: 'bilibili',
        href: 'https://bgm.tv/rakuen',
        ...    { title: 't', }
    },
).then(
    res => {
        console.log(res.data)
    },
    err => {
        console.log('error')
        console.log(err.response)
    }
)
