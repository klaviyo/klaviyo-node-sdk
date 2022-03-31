"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Campaign = void 0;

var _ApiClient = require("../ApiClient.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The Campaign model module.
 * @module model/Campaign
 * @version 2022.03.29
 */
var Campaign = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Campaign</code>.
   * @alias module:model/Campaign
   * @class
   * @extends 
   */
  function Campaign() {
    _classCallCheck(this, Campaign);
  }
  /**
   * Constructs a <code>Campaign</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Campaign} obj Optional instance to populate.
   * @return {module:model/Campaign} The populated <code>Campaign</code> instance.
   */


  _createClass(Campaign, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Campaign();

        _ApiClient.ApiClient.constructFromObject(data, obj, '');
      }

      return obj;
    }
  }]);

  return Campaign;
}();

exports.Campaign = Campaign;