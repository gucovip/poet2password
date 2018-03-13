const pinyin = require('pinyin')
const {rules} = require('./rule.js')
const util = require('util')


//正则匹配所有中文标点
const CH_SYMBOL = /[\u3002|\uff1f|\uff01|\uff0c|\u3001|\uff1b|\uff1a|\u201c|\u201d|\u2018|\u2019|\uff08|\uff09|\u300a|\u300b|\u3008|\u3009|\u3010|\u3011|\u300e|\u300f|\u300c|\u300d|\ufe43|\ufe44|\u3014|\u3015|\u2026|\u2014|\uff5e|\ufe4f|\uffe5]/g

//解析规则
exports.parsing = parsing = (char, isFirst) => {
  if (rules[char]) return rules[char]
  const allPinYin = pinyin(char, {
    style: pinyin.STYLE_NORMAL
  })
  if (rules[allPinYin]) return rules[allPinYin]
  const py = pinyin(char)
  return isFirst ? py[0][0].slice(0, 1).toUpperCase() : py[0][0].slice(0, 1)
}

exports.processFun = (text) => {
  const resultArr = []
  const textArr = text.replace(CH_SYMBOL, ' ').trim().split(' ')
  for (let i = 0; i < textArr.length; i++) {
    const middleArr = textArr[i].split('')
    for (let j = 0; j < middleArr.length; j++) {
      let isFirst = j === 0 ? true : false
      resultArr.push(parsing(middleArr[j], isFirst))
    }
  }
  return resultArr.join('')
}

// 存入剪切板 mac xos
exports.pbcopyMac = (data) => {
  const proc = require('child_process').spawn('pbcopy')
  proc.stdin.write(data)
  proc.stdin.end()
}
// 存入剪切板 windows
exports.pbcopyWin = (data) => {
  require('child_process').spawn('clip').stdin.end(util.inspect(data.replace('\n', '\r\n')))
}