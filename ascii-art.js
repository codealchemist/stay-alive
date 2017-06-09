const fs = require('fs')
const path = require('path')

const art = fs.readFileSync(path.join(__dirname, 'ascii-art.txt'), 'utf8')

module.exports = {show: () => {
  console.log(art)
}}
