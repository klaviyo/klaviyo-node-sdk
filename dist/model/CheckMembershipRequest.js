"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckMembershipRequest = void 0;

var _ApiClient = require("../ApiClient.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The CheckMembershipRequest model module.
 * @module model/CheckMembershipRequest
 * @version 2021.11.26
 */
var CheckMembershipRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CheckMembershipRequest</code>.
   * @alias module:model/CheckMembershipRequest
   * @class
   */
  function CheckMembershipRequest() {
    _classCallCheck(this, CheckMembershipRequest);
  }
  /**
   * Constructs a <code>CheckMembershipRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CheckMembershipRequest} obj Optional instance to populate.
   * @return {module:model/CheckMembershipRequest} The populated <code>CheckMembershipRequest</code> instance.
   */


  _createClass(CheckMembershipRequest, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CheckMembershipRequest();
        if (data.hasOwnProperty('emails')) obj.emails = _ApiClient.ApiClient.convertToType(data['emails'], ['String']);
        if (data.hasOwnProperty('phone_numbers')) obj.phoneNumbers = _ApiClient.ApiClient.convertToType(data['phone_numbers'], ['String']);
        if (data.hasOwnProperty('push_tokens')) obj.pushTokens = _ApiClient.ApiClient.convertToType(data['push_tokens'], ['String']);
      }

      return obj;
    }
  }]);

  return CheckMembershipRequest;
}();
/**
 * List of email addresses
 * @member {Array.<String>} emails
 */


exports.CheckMembershipRequest = CheckMembershipRequest;
CheckMembershipRequest.prototype.emails = undefined;
/**
 * List of phone numbers
 * @member {Array.<String>} phoneNumbers
 */

CheckMembershipRequest.prototype.phoneNumbers = undefined;
/**
 * @member {Array.<String>} pushTokens
 */

CheckMembershipRequest.prototype.pushTokens = undefined;