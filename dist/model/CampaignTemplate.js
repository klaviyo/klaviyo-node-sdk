"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CampaignTemplate = void 0;

var _ApiClient = require("../ApiClient.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The CampaignTemplate model module.
 * @module model/CampaignTemplate
 * @version 2021.11.26
 */
var CampaignTemplate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CampaignTemplate</code>.
   * @alias module:model/CampaignTemplate
   * @class
   */
  function CampaignTemplate() {
    _classCallCheck(this, CampaignTemplate);
  }
  /**
   * Constructs a <code>CampaignTemplate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CampaignTemplate} obj Optional instance to populate.
   * @return {module:model/CampaignTemplate} The populated <code>CampaignTemplate</code> instance.
   */


  _createClass(CampaignTemplate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CampaignTemplate();
        if (data.hasOwnProperty('object')) obj._object = _ApiClient.ApiClient.convertToType(data['object'], 'String');
        if (data.hasOwnProperty('id')) obj.id = _ApiClient.ApiClient.convertToType(data['id'], 'String');
        if (data.hasOwnProperty('html')) obj.html = _ApiClient.ApiClient.convertToType(data['html'], 'String');
      }

      return obj;
    }
  }]);

  return CampaignTemplate;
}();
/**
 * @member {String} _object
 */


exports.CampaignTemplate = CampaignTemplate;
CampaignTemplate.prototype._object = undefined;
/**
 * @member {String} id
 */

CampaignTemplate.prototype.id = undefined;
/**
 * @member {String} html
 */

CampaignTemplate.prototype.html = undefined;