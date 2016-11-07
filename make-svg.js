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
    circle: circle,
    rect: rect
  }

  /**
   * Make an svg rectangle.
   *
   * @function rect
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
    var svgOptions = {
      tag: 'rect',
      attributes: {}
    }

    Object.keys(options).forEach(function (key) {
      svgOptions.attributes[key] = options[key]
    })

    return svg(svgOptions)
  }

  /**
   * Make an svg circle.
   *
   * @function circle
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
    var svgOptions = {
      tag: 'circle',
      attributes: {}
    }

    Object.keys(options).forEach(function (key) {
      svgOptions.attributes[key] = options[key]
    })

    return svg(svgOptions)
  }

  /**
   * Make an svg element.
   *
   * @function svg
   *
   * @param {Object} options all function parameters
   * @param {String} options.tag svg element type
   * @param {Object} options.attributes for the svg element
   *
   * @return {String} svg as a string
   */
  function svg (options) {
    var attributes = options.attributes
    var tag = options.tag

    var xmlObject = {
      svg: []
    }

    var element = {}

    element[tag] = {}

    element[tag]._attr = attributes

    xmlObject.svg.push(element)

    return xml(xmlObject)
  }
})()

