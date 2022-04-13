"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListIdMembersBody1 = void 0;

var _ApiClient = require("../ApiClient.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ListIdMembersBody1 model module.
 * @module model/ListIdMembersBody1
 * @version 2021.11.26
 */
var ListIdMembersBody1 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListIdMembersBody1</code>.
   *  The profiles that you would like to remove from the list.   Example:  {   \&quot;emails\&quot;:[\&quot;george.washington@klaviyo.com\&quot;,\&quot;abraham.lincoln@klaviyo.com\&quot;],   \&quot;phone_numbers\&quot;:[\&quot;+13239169023\&quot;],   \&quot;push_tokens\&quot;:[\&quot;03df25c845d460bcdad7802d2vf6fc1dfde97283bf75cc993eb6dca835ea2e2r\&quot;] } 
   * @alias module:model/ListIdMembersBody1
   * @class
   */
  function ListIdMembersBody1() {
    _classCallCheck(this, ListIdMembersBody1);
  }
  /**
   * Constructs a <code>ListIdMembersBody1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListIdMembersBody1} obj Optional instance to populate.
   * @return {module:model/ListIdMembersBody1} The populated <code>ListIdMembersBody1</code> instance.
   */


  _createClass(ListIdMembersBody1, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListIdMembersBody1();
        if (data.hasOwnProperty('emails')) obj.emails = _ApiClient.ApiClient.convertToType(data['emails'], ['String']);
        if (data.hasOwnProperty('phone_numbers')) obj.phoneNumbers = _ApiClient.ApiClient.convertToType(data['phone_numbers'], ['String']);
        if (data.hasOwnProperty('push_tokens')) obj.pushTokens = _ApiClient.ApiClient.convertToType(data['push_tokens'], ['String']);
      }

      return obj;
    }
  }]);

  return ListIdMembersBody1;
}();
/**
 * @member {Array.<String>} emails
 */


exports.ListIdMembersBody1 = ListIdMembersBody1;
ListIdMembersBody1.prototype.emails = undefined;
/**
 * @member {Array.<String>} phoneNumbers
 */

ListIdMembersBody1.prototype.phoneNumbers = undefined;
/**
 * @member {Array.<String>} pushTokens
 */

ListIdMembersBody1.prototype.pushTokens = undefined;