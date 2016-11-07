/**
 * make-svg makes svg
 *
 * @module make-svg
 */
;(function () {
  'use strict'

  /* imports */
  var xml = require('xml')

  /* exports */
  module.exports = {
    circle: circle
  }

  /**
   * Make an svg circle.
   *
   * @function circle
   *
   * @param {Object} options all function parameters
   * @param {String} [options.id] id attribute for this svg element
   * @param {Number} options.x x position for center of circle
   * @param {Number} options.y y position for center of circle
   * @param {Number} options.r radius of circle
   *
   * @return {String} svg as a string
   */
  function circle (options) {
    var id = options.id
    var x = options.x
    var y = options.y
    var r = options.r

    var xmlObject = {
      svg: [
        {
          circle: [
            {
              _attr: {
                cx: x,
                cy: y,
                r: r
              }
            }
          ]
        }
      ]
    }

    if (id) {
      xmlObject.svg[0].circle[0]._attr.id = id
    }

    return xml(xmlObject)
  }
})()

