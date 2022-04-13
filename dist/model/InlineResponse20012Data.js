"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InlineResponse20012Data = void 0;

var _ApiClient = require("../ApiClient.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The InlineResponse20012Data model module.
 * @module model/InlineResponse20012Data
 * @version 2021.11.26
 */
var InlineResponse20012Data = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20012Data</code>.
   * @alias module:model/InlineResponse20012Data
   * @class
   */
  function InlineResponse20012Data() {
    _classCallCheck(this, InlineResponse20012Data);
  }
  /**
   * Constructs a <code>InlineResponse20012Data</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20012Data} obj Optional instance to populate.
   * @return {module:model/InlineResponse20012Data} The populated <code>InlineResponse20012Data</code> instance.
   */


  _createClass(InlineResponse20012Data, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20012Data();
        if (data.hasOwnProperty('email')) obj.email = _ApiClient.ApiClient.convertToType(data['email'], 'String');
        if (data.hasOwnProperty('status')) obj.status = _ApiClient.ApiClient.convertToType(data['status'], 'String');
        if (data.hasOwnProperty('customer_id')) obj.customerId = _ApiClient.ApiClient.convertToType(data['customer_id'], 'String');
        if (data.hasOwnProperty('variation_id')) obj.variationId = _ApiClient.ApiClient.convertToType(data['variation_id'], 'String');
      }

      return obj;
    }
  }]);

  return InlineResponse20012Data;
}();
/**
 * @member {String} email
 */


exports.InlineResponse20012Data = InlineResponse20012Data;
InlineResponse20012Data.prototype.email = undefined;
/**
 * @member {String} status
 */

InlineResponse20012Data.prototype.status = undefined;
/**
 * @member {String} customerId
 */

InlineResponse20012Data.prototype.customerId = undefined;
/**
 * @member {String} variationId
 */

InlineResponse20012Data.prototype.variationId = undefined;