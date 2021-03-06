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
 * The TemplateIdCloneBody model module.
 * @module model/TemplateIdCloneBody
 * @version 2021.11.26
 */
export class TemplateIdCloneBody {
  /**
   * Constructs a new <code>TemplateIdCloneBody</code>.
   * @alias module:model/TemplateIdCloneBody
   * @class
   * @param name {String} The new name of the email template.
   */
  constructor(name) {
    this.name = name;
  }

  /**
   * Constructs a <code>TemplateIdCloneBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TemplateIdCloneBody} obj Optional instance to populate.
   * @return {module:model/TemplateIdCloneBody} The populated <code>TemplateIdCloneBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new TemplateIdCloneBody();
      if (data.hasOwnProperty('name'))
        obj.name = ApiClient.convertToType(data['name'], 'String');
    }
    return obj;
  }
}

/**
 * The new name of the email template.
 * @member {String} name
 * @default 'My Cloned Template'
 */
TemplateIdCloneBody.prototype.name = 'My Cloned Template';

