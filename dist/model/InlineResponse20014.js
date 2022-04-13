"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InlineResponse20014 = void 0;

var _ApiClient = require("../ApiClient.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The InlineResponse20014 model module.
 * @module model/InlineResponse20014
 * @version 2021.11.26
 */
var InlineResponse20014 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20014</code>.
   * @alias module:model/InlineResponse20014
   * @class
   * @extends 
   */
  function InlineResponse20014() {
    _classCallCheck(this, InlineResponse20014);
  }
  /**
   * Constructs a <code>InlineResponse20014</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse20014} obj Optional instance to populate.
   * @return {module:model/InlineResponse20014} The populated <code>InlineResponse20014</code> instance.
   */


  _createClass(InlineResponse20014, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20014();

        _ApiClient.ApiClient.constructFromObject(data, obj, '');
      }

      return obj;
    }
  }]);

  return InlineResponse20014;
}();

exports.InlineResponse20014 = InlineResponse20014;