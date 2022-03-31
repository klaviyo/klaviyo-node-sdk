"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeprecatedGetListResponseData = void 0;

var _ApiClient = require("../ApiClient.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The DeprecatedGetListResponseData model module.
 * @module model/DeprecatedGetListResponseData
 * @version 2022.03.29
 */
var DeprecatedGetListResponseData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DeprecatedGetListResponseData</code>.
   * @alias module:model/DeprecatedGetListResponseData
   * @class
   */
  function DeprecatedGetListResponseData() {
    _classCallCheck(this, DeprecatedGetListResponseData);
  }
  /**
   * Constructs a <code>DeprecatedGetListResponseData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeprecatedGetListResponseData} obj Optional instance to populate.
   * @return {module:model/DeprecatedGetListResponseData} The populated <code>DeprecatedGetListResponseData</code> instance.
   */


  _createClass(DeprecatedGetListResponseData, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeprecatedGetListResponseData();
        if (data.hasOwnProperty('object')) obj._object = _ApiClient.ApiClient.convertToType(data['object'], 'String');
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('type')) obj.type = _ApiClient.ApiClient.convertToType(data['type'], 'String');
        if (data.hasOwnProperty('created')) obj.created = _ApiClient.ApiClient.convertToType(data['created'], 'String');
        if (data.hasOwnProperty('updated')) obj.updated = _ApiClient.ApiClient.convertToType(data['updated'], 'String');
        if (data.hasOwnProperty('person_count')) obj.personCount = _ApiClient.ApiClient.convertToType(data['person_count'], 'Number');
      }

      return obj;
    }
  }]);

  return DeprecatedGetListResponseData;
}();
/**
 * @member {String} _object
 */


exports.DeprecatedGetListResponseData = DeprecatedGetListResponseData;
DeprecatedGetListResponseData.prototype._object = undefined;
/**
 * @member {String} id
 */

DeprecatedGetListResponseData.prototype.id = undefined;
/**
 * @member {String} type
 */

DeprecatedGetListResponseData.prototype.type = undefined;
/**
 * @member {String} created
 */

DeprecatedGetListResponseData.prototype.created = undefined;
/**
 * @member {String} updated
 */

DeprecatedGetListResponseData.prototype.updated = undefined;
/**
 * @member {Number} personCount
 */

DeprecatedGetListResponseData.prototype.personCount = undefined;