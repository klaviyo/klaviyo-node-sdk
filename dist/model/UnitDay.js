"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnitDay = void 0;

var _ApiClient = require("../ApiClient.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The UnitDay model module.
 * @module model/UnitDay
 * @version 2021.11.26
 */
var UnitDay = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UnitDay</code>.
   * @alias module:model/UnitDay
   * @class
   */
  function UnitDay() {
    _classCallCheck(this, UnitDay);
  }
  /**
   * Constructs a <code>UnitDay</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UnitDay} obj Optional instance to populate.
   * @return {module:model/UnitDay} The populated <code>UnitDay</code> instance.
   */


  _createClass(UnitDay, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UnitDay();
      }

      return obj;
    }
  }]);

  return UnitDay;
}();

exports.UnitDay = UnitDay;