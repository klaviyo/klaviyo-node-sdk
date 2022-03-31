"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IdentifyPayload = void 0;

var _ApiClient = require("../ApiClient.js");

var _IdentifyPayloadProperties = require("./IdentifyPayloadProperties.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The IdentifyPayload model module.
 * @module model/IdentifyPayload
 * @version 2022.03.29
 */
var IdentifyPayload = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IdentifyPayload</code>.
   * @alias module:model/IdentifyPayload
   * @class
   * @param token {String} 
   * @param properties {module:model/IdentifyPayloadProperties} 
   */
  function IdentifyPayload(token, properties) {
    _classCallCheck(this, IdentifyPayload);

    this.token = token;
    this.properties = properties;
  }
  /**
   * Constructs a <code>IdentifyPayload</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IdentifyPayload} obj Optional instance to populate.
   * @return {module:model/IdentifyPayload} The populated <code>IdentifyPayload</code> instance.
   */


  _createClass(IdentifyPayload, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IdentifyPayload();
        if (data.hasOwnProperty('token')) obj.token = _ApiClient.ApiClient.convertToType(data['token'], 'String');
        if (data.hasOwnProperty('properties')) obj.properties = _IdentifyPayloadProperties.IdentifyPayloadProperties.constructFromObject(data['properties']);
      }

      return obj;
    }
  }]);

  return IdentifyPayload;
}();
/**
 * @member {String} token
 */


exports.IdentifyPayload = IdentifyPayload;
IdentifyPayload.prototype.token = undefined;
/**
 * @member {module:model/IdentifyPayloadProperties} properties
 */

IdentifyPayload.prototype.properties = undefined;