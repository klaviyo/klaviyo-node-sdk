"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IdentifyPayloadPost = void 0;

var _ApiClient = require("../ApiClient.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The IdentifyPayloadPost model module.
 * @module model/IdentifyPayloadPost
 * @version 2022.03.29
 */
var IdentifyPayloadPost = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IdentifyPayloadPost</code>.
   * @alias module:model/IdentifyPayloadPost
   * @class
   * @param data {String} 
   */
  function IdentifyPayloadPost(data) {
    _classCallCheck(this, IdentifyPayloadPost);

    this.data = data;
  }
  /**
   * Constructs a <code>IdentifyPayloadPost</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/IdentifyPayloadPost} obj Optional instance to populate.
   * @return {module:model/IdentifyPayloadPost} The populated <code>IdentifyPayloadPost</code> instance.
   */


  _createClass(IdentifyPayloadPost, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IdentifyPayloadPost();
        if (data.hasOwnProperty('data')) obj.data = _ApiClient.ApiClient.convertToType(data['data'], 'String');
      }

      return obj;
    }
  }]);

  return IdentifyPayloadPost;
}();
/**
 * @member {String} data
 * @default '{"token": "PUBLIC_KEY","properties": {"$email":"ben.franklin@klaviyo.com"}}'
 */


exports.IdentifyPayloadPost = IdentifyPayloadPost;
IdentifyPayloadPost.prototype.data = '{"token": "PUBLIC_KEY","properties": {"$email":"ben.franklin@klaviyo.com"}}';