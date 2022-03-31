"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeprecatedGetListResponse = void 0;

var _ApiClient = require("../ApiClient.js");

var _DeprecatedGetListResponseData = require("./DeprecatedGetListResponseData.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The DeprecatedGetListResponse model module.
 * @module model/DeprecatedGetListResponse
 * @version 2022.03.29
 */
var DeprecatedGetListResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DeprecatedGetListResponse</code>.
   * @alias module:model/DeprecatedGetListResponse
   * @class
   */
  function DeprecatedGetListResponse() {
    _classCallCheck(this, DeprecatedGetListResponse);
  }
  /**
   * Constructs a <code>DeprecatedGetListResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeprecatedGetListResponse} obj Optional instance to populate.
   * @return {module:model/DeprecatedGetListResponse} The populated <code>DeprecatedGetListResponse</code> instance.
   */


  _createClass(DeprecatedGetListResponse, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeprecatedGetListResponse();
        if (data.hasOwnProperty('object')) obj._object = _ApiClient.ApiClient.convertToType(data['object'], 'String');
        if (data.hasOwnProperty('start')) obj.start = _ApiClient.ApiClient.convertToType(data['start'], 'Number');
        if (data.hasOwnProperty('end')) obj.end = _ApiClient.ApiClient.convertToType(data['end'], 'Number');
        if (data.hasOwnProperty('page')) obj.page = _ApiClient.ApiClient.convertToType(data['page'], 'Number');
        if (data.hasOwnProperty('size')) obj.size = _ApiClient.ApiClient.convertToType(data['size'], 'Number');
        if (data.hasOwnProperty('total')) obj.total = _ApiClient.ApiClient.convertToType(data['total'], 'Number');
        if (data.hasOwnProperty('data')) obj.data = _ApiClient.ApiClient.convertToType(data['data'], [_DeprecatedGetListResponseData.DeprecatedGetListResponseData]);
      }

      return obj;
    }
  }]);

  return DeprecatedGetListResponse;
}();
/**
 * @member {String} _object
 */


exports.DeprecatedGetListResponse = DeprecatedGetListResponse;
DeprecatedGetListResponse.prototype._object = undefined;
/**
 * @member {Number} start
 */

DeprecatedGetListResponse.prototype.start = undefined;
/**
 * @member {Number} end
 */

DeprecatedGetListResponse.prototype.end = undefined;
/**
 * @member {Number} page
 */

DeprecatedGetListResponse.prototype.page = undefined;
/**
 * @member {Number} size
 */

DeprecatedGetListResponse.prototype.size = undefined;
/**
 * @member {Number} total
 */

DeprecatedGetListResponse.prototype.total = undefined;
/**
 * @member {Array.<module:model/DeprecatedGetListResponseData>} data
 */

DeprecatedGetListResponse.prototype.data = undefined;