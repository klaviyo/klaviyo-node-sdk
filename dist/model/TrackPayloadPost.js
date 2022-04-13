"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TrackPayloadPost = void 0;

var _ApiClient = require("../ApiClient.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The TrackPayloadPost model module.
 * @module model/TrackPayloadPost
 * @version 2021.11.26
 */
var TrackPayloadPost = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TrackPayloadPost</code>.
   * @alias module:model/TrackPayloadPost
   * @class
   * @param data {String} 
   */
  function TrackPayloadPost(data) {
    _classCallCheck(this, TrackPayloadPost);

    this.data = data;
  }
  /**
   * Constructs a <code>TrackPayloadPost</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TrackPayloadPost} obj Optional instance to populate.
   * @return {module:model/TrackPayloadPost} The populated <code>TrackPayloadPost</code> instance.
   */


  _createClass(TrackPayloadPost, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TrackPayloadPost();
        if (data.hasOwnProperty('data')) obj.data = _ApiClient.ApiClient.convertToType(data['data'], 'String');
      }

      return obj;
    }
  }]);

  return TrackPayloadPost;
}();
/**
 * @member {String} data
 * @default '{"token": "PUBLIC_KEY", "event": "Ordered Product", "customer_properties": {"$email": "abraham.lincoln@klaviyo.com"}, "properties": {"item_name": "Boots","$value": 100}}'
 */


exports.TrackPayloadPost = TrackPayloadPost;
TrackPayloadPost.prototype.data = '{"token": "PUBLIC_KEY", "event": "Ordered Product", "customer_properties": {"$email": "abraham.lincoln@klaviyo.com"}, "properties": {"item_name": "Boots","$value": 100}}';