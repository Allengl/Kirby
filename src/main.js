import string from './css.js'

const player = {
  // 定义定时器
  step: undefined,
  // 每次写一个字符
  n: 1,
  // 速度快慢
  speed: 50,
  //初始化
  init: () => {
    // 这俩行代码是实现这个项目的核心
    player.ui.version.innerText = string.substring(0, player.n)
    player.ui.style.innerHTML = string.substring(0, player.n)
    player.play()
    player.bindEvents()
  },
  ui: {
    version: document.querySelector('#version'),
    style: document.querySelector('#style')
  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  bindEvents: () => {
    for (let key in player.events) {
      const value = player.events[key]
      document.querySelector(key).onclick = player[value]
    }
  },
  run: () => {
    player.n += 1
    if (player.n > string.length) {
      window.clearInterval(player.step)
      return
    }
    player.ui.version.innerText = string.substring(0, player.n)
    player.ui.style.innerHTML = string.substring(0, player.n)
    player.ui.version.scrollTop = player.ui.version.scrollHeight
  },
  // 播放
  play: () => {
    player.step = setInterval(player.run, player.speed)
  },
  // 暂停
  pause: () => {
    return window.clearInterval(player.step)
  },
  // 慢速
  slow: () => {
    player.pause()
    player.speed = 300
    player.play()
  },
  // 中速
  normal: () => {
    player.pause()
    player.speed = 100
    player.play()
  },
  // 快速
  fast: () => {
    player.pause()
    player.speed = 0
    player.play()
  }

}
player.init()