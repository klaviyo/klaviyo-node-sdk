"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.V1CampaignsBody = void 0;

var _ApiClient = require("../ApiClient.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The V1CampaignsBody model module.
 * @module model/V1CampaignsBody
 * @version 2021.11.26
 */
var V1CampaignsBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>V1CampaignsBody</code>.
   * @alias module:model/V1CampaignsBody
   * @class
   * @param listId {String} The list you will send the campaign to.
   * @param templateId {String}  The template that will define the content of the page. Note: the Email Template is copied when creating this campaign, so future changes to that Email Template will not alter the content of this campaign. 
   * @param fromEmail {String} The email address your email will be sent from and will be used in the `reply-to` header.
   * @param fromName {String} The name or label associated with the email address you're sending from.
   * @param subject {String} The email subject of the campaign
   */
  function V1CampaignsBody(listId, templateId, fromEmail, fromName, subject) {
    _classCallCheck(this, V1CampaignsBody);

    this.listId = listId;
    this.templateId = templateId;
    this.fromEmail = fromEmail;
    this.fromName = fromName;
    this.subject = subject;
  }
  /**
   * Constructs a <code>V1CampaignsBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V1CampaignsBody} obj Optional instance to populate.
   * @return {module:model/V1CampaignsBody} The populated <code>V1CampaignsBody</code> instance.
   */


  _createClass(V1CampaignsBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new V1CampaignsBody();
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

  return V1CampaignsBody;
}();
/**
 * The list you will send the campaign to.
 * @member {String} listId
 * @default 'LIST_ID'
 */


exports.V1CampaignsBody = V1CampaignsBody;
V1CampaignsBody.prototype.listId = 'LIST_ID';
/**
 *  The template that will define the content of the page. Note: the Email Template is copied when creating this campaign, so future changes to that Email Template will not alter the content of this campaign. 
 * @member {String} templateId
 * @default 'TEMPLATE_ID'
 */

V1CampaignsBody.prototype.templateId = 'TEMPLATE_ID';
/**
 * The email address your email will be sent from and will be used in the `reply-to` header.
 * @member {String} fromEmail
 * @default 'george.washington@klaviyo.com'
 */

V1CampaignsBody.prototype.fromEmail = 'george.washington@klaviyo.com';
/**
 * The name or label associated with the email address you're sending from.
 * @member {String} fromName
 */

V1CampaignsBody.prototype.fromName = undefined;
/**
 * The email subject of the campaign
 * @member {String} subject
 * @default 'Happy Fourth!'
 */

V1CampaignsBody.prototype.subject = 'Happy Fourth!';
/**
 * If not specified, this will default to the subject of the campaign.
 * @member {String} name
 * @default 'Campaign Name'
 */

V1CampaignsBody.prototype.name = 'Campaign Name';
/**
 * If set, limits the number of emails sent to an individual within a short period. Valid values are `true` and `false`. If not specified, defaults to `true`.
 * @member {Boolean} useSmartSending
 * @default true
 */

V1CampaignsBody.prototype.useSmartSending = true;
/**
 * If specified, adds Google Analytics tracking tags to links. Valid values are `true` and `false`. If not specified, defaults to `false`.
 * @member {Boolean} addGoogleAnalytics
 * @default false
 */

V1CampaignsBody.prototype.addGoogleAnalytics = false;