"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MetricTimelineData = void 0;

var _ApiClient = require("../ApiClient.js");

var _MetricTimelineEventProperties = require("./MetricTimelineEventProperties.js");

var _MetricTimelinePerson = require("./MetricTimelinePerson.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The MetricTimelineData model module.
 * @module model/MetricTimelineData
 * @version 2021.11.26
 */
var MetricTimelineData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MetricTimelineData</code>.
   * @alias module:model/MetricTimelineData
   * @class
   */
  function MetricTimelineData() {
    _classCallCheck(this, MetricTimelineData);
  }
  /**
   * Constructs a <code>MetricTimelineData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MetricTimelineData} obj Optional instance to populate.
   * @return {module:model/MetricTimelineData} The populated <code>MetricTimelineData</code> instance.
   */


  _createClass(MetricTimelineData, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MetricTimelineData();
        if (data.hasOwnProperty('object')) obj._object = _ApiClient.ApiClient.convertToType(data['object'], 'String');
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('statistic_id')) obj.statisticId = _ApiClient.ApiClient.convertToType(data['statistic_id'], 'String');
        if (data.hasOwnProperty('timestamp')) obj.timestamp = _ApiClient.ApiClient.convertToType(data['timestamp'], 'Number');
        if (data.hasOwnProperty('event_name')) obj.eventName = _ApiClient.ApiClient.convertToType(data['event_name'], 'String');
        if (data.hasOwnProperty('event_properties')) obj.eventProperties = _MetricTimelineEventProperties.MetricTimelineEventProperties.constructFromObject(data['event_properties']);
        if (data.hasOwnProperty('datetime')) obj.datetime = _ApiClient.ApiClient.convertToType(data['datetime'], 'String');
        if (data.hasOwnProperty('uuid')) obj.uuid = _ApiClient.ApiClient.convertToType(data['uuid'], 'String');
        if (data.hasOwnProperty('person')) obj.person = _MetricTimelinePerson.MetricTimelinePerson.constructFromObject(data['person']);
      }

      return obj;
    }
  }]);

  return MetricTimelineData;
}();
/**
 * @member {String} _object
 */


exports.MetricTimelineData = MetricTimelineData;
MetricTimelineData.prototype._object = undefined;
/**
 * @member {String} id
 */

MetricTimelineData.prototype.id = undefined;
/**
 * @member {String} statisticId
 */

MetricTimelineData.prototype.statisticId = undefined;
/**
 * @member {Number} timestamp
 */

MetricTimelineData.prototype.timestamp = undefined;
/**
 * @member {String} eventName
 */

MetricTimelineData.prototype.eventName = undefined;
/**
 * @member {module:model/MetricTimelineEventProperties} eventProperties
 */

MetricTimelineData.prototype.eventProperties = undefined;
/**
 * @member {String} datetime
 */

MetricTimelineData.prototype.datetime = undefined;
/**
 * @member {String} uuid
 */

MetricTimelineData.prototype.uuid = undefined;
/**
 * @member {module:model/MetricTimelinePerson} person
 */

MetricTimelineData.prototype.person = undefined;