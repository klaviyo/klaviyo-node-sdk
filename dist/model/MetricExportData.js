"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MetricExportData = void 0;

var _ApiClient = require("../ApiClient.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The MetricExportData model module.
 * @module model/MetricExportData
 * @version 2022.03.29
 */
var MetricExportData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MetricExportData</code>.
   * @alias module:model/MetricExportData
   * @class
   */
  function MetricExportData() {
    _classCallCheck(this, MetricExportData);
  }
  /**
   * Constructs a <code>MetricExportData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MetricExportData} obj Optional instance to populate.
   * @return {module:model/MetricExportData} The populated <code>MetricExportData</code> instance.
   */


  _createClass(MetricExportData, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MetricExportData();
        if (data.hasOwnProperty('date')) obj._date = _ApiClient.ApiClient.convertToType(data['date'], 'String');
        if (data.hasOwnProperty('values')) obj.values = _ApiClient.ApiClient.convertToType(data['values'], ['Number']);
      }

      return obj;
    }
  }]);

  return MetricExportData;
}();
/**
 * @member {String} _date
 */


exports.MetricExportData = MetricExportData;
MetricExportData.prototype._date = undefined;
/**
 * @member {Array.<Number>} values
 */

MetricExportData.prototype.values = undefined;