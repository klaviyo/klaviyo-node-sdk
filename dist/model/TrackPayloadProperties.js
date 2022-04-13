"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TrackPayloadProperties = void 0;

var _ApiClient = require("../ApiClient.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The TrackPayloadProperties model module.
 * @module model/TrackPayloadProperties
 * @version 2021.11.26
 */
var TrackPayloadProperties = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TrackPayloadProperties</code>.
   * @alias module:model/TrackPayloadProperties
   * @class
   */
  function TrackPayloadProperties() {
    _classCallCheck(this, TrackPayloadProperties);
  }
  /**
   * Constructs a <code>TrackPayloadProperties</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TrackPayloadProperties} obj Optional instance to populate.
   * @return {module:model/TrackPayloadProperties} The populated <code>TrackPayloadProperties</code> instance.
   */


  _createClass(TrackPayloadProperties, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TrackPayloadProperties();
        if (data.hasOwnProperty('$event_id')) obj.eventId = _ApiClient.ApiClient.convertToType(data['$event_id'], 'String');
        if (data.hasOwnProperty('$value')) obj.value = _ApiClient.ApiClient.convertToType(data['$value'], 'String');
        if (data.hasOwnProperty('YOUR_CUSTOM_FIELD')) obj.YOUR_CUSTOM_FIELD = _ApiClient.ApiClient.convertToType(data['YOUR_CUSTOM_FIELD'], Object);
      }

      return obj;
    }
  }]);

  return TrackPayloadProperties;
}();
/**
 * @member {String} eventId
 */


exports.TrackPayloadProperties = TrackPayloadProperties;
TrackPayloadProperties.prototype.eventId = undefined;
/**
 * @member {String} value
 */

TrackPayloadProperties.prototype.value = undefined;
/**
 * @member {Object} YOUR_CUSTOM_FIELD
 */

TrackPayloadProperties.prototype.YOUR_CUSTOM_FIELD = undefined;