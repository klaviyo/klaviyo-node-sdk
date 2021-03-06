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
import {MetricTimelineEventProperties} from './MetricTimelineEventProperties.js';
import {MetricTimelinePerson} from './MetricTimelinePerson.js';

/**
 * The MetricTimelineData model module.
 * @module model/MetricTimelineData
 * @version 2021.11.26
 */
export class MetricTimelineData {
  /**
   * Constructs a new <code>MetricTimelineData</code>.
   * @alias module:model/MetricTimelineData
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>MetricTimelineData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MetricTimelineData} obj Optional instance to populate.
   * @return {module:model/MetricTimelineData} The populated <code>MetricTimelineData</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new MetricTimelineData();
      if (data.hasOwnProperty('object'))
        obj._object = ApiClient.convertToType(data['object'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
      if (data.hasOwnProperty('statistic_id'))
        obj.statisticId = ApiClient.convertToType(data['statistic_id'], 'String');
      if (data.hasOwnProperty('timestamp'))
        obj.timestamp = ApiClient.convertToType(data['timestamp'], 'Number');
      if (data.hasOwnProperty('event_name'))
        obj.eventName = ApiClient.convertToType(data['event_name'], 'String');
      if (data.hasOwnProperty('event_properties'))
        obj.eventProperties = MetricTimelineEventProperties.constructFromObject(data['event_properties']);
      if (data.hasOwnProperty('datetime'))
        obj.datetime = ApiClient.convertToType(data['datetime'], 'String');
      if (data.hasOwnProperty('uuid'))
        obj.uuid = ApiClient.convertToType(data['uuid'], 'String');
      if (data.hasOwnProperty('person'))
        obj.person = MetricTimelinePerson.constructFromObject(data['person']);
    }
    return obj;
  }
}

/**
 * @member {String} _object
 */
MetricTimelineData.prototype._object = undefined;

/**
 * @member {String} id
 */
MetricTimelineData.prototype.id = undefined;

/**
 * @member {String} statisticId
 */
MetricTimelineData.prototype.statisticId = undefined;

/**
 * @member {Number} timestamp
 */
MetricTimelineData.prototype.timestamp = undefined;

/**
 * @member {String} eventName
 */
MetricTimelineData.prototype.eventName = undefined;

/**
 * @member {module:model/MetricTimelineEventProperties} eventProperties
 */
MetricTimelineData.prototype.eventProperties = undefined;

/**
 * @member {String} datetime
 */
MetricTimelineData.prototype.datetime = undefined;

/**
 * @member {String} uuid
 */
MetricTimelineData.prototype.uuid = undefined;

/**
 * @member {module:model/MetricTimelinePerson} person
 */
MetricTimelineData.prototype.person = undefined;

