"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CampaignIdCloneBody = void 0;

var _ApiClient = require("../ApiClient.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The CampaignIdCloneBody model module.
 * @module model/CampaignIdCloneBody
 * @version 2022.03.29
 */
var CampaignIdCloneBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CampaignIdCloneBody</code>.
   * @alias module:model/CampaignIdCloneBody
   * @class
   * @param name {String} The name for the new campaign. All other properties of the campaign will remain the same. Note, the template for the new campaign will be cloned from the existing template so changes to the existing campaign's content will not alter the content of the new campaign.
   * @param listId {String} The list you will send the campaign to.
   */
  function CampaignIdCloneBody(name, listId) {
    _classCallCheck(this, CampaignIdCloneBody);

    this.name = name;
    this.listId = listId;
  }
  /**
   * Constructs a <code>CampaignIdCloneBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CampaignIdCloneBody} obj Optional instance to populate.
   * @return {module:model/CampaignIdCloneBody} The populated <code>CampaignIdCloneBody</code> instance.
   */


  _createClass(CampaignIdCloneBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CampaignIdCloneBody();
        if (data.hasOwnProperty('name')) obj.name = _ApiClient.ApiClient.convertToType(data['name'], 'String');
        if (data.hasOwnProperty('list_id')) obj.listId = _ApiClient.ApiClient.convertToType(data['list_id'], 'String');
      }

      return obj;
    }
  }]);

  return CampaignIdCloneBody;
}();
/**
 * The name for the new campaign. All other properties of the campaign will remain the same. Note, the template for the new campaign will be cloned from the existing template so changes to the existing campaign's content will not alter the content of the new campaign.
 * @member {String} name
 * @default 'Cloned Campaign'
 */


exports.CampaignIdCloneBody = CampaignIdCloneBody;
CampaignIdCloneBody.prototype.name = 'Cloned Campaign';
/**
 * The list you will send the campaign to.
 * @member {String} listId
 * @default 'LIST_ID'
 */

CampaignIdCloneBody.prototype.listId = 'LIST_ID';