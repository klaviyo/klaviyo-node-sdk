"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfilesApi = void 0;

var _ApiClient = require("../ApiClient.js");

var _InlineResponse = require("../model/InlineResponse2001.js");

var _MetricTimeline = require("../model/MetricTimeline.js");

var _PeopleExchangeBody = require("../model/PeopleExchangeBody.js");

var _Person = require("../model/Person.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Profiles service.
* @module api/ProfilesApi
* @version 2021.11.26
*/
var ProfilesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ProfilesApi. 
  * @alias module:api/ProfilesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instanc
  e} if unspecified.
  */
  function ProfilesApi(apiClient) {
    _classCallCheck(this, ProfilesApi);

    this.apiClient = apiClient || _ApiClient.ApiClient.instance;
  }
  /**
   * Exchange ID for Profile ID
   * Swap Exchange ID / KX Token for Profile ID
   * @param {Object} opts Optional parameters
   * @param {module:model/PeopleExchangeBody} opts.body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2001}
   */


  _createClass(ProfilesApi, [{
    key: "exchange",
    value: function exchange(opts) {
      opts = opts || {};
      var postBody = opts['body'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse.InlineResponse2001;
      return _ApiClient.ApiClient.instance.callApi('/v2/people/exchange', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get Profile
     * Retrieves all the data attributes for a person, based on the Klaviyo Person ID.
     * @param {<&vendorExtensions.x-jsdoc-type>} personId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Person}
     */

  }, {
    key: "getProfile",
    value: function getProfile(personId) {
      var postBody = null; // verify the required parameter 'personId' is set

      if (personId === undefined || personId === null) {
        throw new Error("Missing the required parameter 'personId' when calling getProfile");
      }

      var pathParams = {
        'person_id': personId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Person.Person;
      return _ApiClient.ApiClient.instance.callApi('/v1/person/{person_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
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

  }, {
    key: "profileMetricTimeline",
    value: function profileMetricTimeline(personId, metricId, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'personId' is set

      if (personId === undefined || personId === null) {
        throw new Error("Missing the required parameter 'personId' when calling profileMetricTimeline");
      } // verify the required parameter 'metricId' is set


      if (metricId === undefined || metricId === null) {
        throw new Error("Missing the required parameter 'metricId' when calling profileMetricTimeline");
      }

      var pathParams = {
        'person_id': personId,
        'metric_id': metricId
      };
      var queryParams = {
        'since': opts['since'],
        'count': opts['count'],
        'sort': opts['sort']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _MetricTimeline.MetricTimeline;
      return _ApiClient.ApiClient.instance.callApi('/v1/person/{person_id}/metric/{metric_id}/timeline', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
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

  }, {
    key: "profileMetricsTimeline",
    value: function profileMetricsTimeline(personId, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'personId' is set

      if (personId === undefined || personId === null) {
        throw new Error("Missing the required parameter 'personId' when calling profileMetricsTimeline");
      }

      var pathParams = {
        'person_id': personId
      };
      var queryParams = {
        'since': opts['since'],
        'count': opts['count'],
        'sort': opts['sort']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _MetricTimeline.MetricTimeline;
      return _ApiClient.ApiClient.instance.callApi('/v1/person/{person_id}/metrics/timeline', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
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

  }, {
    key: "updateProfile",
    value: function updateProfile(personId, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'personId' is set

      if (personId === undefined || personId === null) {
        throw new Error("Missing the required parameter 'personId' when calling updateProfile");
      }

      var pathParams = {
        'person_id': personId
      };
      var queryParams = {
        'params': this.apiClient.buildCollectionParam(opts['params'], 'multi')
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Person.Person;
      return _ApiClient.ApiClient.instance.callApi('/v1/person/{person_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return ProfilesApi;
}();

exports.ProfilesApi = ProfilesApi;