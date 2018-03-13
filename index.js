const fs = require('fs')
const os = require('os')

const {processFun, pbcopyWin, pbcopyMac} = require('./utils.js')

let text = process.argv[2] || fs.readFileSync('./poet', 'utf8')


// 支持全文转义
const orgArr = text.split('\n')
const resultAll = []
orgArr.forEach(item => {
  // 处理结果存入数组
  return resultAll.push(processFun(item))
})


const resultText = resultAll.join('\n')
// 控制台打印
console.log(resultText)
//存入剪切板
if (os.platform() === 'darwin') {
  pbcopyMac(resultText)
} else {
  pbcopyWin(resultText)
}
