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
 * The PeopleExchangeBody model module.
 * @module model/PeopleExchangeBody
 * @version 2021.11.26
 */
export class PeopleExchangeBody {
  /**
   * Constructs a new <code>PeopleExchangeBody</code>.
   * @alias module:model/PeopleExchangeBody
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>PeopleExchangeBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PeopleExchangeBody} obj Optional instance to populate.
   * @return {module:model/PeopleExchangeBody} The populated <code>PeopleExchangeBody</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new PeopleExchangeBody();
      if (data.hasOwnProperty('exchange_id'))
        obj.exchangeId = ApiClient.convertToType(data['exchange_id'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} exchangeId
 * @default 'EXCHANGE_ID'
 */
PeopleExchangeBody.prototype.exchangeId = 'EXCHANGE_ID';

