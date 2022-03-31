"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListSubscribePostResponseDataInner = void 0;

var _ApiClient = require("../ApiClient.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ListSubscribePostResponseDataInner model module.
 * @module model/ListSubscribePostResponseDataInner
 * @version 2022.03.29
 */
var ListSubscribePostResponseDataInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListSubscribePostResponseDataInner</code>.
   * @alias module:model/ListSubscribePostResponseDataInner
   * @class
   */
  function ListSubscribePostResponseDataInner() {
    _classCallCheck(this, ListSubscribePostResponseDataInner);
  }
  /**
   * Constructs a <code>ListSubscribePostResponseDataInner</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListSubscribePostResponseDataInner} obj Optional instance to populate.
   * @return {module:model/ListSubscribePostResponseDataInner} The populated <code>ListSubscribePostResponseDataInner</code> instance.
   */


  _createClass(ListSubscribePostResponseDataInner, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListSubscribePostResponseDataInner();
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('email')) obj.email = _ApiClient.ApiClient.convertToType(data['email'], 'String');
        if (data.hasOwnProperty('phone_number')) obj.phoneNumber = _ApiClient.ApiClient.convertToType(data['phone_number'], 'String');
      }

      return obj;
    }
  }]);

  return ListSubscribePostResponseDataInner;
}();
/**
 * @member {String} id
 */


exports.ListSubscribePostResponseDataInner = ListSubscribePostResponseDataInner;
ListSubscribePostResponseDataInner.prototype.id = undefined;
/**
 * @member {String} email
 */

ListSubscribePostResponseDataInner.prototype.email = undefined;
/**
 * @member {String} phoneNumber
 */

ListSubscribePostResponseDataInner.prototype.phoneNumber = undefined;