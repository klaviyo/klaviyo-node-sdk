"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckMembershipResponseInner = void 0;

var _ApiClient = require("../ApiClient.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The CheckMembershipResponseInner model module.
 * @module model/CheckMembershipResponseInner
 * @version 2022.03.29
 */
var CheckMembershipResponseInner = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CheckMembershipResponseInner</code>.
   * @alias module:model/CheckMembershipResponseInner
   * @class
   * @extends 
   */
  function CheckMembershipResponseInner() {
    _classCallCheck(this, CheckMembershipResponseInner);
  }
  /**
   * Constructs a <code>CheckMembershipResponseInner</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CheckMembershipResponseInner} obj Optional instance to populate.
   * @return {module:model/CheckMembershipResponseInner} The populated <code>CheckMembershipResponseInner</code> instance.
   */


  _createClass(CheckMembershipResponseInner, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CheckMembershipResponseInner();

        _ApiClient.ApiClient.constructFromObject(data, obj, '');
      }

      return obj;
    }
  }]);

  return CheckMembershipResponseInner;
}();

exports.CheckMembershipResponseInner = CheckMembershipResponseInner;