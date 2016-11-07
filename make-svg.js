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
   * @return {String} svg circle element as a string
   */
  function circle (options) {
    var svgOptions = {
      tag: 'circle',
      attributes: {}
    }

    svgOptions.attributes.cx = options.x
    svgOptions.attributes.cy = options.y
    svgOptions.attributes.r = options.r

    if (options.id) {
      svgOptions.attributes.id = options.id
    }

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

