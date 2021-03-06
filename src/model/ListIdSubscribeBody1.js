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
 * The ListIdSubscribeBody1 model module.
 * @module model/ListIdSubscribeBody1
 * @version 2021.11.26
 */
export class ListIdSubscribeBody1 {
  /**
   * Constructs a new <code>ListIdSubscribeBody1</code>.
   * Profiles is an object containing &#x60;emails&#x60;, &#x60;phone_numbers&#x60;, and &#x60;push_tokens&#x60;. Each is an array of strings. Profiles with corresponding values will be removed from this list.
   * @alias module:model/ListIdSubscribeBody1
   * @class
   * @extends 
   */
  constructor() {
  }

  /**
   * Constructs a <code>ListIdSubscribeBody1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListIdSubscribeBody1} obj Optional instance to populate.
   * @return {module:model/ListIdSubscribeBody1} The populated <code>ListIdSubscribeBody1</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new ListIdSubscribeBody1();
      ApiClient.constructFromObject(data, obj, '');
    }
    return obj;
  }
}
