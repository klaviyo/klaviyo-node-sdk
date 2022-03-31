"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteEmail = void 0;

var _ApiClient = require("../ApiClient.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The DeleteEmail model module.
 * @module model/DeleteEmail
 * @version 2022.03.29
 */
var DeleteEmail = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DeleteEmail</code>.
   * @alias module:model/DeleteEmail
   * @class
   */
  function DeleteEmail() {
    _classCallCheck(this, DeleteEmail);
  }
  /**
   * Constructs a <code>DeleteEmail</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeleteEmail} obj Optional instance to populate.
   * @return {module:model/DeleteEmail} The populated <code>DeleteEmail</code> instance.
   */


  _createClass(DeleteEmail, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeleteEmail();
        if (data.hasOwnProperty('email')) obj.email = _ApiClient.ApiClient.convertToType(data['email'], 'String');
      }

      return obj;
    }
  }]);

  return DeleteEmail;
}();
/**
 * @member {String} email
 */


exports.DeleteEmail = DeleteEmail;
DeleteEmail.prototype.email = undefined;