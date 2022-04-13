"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CampaignCampaignIdBody = void 0;

var _ApiClient = require("../ApiClient.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The CampaignCampaignIdBody model module.
 * @module model/CampaignCampaignIdBody
 * @version 2021.11.26
 */
var CampaignCampaignIdBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CampaignCampaignIdBody</code>.
   * @alias module:model/CampaignCampaignIdBody
   * @class
   */
  function CampaignCampaignIdBody() {
    _classCallCheck(this, CampaignCampaignIdBody);
  }
  /**
   * Constructs a <code>CampaignCampaignIdBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CampaignCampaignIdBody} obj Optional instance to populate.
   * @return {module:model/CampaignCampaignIdBody} The populated <code>CampaignCampaignIdBody</code> instance.
   */


  _createClass(CampaignCampaignIdBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CampaignCampaignIdBody();
        if (data.hasOwnProperty('list_id')) obj.listId = _ApiClient.ApiClient.convertToType(data['list_id'], 'String');
        if (data.hasOwnProperty('template_id')) obj.templateId = _ApiClient.ApiClient.convertToType(data['template_id'], 'String');
        if (data.hasOwnProperty('from_email')) obj.fromEmail = _ApiClient.ApiClient.convertToType(data['from_email'], 'String');
        if (data.hasOwnProperty('from_name')) obj.fromName = _ApiClient.ApiClient.convertToType(data['from_name'], 'String');
        if (data.hasOwnProperty('subject')) obj.subject = _ApiClient.ApiClient.convertToType(data['subject'], 'String');
        if (data.hasOwnProperty('name')) obj.name = _ApiClient.ApiClient.convertToType(data['name'], 'String');
        if (data.hasOwnProperty('use_smart_sending')) obj.useSmartSending = _ApiClient.ApiClient.convertToType(data['use_smart_sending'], 'Boolean');
        if (data.hasOwnProperty('add_google_analytics')) obj.addGoogleAnalytics = _ApiClient.ApiClient.convertToType(data['add_google_analytics'], 'Boolean');
      }

      return obj;
    }
  }]);

  return CampaignCampaignIdBody;
}();
/**
 * The list you will send the campaign to.
 * @member {String} listId
 */


exports.CampaignCampaignIdBody = CampaignCampaignIdBody;
CampaignCampaignIdBody.prototype.listId = undefined;
/**
 * The ID of the Email Template object that will be the content of this campaign. Note the Email Template is copied when creating this campaign, so future changes to that Email Template will not alter the content of this campaign.
 * @member {String} templateId
 */

CampaignCampaignIdBody.prototype.templateId = undefined;
/**
 * The email address your email will be sent from and will be used in the reply-to header.
 * @member {String} fromEmail
 */

CampaignCampaignIdBody.prototype.fromEmail = undefined;
/**
 * The name or label associated with the email address you're sending from.
 * @member {String} fromName
 */

CampaignCampaignIdBody.prototype.fromName = undefined;
/**
 * The email subject of the campaign
 * @member {String} subject
 */

CampaignCampaignIdBody.prototype.subject = undefined;
/**
 * A name for this campaign. If not specified, this will default to the subject of the campaign.
 * @member {String} name
 */

CampaignCampaignIdBody.prototype.name = undefined;
/**
 * If set, limits the number of emails sent to an individual within a short period. Campaigns initially default to `true`.
 * @member {Boolean} useSmartSending
 */

CampaignCampaignIdBody.prototype.useSmartSending = undefined;
/**
 * If specified, adds Google Analytics tracking tags to links. Campaigns initially default to `false`.
 * @member {Boolean} addGoogleAnalytics
 */

CampaignCampaignIdBody.prototype.addGoogleAnalytics = undefined;