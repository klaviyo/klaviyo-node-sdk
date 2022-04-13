"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MetricTimelinePerson = void 0;

var _ApiClient = require("../ApiClient.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The MetricTimelinePerson model module.
 * @module model/MetricTimelinePerson
 * @version 2021.11.26
 */
var MetricTimelinePerson = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MetricTimelinePerson</code>.
   * @alias module:model/MetricTimelinePerson
   * @class
   */
  function MetricTimelinePerson() {
    _classCallCheck(this, MetricTimelinePerson);
  }
  /**
   * Constructs a <code>MetricTimelinePerson</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MetricTimelinePerson} obj Optional instance to populate.
   * @return {module:model/MetricTimelinePerson} The populated <code>MetricTimelinePerson</code> instance.
   */


  _createClass(MetricTimelinePerson, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MetricTimelinePerson();
        if (data.hasOwnProperty('object')) obj._object = _ApiClient.ApiClient.convertToType(data['object'], 'String');
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
      }

      return obj;
    }
  }]);

  return MetricTimelinePerson;
}();
/**
 * @member {String} _object
 */


exports.MetricTimelinePerson = MetricTimelinePerson;
MetricTimelinePerson.prototype._object = undefined;
/**
 * @member {String} id
 */

MetricTimelinePerson.prototype.id = undefined;