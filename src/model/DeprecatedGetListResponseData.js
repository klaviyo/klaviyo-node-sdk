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
 * The DeprecatedGetListResponseData model module.
 * @module model/DeprecatedGetListResponseData
 * @version 2022.03.29
 */
export class DeprecatedGetListResponseData {
  /**
   * Constructs a new <code>DeprecatedGetListResponseData</code>.
   * @alias module:model/DeprecatedGetListResponseData
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>DeprecatedGetListResponseData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeprecatedGetListResponseData} obj Optional instance to populate.
   * @return {module:model/DeprecatedGetListResponseData} The populated <code>DeprecatedGetListResponseData</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new DeprecatedGetListResponseData();
      if (data.hasOwnProperty('object'))
        obj._object = ApiClient.convertToType(data['object'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
      if (data.hasOwnProperty('created'))
        obj.created = ApiClient.convertToType(data['created'], 'String');
      if (data.hasOwnProperty('updated'))
        obj.updated = ApiClient.convertToType(data['updated'], 'String');
      if (data.hasOwnProperty('person_count'))
        obj.personCount = ApiClient.convertToType(data['person_count'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {String} _object
 */
DeprecatedGetListResponseData.prototype._object = undefined;

/**
 * @member {String} id
 */
DeprecatedGetListResponseData.prototype.id = undefined;

/**
 * @member {String} type
 */
DeprecatedGetListResponseData.prototype.type = undefined;

/**
 * @member {String} created
 */
DeprecatedGetListResponseData.prototype.created = undefined;

/**
 * @member {String} updated
 */
DeprecatedGetListResponseData.prototype.updated = undefined;

/**
 * @member {Number} personCount
 */
DeprecatedGetListResponseData.prototype.personCount = undefined;
