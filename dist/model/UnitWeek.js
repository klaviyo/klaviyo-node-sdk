"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnitWeek = void 0;

var _ApiClient = require("../ApiClient.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The UnitWeek model module.
 * @module model/UnitWeek
 * @version 2021.11.26
 */
var UnitWeek = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UnitWeek</code>.
   * @alias module:model/UnitWeek
   * @class
   */
  function UnitWeek() {
    _classCallCheck(this, UnitWeek);
  }
  /**
   * Constructs a <code>UnitWeek</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UnitWeek} obj Optional instance to populate.
   * @return {module:model/UnitWeek} The populated <code>UnitWeek</code> instance.
   */


  _createClass(UnitWeek, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UnitWeek();
      }

      return obj;
    }
  }]);

  return UnitWeek;
}();

exports.UnitWeek = UnitWeek;