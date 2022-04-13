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
 * The Ascending model module.
 * @module model/Ascending
 * @version 2021.11.26
 */
export class Ascending {
  /**
   * Constructs a new <code>Ascending</code>.
   * @alias module:model/Ascending
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>Ascending</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Ascending} obj Optional instance to populate.
   * @return {module:model/Ascending} The populated <code>Ascending</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Ascending();
    }
    return obj;
  }
}
