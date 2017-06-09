#!/usr/bin/env node
const robot = require('robotjs')
const asciiArt = require('./ascii-art')

asciiArt.show()
const interval = process.env.INTERVAL || 30
const mouse = robot.getMousePos()
let prevX = mouse.x
let prevY = mouse.y
let direction = 1
let count = 0

console.log(`Interval: ${interval} seconds.`)

setInterval(() => {
  const mouse = robot.getMousePos()

  if (mouse.x !== prevX || mouse.y !== prevY) {
    // console.log('User moved pointer.')
    prevX = mouse.x
    prevY = mouse.y
    return
  }

  const x = mouse.x + direction
  direction = -direction // Change direction.
  robot.moveMouse(x, mouse.y)
  prevX = x
  prevY = mouse.y
  // console.log('Keeping things alive! ;)')
  process.stdout.write('.')
}, interval * 1000)
