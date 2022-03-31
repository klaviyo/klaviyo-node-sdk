"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TrackPayload = void 0;

var _ApiClient = require("../ApiClient.js");

var _TrackPayloadCustomerProperties = require("./TrackPayloadCustomerProperties.js");

var _TrackPayloadProperties = require("./TrackPayloadProperties.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The TrackPayload model module.
 * @module model/TrackPayload
 * @version 2022.03.29
 */
var TrackPayload = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TrackPayload</code>.
   * @alias module:model/TrackPayload
   * @class
   * @param token {String} 
   * @param customerProperties {module:model/TrackPayloadCustomerProperties} 
   * @param properties {module:model/TrackPayloadProperties} 
   */
  function TrackPayload(token, customerProperties, properties) {
    _classCallCheck(this, TrackPayload);

    this.token = token;
    this.customerProperties = customerProperties;
    this.properties = properties;
  }
  /**
   * Constructs a <code>TrackPayload</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TrackPayload} obj Optional instance to populate.
   * @return {module:model/TrackPayload} The populated <code>TrackPayload</code> instance.
   */


  _createClass(TrackPayload, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TrackPayload();
        if (data.hasOwnProperty('token')) obj.token = _ApiClient.ApiClient.convertToType(data['token'], 'String');
        if (data.hasOwnProperty('customer_properties')) obj.customerProperties = _TrackPayloadCustomerProperties.TrackPayloadCustomerProperties.constructFromObject(data['customer_properties']);
        if (data.hasOwnProperty('properties')) obj.properties = _TrackPayloadProperties.TrackPayloadProperties.constructFromObject(data['properties']);
        if (data.hasOwnProperty('time')) obj.time = _ApiClient.ApiClient.convertToType(data['time'], Object);
      }

      return obj;
    }
  }]);

  return TrackPayload;
}();
/**
 * @member {String} token
 */


exports.TrackPayload = TrackPayload;
TrackPayload.prototype.token = undefined;
/**
 * @member {module:model/TrackPayloadCustomerProperties} customerProperties
 */

TrackPayload.prototype.customerProperties = undefined;
/**
 * @member {module:model/TrackPayloadProperties} properties
 */

TrackPayload.prototype.properties = undefined;
/**
 * @member {Object} time
 */

TrackPayload.prototype.time = undefined;