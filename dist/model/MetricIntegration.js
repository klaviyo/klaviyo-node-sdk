"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MetricIntegration = void 0;

var _ApiClient = require("../ApiClient.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The MetricIntegration model module.
 * @module model/MetricIntegration
 * @version 2022.03.29
 */
var MetricIntegration = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MetricIntegration</code>.
   * @alias module:model/MetricIntegration
   * @class
   */
  function MetricIntegration() {
    _classCallCheck(this, MetricIntegration);
  }
  /**
   * Constructs a <code>MetricIntegration</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MetricIntegration} obj Optional instance to populate.
   * @return {module:model/MetricIntegration} The populated <code>MetricIntegration</code> instance.
   */


  _createClass(MetricIntegration, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MetricIntegration();
        if (data.hasOwnProperty('object')) obj._object = _ApiClient.ApiClient.convertToType(data['object'], 'String');
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('name')) obj.name = _ApiClient.ApiClient.convertToType(data['name'], 'String');
        if (data.hasOwnProperty('category')) obj.category = _ApiClient.ApiClient.convertToType(data['category'], 'String');
      }

      return obj;
    }
  }]);

  return MetricIntegration;
}();
/**
 * @member {String} _object
 */


exports.MetricIntegration = MetricIntegration;
MetricIntegration.prototype._object = undefined;
/**
 * @member {String} id
 */

MetricIntegration.prototype.id = undefined;
/**
 * @member {String} name
 */

MetricIntegration.prototype.name = undefined;
/**
 * @member {String} category
 */

MetricIntegration.prototype.category = undefined;