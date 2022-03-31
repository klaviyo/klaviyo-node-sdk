"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InlineResponse20011Data = void 0;

var _ApiClient = require("../ApiClient.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The InlineResponse20011Data model module.
 * @module model/InlineResponse20011Data
 * @version 2022.03.29
 */
var InlineResponse20011Data = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20011Data</code>.
   * @alias module:model/InlineResponse20011Data
   * @class
   */
  function InlineResponse20011Data() {
    _classCallCheck(this, InlineResponse20011Data);
  }
  /**
   * Constructs a <code>InlineResponse20011Data</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20011Data} obj Optional instance to populate.
   * @return {module:model/InlineResponse20011Data} The populated <code>InlineResponse20011Data</code> instance.
   */


  _createClass(InlineResponse20011Data, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20011Data();
        if (data.hasOwnProperty('email')) obj.email = _ApiClient.ApiClient.convertToType(data['email'], 'String');
        if (data.hasOwnProperty('status')) obj.status = _ApiClient.ApiClient.convertToType(data['status'], 'String');
        if (data.hasOwnProperty('customer_id')) obj.customerId = _ApiClient.ApiClient.convertToType(data['customer_id'], 'String');
        if (data.hasOwnProperty('variation_id')) obj.variationId = _ApiClient.ApiClient.convertToType(data['variation_id'], 'String');
      }

      return obj;
    }
  }]);

  return InlineResponse20011Data;
}();
/**
 * @member {String} email
 */


exports.InlineResponse20011Data = InlineResponse20011Data;
InlineResponse20011Data.prototype.email = undefined;
/**
 * @member {String} status
 */

InlineResponse20011Data.prototype.status = undefined;
/**
 * @member {String} customerId
 */

InlineResponse20011Data.prototype.customerId = undefined;
/**
 * @member {String} variationId
 */

InlineResponse20011Data.prototype.variationId = undefined;