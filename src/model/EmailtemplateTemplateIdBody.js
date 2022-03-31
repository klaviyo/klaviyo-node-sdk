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
 * The EmailtemplateTemplateIdBody model module.
 * @module model/EmailtemplateTemplateIdBody
 * @version 2022.03.29
 */
export class EmailtemplateTemplateIdBody {
  /**
   * Constructs a new <code>EmailtemplateTemplateIdBody</code>.
   * @alias module:model/EmailtemplateTemplateIdBody
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>EmailtemplateTemplateIdBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EmailtemplateTemplateIdBody} obj Optional instance to populate.
   * @return {module:model/EmailtemplateTemplateIdBody} The populated <code>EmailtemplateTemplateIdBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new EmailtemplateTemplateIdBody();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
      if (data.hasOwnProperty('html'))
        obj.html = ApiClient.convertToType(data['html'], 'String');
    }
    return obj;
  }
}

/**
 * The new name of the email template.
 * @member {String} name
 */
EmailtemplateTemplateIdBody.prototype.name = undefined;

/**
 * The new HTML content for this template.
 * @member {String} html
 */
EmailtemplateTemplateIdBody.prototype.html = undefined;
