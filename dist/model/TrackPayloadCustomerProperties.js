"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TrackPayloadCustomerProperties = void 0;

var _ApiClient = require("../ApiClient.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The TrackPayloadCustomerProperties model module.
 * @module model/TrackPayloadCustomerProperties
 * @version 2022.03.29
 */
var TrackPayloadCustomerProperties = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TrackPayloadCustomerProperties</code>.
   * @alias module:model/TrackPayloadCustomerProperties
   * @class
   */
  function TrackPayloadCustomerProperties() {
    _classCallCheck(this, TrackPayloadCustomerProperties);
  }
  /**
   * Constructs a <code>TrackPayloadCustomerProperties</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TrackPayloadCustomerProperties} obj Optional instance to populate.
   * @return {module:model/TrackPayloadCustomerProperties} The populated <code>TrackPayloadCustomerProperties</code> instance.
   */


  _createClass(TrackPayloadCustomerProperties, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TrackPayloadCustomerProperties();
        if (data.hasOwnProperty('$email')) obj.email = _ApiClient.ApiClient.convertToType(data['$email'], 'String');
        if (data.hasOwnProperty('$phone_number')) obj.phoneNumber = _ApiClient.ApiClient.convertToType(data['$phone_number'], 'String');
      }

      return obj;
    }
  }]);

  return TrackPayloadCustomerProperties;
}();
/**
 * @member {String} email
 */


exports.TrackPayloadCustomerProperties = TrackPayloadCustomerProperties;
TrackPayloadCustomerProperties.prototype.email = undefined;
/**
 * @member {String} phoneNumber
 */

TrackPayloadCustomerProperties.prototype.phoneNumber = undefined;