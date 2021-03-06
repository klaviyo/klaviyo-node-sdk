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
 * The Metric model module.
 * @module model/Metric
 * @version 2021.11.26
 */
export class Metric {
  /**
   * Constructs a new <code>Metric</code>.
   * @alias module:model/Metric
   * @class
   * @extends 
   */
  constructor() {
  }

  /**
   * Constructs a <code>Metric</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Metric} obj Optional instance to populate.
   * @return {module:model/Metric} The populated <code>Metric</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Metric();
      ApiClient.constructFromObject(data, obj, '');
    }
    return obj;
  }
}
