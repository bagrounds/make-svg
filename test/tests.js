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
      [{ x1: 1, x2: 2, y1: 3, y2: 4 }],
      '<svg><line x1="1" x2="2" y1="3" y2="4"/></svg>'
    ]
  ].map(array.append('line'))

  /* exports */
  module.exports = [
    line
  ].reduce(array.concat, [])
    .map(arrange({ inputs: 0, predicate: 1, contra: 2 }))
    .map(object.ap({
      predicate: predicate.equal,
      contra: object.get
    }))
    .map(funTest.sync)
})()

