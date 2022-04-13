"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GlobalExclusionResponseDataData = void 0;

var _ApiClient = require("../ApiClient.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The GlobalExclusionResponseDataData model module.
 * @module model/GlobalExclusionResponseDataData
 * @version 2021.11.26
 */
var GlobalExclusionResponseDataData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GlobalExclusionResponseDataData</code>.
   * @alias module:model/GlobalExclusionResponseDataData
   * @class
   */
  function GlobalExclusionResponseDataData() {
    _classCallCheck(this, GlobalExclusionResponseDataData);
  }
  /**
   * Constructs a <code>GlobalExclusionResponseDataData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GlobalExclusionResponseDataData} obj Optional instance to populate.
   * @return {module:model/GlobalExclusionResponseDataData} The populated <code>GlobalExclusionResponseDataData</code> instance.
   */


  _createClass(GlobalExclusionResponseDataData, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GlobalExclusionResponseDataData();
        if (data.hasOwnProperty('object')) obj._object = _ApiClient.ApiClient.convertToType(data['object'], 'String');
        if (data.hasOwnProperty('email')) obj.email = _ApiClient.ApiClient.convertToType(data['email'], 'String');
        if (data.hasOwnProperty('reason')) obj.reason = _ApiClient.ApiClient.convertToType(data['reason'], 'String');
        if (data.hasOwnProperty('timestamp')) obj.timestamp = _ApiClient.ApiClient.convertToType(data['timestamp'], 'String');
      }

      return obj;
    }
  }]);

  return GlobalExclusionResponseDataData;
}();
/**
 * @member {String} _object
 */


exports.GlobalExclusionResponseDataData = GlobalExclusionResponseDataData;
GlobalExclusionResponseDataData.prototype._object = undefined;
/**
 * @member {String} email
 */

GlobalExclusionResponseDataData.prototype.email = undefined;
/**
 * @member {String} reason
 */

GlobalExclusionResponseDataData.prototype.reason = undefined;
/**
 * @member {String} timestamp
 */

GlobalExclusionResponseDataData.prototype.timestamp = undefined;