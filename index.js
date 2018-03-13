const pinyin = require('pinyin');
const {rules} = require('./rule.js')
const fs = require('fs')
const util = require('util')
const os = require('os')

let text

if (process.argv[2]) {
  text = process.argv[2]
} else {
  text = fs.readFileSync('./poet', 'utf8')
}

const parsing = (char, isFirst) => {
  if (rules[char]) return rules[char]
  const allPinYin = pinyin(char, {
    style: pinyin.STYLE_TONE2
  })
  if (rules[allPinYin]) return rules[allPinYin]
  const py = pinyin(char)
  return isFirst ? py[0][0].slice(0, 1).toUpperCase() : py[0][0].slice(0, 1)
}

const REGEX = /[\u3002|\uff1f|\uff01|\uff0c|\u3001|\uff1b|\uff1a|\u201c|\u201d|\u2018|\u2019|\uff08|\uff09|\u300a|\u300b|\u3008|\u3009|\u3010|\u3011|\u300e|\u300f|\u300c|\u300d|\ufe43|\ufe44|\u3014|\u3015|\u2026|\u2014|\uff5e|\ufe4f|\uffe5]/g

const orgArr = text.split('\n')
const resultAll = []

const processFun = (text) => {
  text = text.replace(REGEX, ' ')

  const textArr = text.trim().split(' ')
  const resultArr = []
  for (let i = 0; i < textArr.length; i++) {
    const middleArr = textArr[i].split('')
    for (let j = 0; j < middleArr.length; j++) {

      let isFirst = j === 0 ? true : false

      resultArr.push(parsing(middleArr[j], isFirst))
    }
  }
  resultAll.push(resultArr.join(''))
}
orgArr.forEach(item => {
  processFun(item)
})

const pbcopy = (data) => {
  const proc = require('child_process').spawn('pbcopy')
  proc.stdin.write(data)
  proc.stdin.end()
}
const resultText = resultAll.join('\n')
console.log(resultText)

if (os.platform() === 'darwin') {
  pbcopy(resultText)
} else {
  require('child_process').spawn('clip').stdin.end(util.inspect('content_for_the_clipboard'))
}
