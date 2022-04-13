"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListIdMembersBody = void 0;

var _ApiClient = require("../ApiClient.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ListIdMembersBody model module.
 * @module model/ListIdMembersBody
 * @version 2021.11.26
 */
var ListIdMembersBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListIdMembersBody</code>.
   * The profiles that you would like to add to the list. Each object in the array must have an &#x60;email&#x60; or &#x60;phone_number&#x60;. You can also provide additional properties as key-value pairs.
   * @alias module:model/ListIdMembersBody
   * @class
   * @param profiles {Array.<Object.<String, Object>>} 
   */
  function ListIdMembersBody(profiles) {
    _classCallCheck(this, ListIdMembersBody);

    this.profiles = profiles;
  }
  /**
   * Constructs a <code>ListIdMembersBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListIdMembersBody} obj Optional instance to populate.
   * @return {module:model/ListIdMembersBody} The populated <code>ListIdMembersBody</code> instance.
   */


  _createClass(ListIdMembersBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListIdMembersBody();
        if (data.hasOwnProperty('profiles')) obj.profiles = _ApiClient.ApiClient.convertToType(data['profiles'], [{
          'String': Object
        }]);
      }

      return obj;
    }
  }]);

  return ListIdMembersBody;
}();
/**
 * @member {Array.<Object.<String, Object>>} profiles
 */


exports.ListIdMembersBody = ListIdMembersBody;
ListIdMembersBody.prototype.profiles = undefined;