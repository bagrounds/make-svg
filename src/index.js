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

  var SVG_BASE_ATTRIBUTES = {
    version: '1.1',
    baseProfile: 'full',
    xmlns: 'http://www.w3.org/2000/svg'
  }

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
   * @param {Object} attributes - for rect element
   * @param {String} [attributes.id] - id attribute for this svg element
   * @param {Number} attributes.x - coordinate of rectangle
   * @param {Number} attributes.y - coordinate of rectangle
   * @param {Number} attributes.width - of rectangle
   * @param {Number} attributes.height - of rectangle
   * @param {Number} [attributes.rx] - x radius of rounded corners
   * @param {Number} [attributes.ry] - y radius of rounded corners
   *
   * @return {Object} representing this svg element
   */
  function rect (attributes) {
    return object.of('rect', { _attr: attributes })
  }

  /**
   * Make an svg circle.
   *
   * @function module:make-svg.circle
   *
   * @param {Object} attributes - for circle element
   * @param {String} [attributes.id] - id attribute for this svg element
   * @param {Number} attributes.cx - coordinate for center of circle
   * @param {Number} attributes.cy - coordinate for center of circle
   * @param {Number} attributes.r - radius of circle
   *
   * @return {Object} representing this svg element
   */
  function circle (attributes) {
    return object.of('circle', { _attr: attributes })
  }

  /**
   * Make an svg line.
   *
   * @function module:make-svg.line
   *
   * @param {Object} attributes - for line element
   * @param {String} [attributes.id] - id attribute for this svg element
   * @param {Number} attributes.x1 - x coordinate of line start
   * @param {Number} attributes.x2 - x coordinate of line end
   * @param {Number} attributes.y1 - y coordinate of line start
   * @param {Number} attributes.y2 - y coordinate of line end
   *
   * @return {Object} representing this svg element
   */
  function line (attributes) {
    return object.of('line', { _attr: attributes })
  }

  /**
   * Make an svg element.
   *
   * @function module:make-svg.svg
   *
   * @param {Object} attributes - for the svg element
   * @param {Object} attributes.width - of the svg element
   * @param {Object} attributes.height - of the svg element
   * @param {Array<Object>} children - objects representing svg elements
   *
   * @return {String} svg as a string
   */
  function svg (attributes, children) {
    return xml({
      svg: [
        { _attr: object.defaults(SVG_BASE_ATTRIBUTES, attributes) }
      ].concat(children)
    })
  }
})()

