/*
 * Klaviyo API
 * Empowering creators to own their destiny
 *
 * OpenAPI spec version: 2022.03.29
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.32
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient.js';

/**
 * The CampaignCampaignIdBody model module.
 * @module model/CampaignCampaignIdBody
 * @version 2022.03.29
 */
export class CampaignCampaignIdBody {
  /**
   * Constructs a new <code>CampaignCampaignIdBody</code>.
   * @alias module:model/CampaignCampaignIdBody
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>CampaignCampaignIdBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CampaignCampaignIdBody} obj Optional instance to populate.
   * @return {module:model/CampaignCampaignIdBody} The populated <code>CampaignCampaignIdBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CampaignCampaignIdBody();
      if (data.hasOwnProperty('list_id'))
        obj.listId = ApiClient.convertToType(data['list_id'], 'String');
      if (data.hasOwnProperty('template_id'))
        obj.templateId = ApiClient.convertToType(data['template_id'], 'String');
      if (data.hasOwnProperty('from_email'))
        obj.fromEmail = ApiClient.convertToType(data['from_email'], 'String');
      if (data.hasOwnProperty('from_name'))
        obj.fromName = ApiClient.convertToType(data['from_name'], 'String');
      if (data.hasOwnProperty('subject'))
        obj.subject = ApiClient.convertToType(data['subject'], 'String');
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('use_smart_sending'))
        obj.useSmartSending = ApiClient.convertToType(data['use_smart_sending'], 'Boolean');
      if (data.hasOwnProperty('add_google_analytics'))
        obj.addGoogleAnalytics = ApiClient.convertToType(data['add_google_analytics'], 'Boolean');
    }
    return obj;
  }
}

/**
 * The list you will send the campaign to.
 * @member {String} listId
 */
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
