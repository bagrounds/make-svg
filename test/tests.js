;(function () {
  'use strict'

  /* imports */
  var predicate = require('fun-predicate')
  var object = require('fun-object')
  var funTest = require('fun-test')
  var arrange = require('fun-arrange')
  var array = require('fun-array')

  var line = [
    [
      [
        { width: 10, height: 10 },
        [{ line: { _attr: { x1: 1, x2: 2, y1: 3, y2: 4 }}}]
      ],
      [
        predicate.match(/svg/),
        predicate.match(/line/),
        predicate.match(/x1="1"/),
        predicate.match(/x2="2"/),
        predicate.match(/y1="3"/),
        predicate.match(/y2="4"/)
      ].reduce(predicate.and)
    ]
  ].map(array.append('svg'))

  /* exports */
  module.exports = [
    line
  ].reduce(array.concat, [])
    .map(arrange({ inputs: 0, predicate: 1, contra: 2 }))
    .map(object.ap({
      contra: object.get
    }))
    .map(funTest.sync)
})()

