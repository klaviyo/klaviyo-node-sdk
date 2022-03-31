"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MetricTimeline = void 0;

var _ApiClient = require("../ApiClient.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The MetricTimeline model module.
 * @module model/MetricTimeline
 * @version 2022.03.29
 */
var MetricTimeline = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MetricTimeline</code>.
   * @alias module:model/MetricTimeline
   * @class
   * @extends 
   */
  function MetricTimeline() {
    _classCallCheck(this, MetricTimeline);
  }
  /**
   * Constructs a <code>MetricTimeline</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MetricTimeline} obj Optional instance to populate.
   * @return {module:model/MetricTimeline} The populated <code>MetricTimeline</code> instance.
   */


  _createClass(MetricTimeline, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MetricTimeline();

        _ApiClient.ApiClient.constructFromObject(data, obj, '');
      }

      return obj;
    }
  }]);

  return MetricTimeline;
}();

exports.MetricTimeline = MetricTimeline;