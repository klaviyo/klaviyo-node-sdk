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
 * The InlineResponse2007Records model module.
 * @module model/InlineResponse2007Records
 * @version 2022.03.29
 */
export class InlineResponse2007Records {
  /**
   * Constructs a new <code>InlineResponse2007Records</code>.
   * @alias module:model/InlineResponse2007Records
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>InlineResponse2007Records</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2007Records} obj Optional instance to populate.
   * @return {module:model/InlineResponse2007Records} The populated <code>InlineResponse2007Records</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new InlineResponse2007Records();
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('email'))
        obj.email = ApiClient.convertToType(data['email'], 'String');
      if (data.hasOwnProperty('reason'))
        obj.reason = ApiClient.convertToType(data['reason'], 'String');
      if (data.hasOwnProperty('phone_number'))
        obj.phoneNumber = ApiClient.convertToType(data['phone_number'], 'String');
      if (data.hasOwnProperty('phone_reason'))
        obj.phoneReason = ApiClient.convertToType(data['phone_reason'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} id
 */
InlineResponse2007Records.prototype.id = undefined;

/**
 * @member {String} email
 */
InlineResponse2007Records.prototype.email = undefined;

/**
 * @member {String} reason
 */
InlineResponse2007Records.prototype.reason = undefined;

/**
 * @member {String} phoneNumber
 */
InlineResponse2007Records.prototype.phoneNumber = undefined;

/**
 * @member {String} phoneReason
 */
InlineResponse2007Records.prototype.phoneReason = undefined;
