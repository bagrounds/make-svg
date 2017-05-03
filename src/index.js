/**
 * make-svg makes svg
 *
 * @module make-svg
 */
;(function () {
  'use strict'

  /* imports */
  var xml = require('xml')
  var object = require('fun-object')

  /* exports */
  module.exports = {
    circle: circle,
    rect: rect,
    line: line,
    svg: svg
  }

  /**
   * Make an svg rectangle.
   *
   * @function module:make-svg.rect
   *
   * @param {Object} options all function parameters
   * @param {String} [options.id] id attribute for this svg element
   * @param {Number} options.x coordinate of rectangle
   * @param {Number} options.y coordinate of rectangle
   * @param {Number} options.width of rectangle
   * @param {Number} options.height of rectangle
   * @param {Number} [options.rx] x radius of rounded corners
   * @param {Number} [options.ry] y radius of rounded corners
   *
   * @return {String} svg rectangle element as a string
   */
  function rect (options) {
    return svg('rect', options)
  }

  /**
   * Make an svg circle.
   *
   * @function module:make-svg.circle
   *
   * @param {Object} options all function parameters
   * @param {String} [options.id] id attribute for this svg element
   * @param {Number} options.cx coordinate for center of circle
   * @param {Number} options.cy coordinate for center of circle
   * @param {Number} options.r radius of circle
   *
   * @return {String} svg circle element as a string
   */
  function circle (options) {
    return svg('circle', options)
  }

  /**
   * Make an svg line.
   *
   * @function module:make-svg.line
   *
   * @param {Object} options - all function parameters
   * @param {String} [options.id] - id attribute for this svg element
   * @param {Number} options.x1 - x coordinate of line start
   * @param {Number} options.x2 - x coordinate of line end
   * @param {Number} options.y1 - y coordinate of line start
   * @param {Number} options.y2 - y coordinate of line end
   *
   * @return {String} svg line element as a string
   */
  function line (options) {
    return svg('line', options)
  }

  /**
   * Make an svg element.
   *
   * @function module:make-svg.svg
   *
   * @param {String} tag svg element type
   * @param {Object} attributes for the svg element
   *
   * @return {String} svg as a string
   */
  function svg (tag, attributes) {
    return xml({
      svg: [
        object.of(tag, {
          _attr: attributes
        })
      ]
    })
  }
})()

