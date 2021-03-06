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
import {ApiClient} from "../ApiClient.js";
import {InlineResponse2001} from '../model/InlineResponse2001.js';
import {MetricTimeline} from '../model/MetricTimeline.js';
import {PeopleExchangeBody} from '../model/PeopleExchangeBody.js';
import {Person} from '../model/Person.js';

/**
* Profiles service.
* @module api/ProfilesApi
* @version 2021.11.26
*/
export class ProfilesApi {

    /**
    * Constructs a new ProfilesApi. 
    * @alias module:api/ProfilesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Exchange ID for Profile ID
     * Swap Exchange ID / KX Token for Profile ID
     * @param {Object} opts Optional parameters
     * @param {module:model/PeopleExchangeBody} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2001}
     */
    exchange(opts) {

    opts = opts || {};
      let postBody = opts['body'];

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = InlineResponse2001;

      return ApiClient.instance.callApi(
        '/v2/people/exchange', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      ).then(function(response_and_data) {
          return response_and_data.data;
      });
    }

    /**
     * Get Profile
     * Retrieves all the data attributes for a person, based on the Klaviyo Person ID.
     * @param {<&vendorExtensions.x-jsdoc-type>} personId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Person}
     */
    getProfile(personId) {

    
      let postBody = null;
      // verify the required parameter 'personId' is set
      if (personId === undefined || personId === null) {
        throw new Error("Missing the required parameter 'personId' when calling getProfile");
      }

      let pathParams = {
        'person_id': personId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Person;

      return ApiClient.instance.callApi(
        '/v1/person/{person_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      ).then(function(response_and_data) {
          return response_and_data.data;
      });
    }

    /**
     * Get Profile&#x27;s Events for a Specific Metric
     * Returns a person&#x27;s batched timeline for one specific event type.
     * @param {<&vendorExtensions.x-jsdoc-type>} personId 
     * @param {<&vendorExtensions.x-jsdoc-type>} metricId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.since Either a 10-digit Unix timestamp (UTC) to use as starting datetime, OR a pagination token obtained from the next attribute of a prior API call. For backwards compatibility, UUIDs will continue to be supported for a limited time. Defaults to current time.
     * @param {Number} opts.count Number of events to return in a batch. (default to <.>)
     * @param {String} opts.sort Sort order to apply to timeline, either descending or ascending. Valid values are &#x60;desc&#x60; or &#x60;asc&#x60;. Defaults to &#x60;desc&#x60;. (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MetricTimeline}
     */
    profileMetricTimeline(personId, metricId, opts) {

    opts = opts || {};
      let postBody = null;
      // verify the required parameter 'personId' is set
      if (personId === undefined || personId === null) {
        throw new Error("Missing the required parameter 'personId' when calling profileMetricTimeline");
      }
      // verify the required parameter 'metricId' is set
      if (metricId === undefined || metricId === null) {
        throw new Error("Missing the required parameter 'metricId' when calling profileMetricTimeline");
      }

      let pathParams = {
        'person_id': personId,'metric_id': metricId
      };
      let queryParams = {
        'since': opts['since'],'count': opts['count'],'sort': opts['sort']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = MetricTimeline;

      return ApiClient.instance.callApi(
        '/v1/person/{person_id}/metric/{metric_id}/timeline', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      ).then(function(response_and_data) {
          return response_and_data.data;
      });
    }

    /**
     * Get Profile&#x27;s Events for all Metrics
     * Returns a batched timeline of all events for a person.
     * @param {<&vendorExtensions.x-jsdoc-type>} personId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.since Either a 10-digit Unix timestamp (UTC) to use as starting datetime, OR a pagination token obtained from the next attribute of a prior API call. For backwards compatibility, UUIDs will continue to be supported for a limited time. Defaults to current time.
     * @param {Number} opts.count Number of events to return in a batch. Default &#x3D; 50, Max &#x3D; 100 (default to <.>)
     * @param {String} opts.sort Sort order to apply to timeline, either descending or ascending. Valid values are &#x60;desc&#x60; or &#x60;asc&#x60;. Defaults to &#x60;desc&#x60;. Always descending when &#x60;since&#x60; is not sent, as &#x60;since&#x60; defaults to current time. (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MetricTimeline}
     */
    profileMetricsTimeline(personId, opts) {

    opts = opts || {};
      let postBody = null;
      // verify the required parameter 'personId' is set
      if (personId === undefined || personId === null) {
        throw new Error("Missing the required parameter 'personId' when calling profileMetricsTimeline");
      }

      let pathParams = {
        'person_id': personId
      };
      let queryParams = {
        'since': opts['since'],'count': opts['count'],'sort': opts['sort']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = MetricTimeline;

      return ApiClient.instance.callApi(
        '/v1/person/{person_id}/metrics/timeline', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      ).then(function(response_and_data) {
          return response_and_data.data;
      });
    }

    /**
     * Update Profile
     * NOTE: If you are interested in creating or updating profiles in Klaviyo, you should be using the Identify API instead. The best use-case for this route is changing a profiles&#x27;s email address or other primary identifier after a profile already exists in Klaviyo.  Add or update one more more attributes for a Person, based on the Klaviyo Person ID. If a property already exists, it will be updated. If a property is not set for that record, it will be created.  You can update any attribute, by sending one or more attributes along their new values, as query parameters. Recommended attributes for this endpoint: &#x60;$email&#x60;, &#x60;$phone_number&#x60;, &#x60;$id&#x60; 
     * @param {<&vendorExtensions.x-jsdoc-type>} personId 
     * @param {Object} opts Optional parameters
     * @param {Object.<String, {String: Object}>} opts.params  (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Person}
     */
    updateProfile(personId, opts) {

    opts = opts || {};
      let postBody = null;
      // verify the required parameter 'personId' is set
      if (personId === undefined || personId === null) {
        throw new Error("Missing the required parameter 'personId' when calling updateProfile");
      }

      let pathParams = {
        'person_id': personId
      };
      let queryParams = {
        'params': this.apiClient.buildCollectionParam(opts['params'], 'multi')
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Person;

      return ApiClient.instance.callApi(
        '/v1/person/{person_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      ).then(function(response_and_data) {
          return response_and_data.data;
      });
    }

}