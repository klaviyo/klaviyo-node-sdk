/*
 * Klaviyo API
 * Empowering creators to own their destiny
 *
 * OpenAPI spec version: 2021.11.26
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
 * The TemplateIdSendBody model module.
 * @module model/TemplateIdSendBody
 * @version 2021.11.26
 */
export class TemplateIdSendBody {
  /**
   * Constructs a new <code>TemplateIdSendBody</code>.
   * @alias module:model/TemplateIdSendBody
   * @class
   * @param fromEmail {String} 
   * @param fromName {String} 
   * @param subject {String} 
   * @param to {String} **Mixed**. string, or JSON encoded array of objects with \"email\" and \"name\" keys. `abraham.lincoln@klaviyo.com` OR `[{\"name\":\"Abraham Lincoln\",\"email\":\"abraham.lincoln@klaviyo.com\"}]` 
   */
  constructor(fromEmail, fromName, subject, to) {
    this.fromEmail = fromEmail;
    this.fromName = fromName;
    this.subject = subject;
    this.to = to;
  }

  /**
   * Constructs a <code>TemplateIdSendBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TemplateIdSendBody} obj Optional instance to populate.
   * @return {module:model/TemplateIdSendBody} The populated <code>TemplateIdSendBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TemplateIdSendBody();
      if (data.hasOwnProperty('from_email'))
        obj.fromEmail = ApiClient.convertToType(data['from_email'], 'String');
      if (data.hasOwnProperty('from_name'))
        obj.fromName = ApiClient.convertToType(data['from_name'], 'String');
      if (data.hasOwnProperty('subject'))
        obj.subject = ApiClient.convertToType(data['subject'], 'String');
      if (data.hasOwnProperty('to'))
        obj.to = ApiClient.convertToType(data['to'], 'String');
      if (data.hasOwnProperty('context'))
        obj.context = ApiClient.convertToType(data['context'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} fromEmail
 * @default 'george.washington@klaviyo.com'
 */
TemplateIdSendBody.prototype.fromEmail = 'george.washington@klaviyo.com';

/**
 * @member {String} fromName
 * @default 'George Washington'
 */
TemplateIdSendBody.prototype.fromName = 'George Washington';

/**
 * @member {String} subject
 * @default 'Happy Fourth!'
 */
TemplateIdSendBody.prototype.subject = 'Happy Fourth!';

/**
 * **Mixed**. string, or JSON encoded array of objects with \"email\" and \"name\" keys. `abraham.lincoln@klaviyo.com` OR `[{\"name\":\"Abraham Lincoln\",\"email\":\"abraham.lincoln@klaviyo.com\"}]` 
 * @member {String} to
 * @default '[{"name":"Abraham Lincoln","email":"abraham.lincoln@klaviyo.com"}]'
 */
TemplateIdSendBody.prototype.to = '[{"name":"Abraham Lincoln","email":"abraham.lincoln@klaviyo.com"}]';

/**
 * Optional, JSON object. This is the context your email template will be rendered with. Email templates are rendered with contexts in a similar manner to how Django templates are rendered. This means that nested template variables can be referenced via dot notation and template variables without corresponding context values are treated as falsy and output nothing. ex: `{ \"name\" : \"George Washington\", \"state\" : \"VA\" }` 
 * @member {String} context
 * @default '{ "name" : "George Washington", "state" : "VA" }'
 */
TemplateIdSendBody.prototype.context = '{ "name" : "George Washington", "state" : "VA" }';

