/**
 * tsp.js
 */

'use strict'

import TSP from './TSP'

const WIDTH = 800
const HEIGHT = 600

const tsp = new TSP($('#c'), WIDTH, HEIGHT, () => {
  $('#btn-start').attr('disabled', true)
  $('#btn-stop').attr('disabled', false)
}, () => {
  $('#btn-start').attr('disabled', false)
  $('#btn-stop').attr('disabled', true)
})

$(document).ready(() => {
  tsp.makeRandomNodes(20)
  tsp.render()
  $('#btn-stop').attr('disabled', true)

  $(window).resize(() => {
    $('#c').css({width: Math.min(WIDTH, screen.width) + 'px'})
  })
})

$('#btn-random').click(() => {
  tsp.stop()
  var n=parseInt(document.getElementById('a').value)
  if (Number.isInteger(n)){
    tsp.makeRandomNodes(n)
  }else{
    tsp.makeRandomNodes(32)
  }
  tsp.render()
})

$('#btn-start').click(() => {
  tsp.start()
})
$('#btn-stop').click(() => {
  tsp.stop()
})
