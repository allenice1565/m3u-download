const fse = require('fs-extra')
const base = 'https://v3.dious.cc'

fetch('https://v3.dious.cc/20220409/ZTrdYq0J/1500kb/hls/index.m3u8')
    .then((res) => {
        console.log('res:', typeof res, res)
        fse.writeFileSync('./index.m3u8', 'res', 'utf8')
    })
    .catch((e) => {
        console.log(e)
    })
