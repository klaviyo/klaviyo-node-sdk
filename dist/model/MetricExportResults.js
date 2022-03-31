"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MetricExportResults = void 0;

var _ApiClient = require("../ApiClient.js");

var _MetricExportData = require("./MetricExportData.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The MetricExportResults model module.
 * @module model/MetricExportResults
 * @version 2022.03.29
 */
var MetricExportResults = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MetricExportResults</code>.
   * @alias module:model/MetricExportResults
   * @class
   */
  function MetricExportResults() {
    _classCallCheck(this, MetricExportResults);
  }
  /**
   * Constructs a <code>MetricExportResults</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MetricExportResults} obj Optional instance to populate.
   * @return {module:model/MetricExportResults} The populated <code>MetricExportResults</code> instance.
   */


  _createClass(MetricExportResults, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MetricExportResults();
        if (data.hasOwnProperty('segment')) obj.segment = _ApiClient.ApiClient.convertToType(data['segment'], 'String');
        if (data.hasOwnProperty('data')) obj.data = _ApiClient.ApiClient.convertToType(data['data'], [_MetricExportData.MetricExportData]);
      }

      return obj;
    }
  }]);

  return MetricExportResults;
}();
/**
 * @member {String} segment
 */


exports.MetricExportResults = MetricExportResults;
MetricExportResults.prototype.segment = undefined;
/**
 * @member {Array.<module:model/MetricExportData>} data
 */

MetricExportResults.prototype.data = undefined;