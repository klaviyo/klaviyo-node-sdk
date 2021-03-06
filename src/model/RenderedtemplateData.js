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
 * The RenderedtemplateData model module.
 * @module model/RenderedtemplateData
 * @version 2021.11.26
 */
export class RenderedtemplateData {
  /**
   * Constructs a new <code>RenderedtemplateData</code>.
   * @alias module:model/RenderedtemplateData
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>RenderedtemplateData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RenderedtemplateData} obj Optional instance to populate.
   * @return {module:model/RenderedtemplateData} The populated <code>RenderedtemplateData</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new RenderedtemplateData();
      if (data.hasOwnProperty('html'))
        obj.html = ApiClient.convertToType(data['html'], 'String');
      if (data.hasOwnProperty('text'))
        obj.text = ApiClient.convertToType(data['text'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} html
 */
RenderedtemplateData.prototype.html = undefined;

/**
 * @member {String} text
 */
RenderedtemplateData.prototype.text = undefined;

