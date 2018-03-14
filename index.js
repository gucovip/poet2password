const fs = require('fs')
const os = require('os')

const {processFun, pbcopyWin, pbcopyMac} = require('./utils.js')

let text = process.argv[2] || fs.readFileSync('./poet', 'utf8')
/**
 * TODO tag
 * c -- check 检查是否包含数字 or 特殊字符，如果没有将在末尾补6 or $
 * t -- tone 匹配对应声调
 * 连续使用多个tag中间用 '|' 隔开
 */
// const tagString = process.argv[3]
// let tags = []
// if(tagString) tags.concat(tagString.split('|'))

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
