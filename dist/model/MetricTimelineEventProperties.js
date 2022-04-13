"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MetricTimelineEventProperties = void 0;

var _ApiClient = require("../ApiClient.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The MetricTimelineEventProperties model module.
 * @module model/MetricTimelineEventProperties
 * @version 2021.11.26
 */
var MetricTimelineEventProperties = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MetricTimelineEventProperties</code>.
   * @alias module:model/MetricTimelineEventProperties
   * @class
   */
  function MetricTimelineEventProperties() {
    _classCallCheck(this, MetricTimelineEventProperties);
  }
  /**
   * Constructs a <code>MetricTimelineEventProperties</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MetricTimelineEventProperties} obj Optional instance to populate.
   * @return {module:model/MetricTimelineEventProperties} The populated <code>MetricTimelineEventProperties</code> instance.
   */


  _createClass(MetricTimelineEventProperties, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MetricTimelineEventProperties();
        if (data.hasOwnProperty('$event_id')) obj.eventId = _ApiClient.ApiClient.convertToType(data['$event_id'], 'String');
      }

      return obj;
    }
  }]);

  return MetricTimelineEventProperties;
}();
/**
 * @member {String} eventId
 */


exports.MetricTimelineEventProperties = MetricTimelineEventProperties;
MetricTimelineEventProperties.prototype.eventId = undefined;