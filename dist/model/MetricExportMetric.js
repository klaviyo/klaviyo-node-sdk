"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MetricExportMetric = void 0;

var _ApiClient = require("../ApiClient.js");

var _MetricIntegration = require("./MetricIntegration.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The MetricExportMetric model module.
 * @module model/MetricExportMetric
 * @version 2021.11.26
 */
var MetricExportMetric = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MetricExportMetric</code>.
   * @alias module:model/MetricExportMetric
   * @class
   */
  function MetricExportMetric() {
    _classCallCheck(this, MetricExportMetric);
  }
  /**
   * Constructs a <code>MetricExportMetric</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MetricExportMetric} obj Optional instance to populate.
   * @return {module:model/MetricExportMetric} The populated <code>MetricExportMetric</code> instance.
   */


  _createClass(MetricExportMetric, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MetricExportMetric();
        if (data.hasOwnProperty('object')) obj._object = _ApiClient.ApiClient.convertToType(data['object'], 'String');
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('name')) obj.name = _ApiClient.ApiClient.convertToType(data['name'], 'String');
        if (data.hasOwnProperty('integration')) obj.integration = _MetricIntegration.MetricIntegration.constructFromObject(data['integration']);
        if (data.hasOwnProperty('created')) obj.created = _ApiClient.ApiClient.convertToType(data['created'], 'String');
        if (data.hasOwnProperty('updated')) obj.updated = _ApiClient.ApiClient.convertToType(data['updated'], 'String');
      }

      return obj;
    }
  }]);

  return MetricExportMetric;
}();
/**
 * @member {String} _object
 */


exports.MetricExportMetric = MetricExportMetric;
MetricExportMetric.prototype._object = undefined;
/**
 * @member {String} id
 */

MetricExportMetric.prototype.id = undefined;
/**
 * @member {String} name
 */

MetricExportMetric.prototype.name = undefined;
/**
 * @member {module:model/MetricIntegration} integration
 */

MetricExportMetric.prototype.integration = undefined;
/**
 * @member {String} created
 */

MetricExportMetric.prototype.created = undefined;
/**
 * @member {String} updated
 */

MetricExportMetric.prototype.updated = undefined;