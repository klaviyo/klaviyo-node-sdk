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
 * The MetricTimeline model module.
 * @module model/MetricTimeline
 * @version 2021.11.26
 */
export class MetricTimeline {
  /**
   * Constructs a new <code>MetricTimeline</code>.
   * @alias module:model/MetricTimeline
   * @class
   * @extends 
   */
  constructor() {
  }

  /**
   * Constructs a <code>MetricTimeline</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MetricTimeline} obj Optional instance to populate.
   * @return {module:model/MetricTimeline} The populated <code>MetricTimeline</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MetricTimeline();
      ApiClient.constructFromObject(data, obj, '');
    }
    return obj;
  }
}
