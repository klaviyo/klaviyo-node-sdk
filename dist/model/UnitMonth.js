"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnitMonth = void 0;

var _ApiClient = require("../ApiClient.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The UnitMonth model module.
 * @module model/UnitMonth
 * @version 2022.03.29
 */
var UnitMonth = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UnitMonth</code>.
   * @alias module:model/UnitMonth
   * @class
   */
  function UnitMonth() {
    _classCallCheck(this, UnitMonth);
  }
  /**
   * Constructs a <code>UnitMonth</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UnitMonth} obj Optional instance to populate.
   * @return {module:model/UnitMonth} The populated <code>UnitMonth</code> instance.
   */


  _createClass(UnitMonth, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UnitMonth();
      }

      return obj;
    }
  }]);

  return UnitMonth;
}();

exports.UnitMonth = UnitMonth;