"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InlineResponse2007Records = void 0;

var _ApiClient = require("../ApiClient.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The InlineResponse2007Records model module.
 * @module model/InlineResponse2007Records
 * @version 2022.03.29
 */
var InlineResponse2007Records = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse2007Records</code>.
   * @alias module:model/InlineResponse2007Records
   * @class
   */
  function InlineResponse2007Records() {
    _classCallCheck(this, InlineResponse2007Records);
  }
  /**
   * Constructs a <code>InlineResponse2007Records</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2007Records} obj Optional instance to populate.
   * @return {module:model/InlineResponse2007Records} The populated <code>InlineResponse2007Records</code> instance.
   */


  _createClass(InlineResponse2007Records, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2007Records();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('email')) obj.email = _ApiClient.ApiClient.convertToType(data['email'], 'String');
        if (data.hasOwnProperty('reason')) obj.reason = _ApiClient.ApiClient.convertToType(data['reason'], 'String');
        if (data.hasOwnProperty('phone_number')) obj.phoneNumber = _ApiClient.ApiClient.convertToType(data['phone_number'], 'String');
        if (data.hasOwnProperty('phone_reason')) obj.phoneReason = _ApiClient.ApiClient.convertToType(data['phone_reason'], 'String');
      }

      return obj;
    }
  }]);

  return InlineResponse2007Records;
}();
/**
 * @member {String} id
 */


exports.InlineResponse2007Records = InlineResponse2007Records;
InlineResponse2007Records.prototype.id = undefined;
/**
 * @member {String} email
 */

InlineResponse2007Records.prototype.email = undefined;
/**
 * @member {String} reason
 */

InlineResponse2007Records.prototype.reason = undefined;
/**
 * @member {String} phoneNumber
 */

InlineResponse2007Records.prototype.phoneNumber = undefined;
/**
 * @member {String} phoneReason
 */

InlineResponse2007Records.prototype.phoneReason = undefined;