"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IdentifyPayloadProperties = void 0;

var _ApiClient = require("../ApiClient.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The IdentifyPayloadProperties model module.
 * @module model/IdentifyPayloadProperties
 * @version 2021.11.26
 */
var IdentifyPayloadProperties = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IdentifyPayloadProperties</code>.
   * @alias module:model/IdentifyPayloadProperties
   * @class
   */
  function IdentifyPayloadProperties() {
    _classCallCheck(this, IdentifyPayloadProperties);
  }
  /**
   * Constructs a <code>IdentifyPayloadProperties</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IdentifyPayloadProperties} obj Optional instance to populate.
   * @return {module:model/IdentifyPayloadProperties} The populated <code>IdentifyPayloadProperties</code> instance.
   */


  _createClass(IdentifyPayloadProperties, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IdentifyPayloadProperties();
        if (data.hasOwnProperty('$email')) obj.email = _ApiClient.ApiClient.convertToType(data['$email'], 'String');
        if (data.hasOwnProperty('$first_name')) obj.firstName = _ApiClient.ApiClient.convertToType(data['$first_name'], 'String');
        if (data.hasOwnProperty('$last_name')) obj.lastName = _ApiClient.ApiClient.convertToType(data['$last_name'], 'String');
        if (data.hasOwnProperty('$phone_number')) obj.phoneNumber = _ApiClient.ApiClient.convertToType(data['$phone_number'], 'String');
        if (data.hasOwnProperty('$title')) obj.title = _ApiClient.ApiClient.convertToType(data['$title'], 'String');
        if (data.hasOwnProperty('$organization')) obj.organization = _ApiClient.ApiClient.convertToType(data['$organization'], 'String');
        if (data.hasOwnProperty('$city')) obj.city = _ApiClient.ApiClient.convertToType(data['$city'], 'String');
        if (data.hasOwnProperty('$region')) obj.region = _ApiClient.ApiClient.convertToType(data['$region'], 'String');
        if (data.hasOwnProperty('$country')) obj.country = _ApiClient.ApiClient.convertToType(data['$country'], 'String');
        if (data.hasOwnProperty('$zip')) obj.zip = _ApiClient.ApiClient.convertToType(data['$zip'], 'String');
        if (data.hasOwnProperty('$image')) obj.image = _ApiClient.ApiClient.convertToType(data['$image'], 'String');
        if (data.hasOwnProperty('$consent')) obj.consent = _ApiClient.ApiClient.convertToType(data['$consent'], 'String');
        if (data.hasOwnProperty('YOUR_CUSTOM_FIELD')) obj.YOUR_CUSTOM_FIELD = _ApiClient.ApiClient.convertToType(data['YOUR_CUSTOM_FIELD'], Object);
      }

      return obj;
    }
  }]);

  return IdentifyPayloadProperties;
}();
/**
 * @member {String} email
 */


exports.IdentifyPayloadProperties = IdentifyPayloadProperties;
IdentifyPayloadProperties.prototype.email = undefined;
/**
 * @member {String} firstName
 */

IdentifyPayloadProperties.prototype.firstName = undefined;
/**
 * @member {String} lastName
 */

IdentifyPayloadProperties.prototype.lastName = undefined;
/**
 * @member {String} phoneNumber
 */

IdentifyPayloadProperties.prototype.phoneNumber = undefined;
/**
 * @member {String} title
 */

IdentifyPayloadProperties.prototype.title = undefined;
/**
 * @member {String} organization
 */

IdentifyPayloadProperties.prototype.organization = undefined;
/**
 * @member {String} city
 */

IdentifyPayloadProperties.prototype.city = undefined;
/**
 * @member {String} region
 */

IdentifyPayloadProperties.prototype.region = undefined;
/**
 * @member {String} country
 */

IdentifyPayloadProperties.prototype.country = undefined;
/**
 * @member {String} zip
 */

IdentifyPayloadProperties.prototype.zip = undefined;
/**
 * @member {String} image
 */

IdentifyPayloadProperties.prototype.image = undefined;
/**
 * @member {String} consent
 */

IdentifyPayloadProperties.prototype.consent = undefined;
/**
 * @member {Object} YOUR_CUSTOM_FIELD
 */

IdentifyPayloadProperties.prototype.YOUR_CUSTOM_FIELD = undefined;