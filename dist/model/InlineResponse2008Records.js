"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InlineResponse2008Records = void 0;

var _ApiClient = require("../ApiClient.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The InlineResponse2008Records model module.
 * @module model/InlineResponse2008Records
 * @version 2021.11.26
 */
var InlineResponse2008Records = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse2008Records</code>.
   * @alias module:model/InlineResponse2008Records
   * @class
   */
  function InlineResponse2008Records() {
    _classCallCheck(this, InlineResponse2008Records);
  }
  /**
   * Constructs a <code>InlineResponse2008Records</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2008Records} obj Optional instance to populate.
   * @return {module:model/InlineResponse2008Records} The populated <code>InlineResponse2008Records</code> instance.
   */


  _createClass(InlineResponse2008Records, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2008Records();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('email')) obj.email = _ApiClient.ApiClient.convertToType(data['email'], 'String');
        if (data.hasOwnProperty('reason')) obj.reason = _ApiClient.ApiClient.convertToType(data['reason'], 'String');
        if (data.hasOwnProperty('phone_number')) obj.phoneNumber = _ApiClient.ApiClient.convertToType(data['phone_number'], 'String');
        if (data.hasOwnProperty('phone_reason')) obj.phoneReason = _ApiClient.ApiClient.convertToType(data['phone_reason'], 'String');
      }

      return obj;
    }
  }]);

  return InlineResponse2008Records;
}();
/**
 * @member {String} id
 */


exports.InlineResponse2008Records = InlineResponse2008Records;
InlineResponse2008Records.prototype.id = undefined;
/**
 * @member {String} email
 */

InlineResponse2008Records.prototype.email = undefined;
/**
 * @member {String} reason
 */

InlineResponse2008Records.prototype.reason = undefined;
/**
 * @member {String} phoneNumber
 */

InlineResponse2008Records.prototype.phoneNumber = undefined;
/**
 * @member {String} phoneReason
 */

InlineResponse2008Records.prototype.phoneReason = undefined;