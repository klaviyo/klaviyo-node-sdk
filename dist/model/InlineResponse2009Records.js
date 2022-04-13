"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InlineResponse2009Records = void 0;

var _ApiClient = require("../ApiClient.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The InlineResponse2009Records model module.
 * @module model/InlineResponse2009Records
 * @version 2021.11.26
 */
var InlineResponse2009Records = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse2009Records</code>.
   * @alias module:model/InlineResponse2009Records
   * @class
   */
  function InlineResponse2009Records() {
    _classCallCheck(this, InlineResponse2009Records);
  }
  /**
   * Constructs a <code>InlineResponse2009Records</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2009Records} obj Optional instance to populate.
   * @return {module:model/InlineResponse2009Records} The populated <code>InlineResponse2009Records</code> instance.
   */


  _createClass(InlineResponse2009Records, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2009Records();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('email')) obj.email = _ApiClient.ApiClient.convertToType(data['email'], 'String');
        if (data.hasOwnProperty('phone_number')) obj.phoneNumber = _ApiClient.ApiClient.convertToType(data['phone_number'], 'String');
        if (data.hasOwnProperty('push_token')) obj.pushToken = _ApiClient.ApiClient.convertToType(data['push_token'], 'String');
      }

      return obj;
    }
  }]);

  return InlineResponse2009Records;
}();
/**
 * @member {String} id
 */


exports.InlineResponse2009Records = InlineResponse2009Records;
InlineResponse2009Records.prototype.id = undefined;
/**
 * @member {String} email
 */

InlineResponse2009Records.prototype.email = undefined;
/**
 * @member {String} phoneNumber
 */

InlineResponse2009Records.prototype.phoneNumber = undefined;
/**
 * @member {String} pushToken
 */

InlineResponse2009Records.prototype.pushToken = undefined;