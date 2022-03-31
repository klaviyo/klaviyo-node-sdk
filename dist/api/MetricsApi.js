"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MetricsApi = void 0;

var _ApiClient = require("../ApiClient.js");

var _InlineResponse = require("../model/InlineResponse200.js");

var _MetricExport = require("../model/MetricExport.js");

var _MetricTimeline = require("../model/MetricTimeline.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Metrics service.
* @module api/MetricsApi
* @version 2022.03.29
*/
var MetricsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new MetricsApi. 
  * @alias module:api/MetricsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instanc
  e} if unspecified.
  */
  function MetricsApi(apiClient) {
    _classCallCheck(this, MetricsApi);

    this.apiClient = apiClient || _ApiClient.ApiClient.instance;
  }
  /**
   * Get Metrics Info
   * Returns a list of all the metrics in your account.
   * @param {Object} opts Optional parameters
   * @param {Number} opts.page For pagination, which page of results to return. Default &#x3D; 0 (default to <.>)
   * @param {Number} opts.count For pagination, the number of results to return. Default &#x3D; 50 ; Max &#x3D; 100 (default to <.>)
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse200}
   */


  _createClass(MetricsApi, [{
    key: "getMetrics",
    value: function getMetrics(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'page': opts['page'],
        'count': opts['count']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse.InlineResponse200;
      return _ApiClient.ApiClient.instance.callApi('/v1/metrics', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Query Event Data
     * Exports event data from Klaviyo, optionally filtering and segmenting on available event properties. Note that the only comparison operator currently supported is &#x60;&#x3D;&#x60;. To ensure a correct response, enter parameters in the curl request as they are ordered below:
     * @param {<&vendorExtensions.x-jsdoc-type>} metricId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.startDate  Beginning of timeframe to pull event data for. The default value is 1 month ago. Can also accept a 10-digit UNIX timestamp. When sending a &#x60;start_date&#x60;, you must also send an &#x60;end_date&#x60;  Ex: &#x60;1610524800&#x60; OR &#x60;2021-01-13&#x60; 
     * @param {String} opts.endDate  End of timeframe to pull event data for. The default is the current day, or 1 month from start_date, whichever is sooner. Can also accept a 10-digit UNIX timestamp. When sending an &#x60;end_date&#x60;, you must also send a &#x60;start_date&#x60;. Must be *at most* 31 days after &#x60;start_date&#x60;  Ex: &#x60;1612080000&#x60; OR &#x60;2021-01-31&#x60; 
     * @param {String} opts.unit Granularity to bucket data points into - one of &#x60;day&#x60;, &#x60;week&#x60;, or &#x60;month&#x60;. Defaults to &#x60;day&#x60;. (default to <.>)
     * @param {String} opts.measurement  Type of metric to fetch - one of &#x60;unique&#x60;, &#x60;count&#x60;, &#x60;value&#x60;, or &#x60;sum&#x60;. Defaults to &#x60;count&#x60;. For &#x60;sum&#x60; a property name to operate on must be supplied as a JSON-encoded list like &#x60;[\&quot;sum\&quot;,\&quot;ItemCount\&quot;]&#x60;  (default to <.>)
     * @param {String} opts.where Optional, JSON-encoded list. Conditions to use to filter the set of events. A max of 1 condition can be given. &#x60;where&#x60; and &#x60;by&#x60; parameters cannot be specified at the same time.  ex: &#x60;[[\&quot;$attributed_flow\&quot;,\&quot;&#x3D;\&quot;,\&quot;FLOW_ID\&quot;]]&#x60; 
     * @param {String} opts.by The name of a property to segment the event data on. &#x60;where&#x60; and &#x60;by&#x60; parameters cannot be specified at the same time. Cannot be used alongside &#x60;where&#x60; parameter.
     * @param {Number} opts.count Maximum number of segments to return. Default &#x3D; 25, **MAX &#x3D; 1000** (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MetricExport}
     */

  }, {
    key: "metricExport",
    value: function metricExport(metricId, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'metricId' is set

      if (metricId === undefined || metricId === null) {
        throw new Error("Missing the required parameter 'metricId' when calling metricExport");
      }

      var pathParams = {
        'metric_id': metricId
      };
      var queryParams = {
        'start_date': opts['startDate'],
        'end_date': opts['endDate'],
        'unit': opts['unit'],
        'measurement': opts['measurement'],
        'where': opts['where'],
        'by': opts['by'],
        'count': opts['count']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _MetricExport.MetricExport;
      return _ApiClient.ApiClient.instance.callApi('/v1/metric/{metric_id}/export', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get Events for a Specific Metric
     * Returns a batched timeline for one specific metric.
     * @param {<&vendorExtensions.x-jsdoc-type>} metricId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.since Either a 10-digit Unix timestamp (UTC) to use as starting datetime, OR a pagination token obtained from the &#x60;next&#x60; attribute of a prior API call. For backwards compatibility, UUIDs will continue to be supported for a limited time. Defaults to current time.
     * @param {Number} opts.count Number of events to return in a batch. Max &#x3D; 100 (default to <.>)
     * @param {String} opts.sort Sort order to apply to timeline, either descending or ascending. Valid values are &#x60;desc&#x60; or &#x60;asc&#x60;. Defaults to &#x60;desc&#x60;. Always descending when &#x60;since&#x60; is not sent, as &#x60;since&#x60; defaults to current time. (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MetricTimeline}
     */

  }, {
    key: "metricTimeline",
    value: function metricTimeline(metricId, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'metricId' is set

      if (metricId === undefined || metricId === null) {
        throw new Error("Missing the required parameter 'metricId' when calling metricTimeline");
      }

      var pathParams = {
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
      return _ApiClient.ApiClient.instance.callApi('/v1/metric/{metric_id}/timeline', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get Events for All Metrics
     * Returns a batched timeline of all events in your account.
     * @param {Object} opts Optional parameters
     * @param {String} opts.since Either a 10-digit Unix timestamp (UTC) to use as starting datetime, OR a pagination token obtained from the next attribute of a prior API call. For backwards compatibility, UUIDs will continue to be supported for a limited time. Defaults to current time.
     * @param {Number} opts.count Number of events to return in a batch. Default &#x3D; 50, Max &#x3D; 100 (default to <.>)
     * @param {String} opts.sort Sort order to apply to timeline, either descending or ascending. Valid values are &#x60;desc&#x60; or &#x60;asc&#x60;. Defaults to &#x60;desc&#x60;. Always descending when &#x60;since&#x60; is not sent, as &#x60;since&#x60; defaults to current time. (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/MetricTimeline}
     */

  }, {
    key: "metricsTimeline",
    value: function metricsTimeline(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
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
      return _ApiClient.ApiClient.instance.callApi('/v1/metrics/timeline', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return MetricsApi;
}();

exports.MetricsApi = MetricsApi;