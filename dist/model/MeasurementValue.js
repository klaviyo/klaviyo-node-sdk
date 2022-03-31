"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MeasurementValue = void 0;

var _ApiClient = require("../ApiClient.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The MeasurementValue model module.
 * @module model/MeasurementValue
 * @version 2022.03.29
 */
var MeasurementValue = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MeasurementValue</code>.
   * @alias module:model/MeasurementValue
   * @class
   */
  function MeasurementValue() {
    _classCallCheck(this, MeasurementValue);
  }
  /**
   * Constructs a <code>MeasurementValue</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MeasurementValue} obj Optional instance to populate.
   * @return {module:model/MeasurementValue} The populated <code>MeasurementValue</code> instance.
   */


  _createClass(MeasurementValue, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MeasurementValue();
      }

      return obj;
    }
  }]);

  return MeasurementValue;
}();

exports.MeasurementValue = MeasurementValue;