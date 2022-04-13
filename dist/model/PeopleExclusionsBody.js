"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PeopleExclusionsBody = void 0;

var _ApiClient = require("../ApiClient.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The PeopleExclusionsBody model module.
 * @module model/PeopleExclusionsBody
 * @version 2021.11.26
 */
var PeopleExclusionsBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PeopleExclusionsBody</code>.
   * @alias module:model/PeopleExclusionsBody
   * @class
   * @param email {String} 
   */
  function PeopleExclusionsBody(email) {
    _classCallCheck(this, PeopleExclusionsBody);

    this.email = email;
  }
  /**
   * Constructs a <code>PeopleExclusionsBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PeopleExclusionsBody} obj Optional instance to populate.
   * @return {module:model/PeopleExclusionsBody} The populated <code>PeopleExclusionsBody</code> instance.
   */


  _createClass(PeopleExclusionsBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PeopleExclusionsBody();
        if (data.hasOwnProperty('email')) obj.email = _ApiClient.ApiClient.convertToType(data['email'], 'String');
      }

      return obj;
    }
  }]);

  return PeopleExclusionsBody;
}();
/**
 * @member {String} email
 * @default 'george.washington@klaviyo.com'
 */


exports.PeopleExclusionsBody = PeopleExclusionsBody;
PeopleExclusionsBody.prototype.email = 'george.washington@klaviyo.com';