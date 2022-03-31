"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CampaignsApi = void 0;

var _ApiClient = require("../ApiClient.js");

var _Campaign = require("../model/Campaign.js");

var _InlineResponse = require("../model/InlineResponse20010.js");

var _InlineResponse2 = require("../model/InlineResponse20011.js");

var _InlineResponse3 = require("../model/InlineResponse2009.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Campaigns service.
* @module api/CampaignsApi
* @version 2022.03.29
*/
var CampaignsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new CampaignsApi. 
  * @alias module:api/CampaignsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instanc
  e} if unspecified.
  */
  function CampaignsApi(apiClient) {
    _classCallCheck(this, CampaignsApi);

    this.apiClient = apiClient || _ApiClient.ApiClient.instance;
  }
  /**
   * Cancel a Campaign
   * Cancels a campaign send. Marks a campaign as cancelled regardless of it&#x27;s current status.
   * @param {<&vendorExtensions.x-jsdoc-type>} campaignId 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Campaign}
   */


  _createClass(CampaignsApi, [{
    key: "cancelCampaign",
    value: function cancelCampaign(campaignId) {
      var postBody = null; // verify the required parameter 'campaignId' is set

      if (campaignId === undefined || campaignId === null) {
        throw new Error("Missing the required parameter 'campaignId' when calling cancelCampaign");
      }

      var pathParams = {
        'campaign_id': campaignId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Campaign.Campaign;
      return _ApiClient.ApiClient.instance.callApi('/v1/campaign/{campaign_id}/cancel', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Clone a Campaign
     * Creates a copy of a campaign. The new campaign starts as a draft.
     * @param {<&vendorExtensions.x-jsdoc-type>} campaignId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.name 
     * @param {String} opts.listId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Campaign}
     */

  }, {
    key: "cloneCampaign",
    value: function cloneCampaign(campaignId, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'campaignId' is set

      if (campaignId === undefined || campaignId === null) {
        throw new Error("Missing the required parameter 'campaignId' when calling cloneCampaign");
      }

      var pathParams = {
        'campaign_id': campaignId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {
        'name': opts['name'],
        'list_id': opts['listId']
      };
      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = _Campaign.Campaign;
      return _ApiClient.ApiClient.instance.callApi('/v1/campaign/{campaign_id}/clone', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Create New Campaign
     * Creates a new campaign. The created campaign is a draft and is not automatically sent.
     * @param {Object} opts Optional parameters
     * @param {String} opts.listId 
     * @param {String} opts.templateId 
     * @param {String} opts.fromEmail 
     * @param {String} opts.fromName 
     * @param {String} opts.subject 
     * @param {String} opts.name 
     * @param {Boolean} opts.useSmartSending 
     * @param {Boolean} opts.addGoogleAnalytics 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Campaign}
     */

  }, {
    key: "createCampaign",
    value: function createCampaign(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {
        'list_id': opts['listId'],
        'template_id': opts['templateId'],
        'from_email': opts['fromEmail'],
        'from_name': opts['fromName'],
        'subject': opts['subject'],
        'name': opts['name'],
        'use_smart_sending': opts['useSmartSending'],
        'add_google_analytics': opts['addGoogleAnalytics']
      };
      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = _Campaign.Campaign;
      return _ApiClient.ApiClient.instance.callApi('/v1/campaigns', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get Campaign Info
     * Returns summary information for the campaign specified.
     * @param {<&vendorExtensions.x-jsdoc-type>} campaignId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Campaign}
     */

  }, {
    key: "getCampaignInfo",
    value: function getCampaignInfo(campaignId) {
      var postBody = null; // verify the required parameter 'campaignId' is set

      if (campaignId === undefined || campaignId === null) {
        throw new Error("Missing the required parameter 'campaignId' when calling getCampaignInfo");
      }

      var pathParams = {
        'campaign_id': campaignId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Campaign.Campaign;
      return _ApiClient.ApiClient.instance.callApi('/v1/campaign/{campaign_id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get Campaign Recipients
     * Returns summary information about email recipients for the campaign specified that includes each recipients email, customer ID, and status.
     * @param {<&vendorExtensions.x-jsdoc-type>} campaignId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.count For pagination, the number of results to return. Max &#x3D; 25,000 (default to <.>)
     * @param {String} opts.sort Sort order to apply to results, either ascending or descending. Valid values are &#x60;asc&#x60; or &#x60;desc&#x60;. Defaults to &#x60;asc&#x60;. (default to <.>)
     * @param {String} opts.offset For pagination, if a response to this endpoint includes a &#x60;next_offset&#x60;, use that value to get the next page of recipients.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20011}
     */

  }, {
    key: "getCampaignRecipients",
    value: function getCampaignRecipients(campaignId, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'campaignId' is set

      if (campaignId === undefined || campaignId === null) {
        throw new Error("Missing the required parameter 'campaignId' when calling getCampaignRecipients");
      }

      var pathParams = {
        'campaign_id': campaignId
      };
      var queryParams = {
        'count': opts['count'],
        'sort': opts['sort'],
        'offset': opts['offset']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse2.InlineResponse20011;
      return _ApiClient.ApiClient.instance.callApi('/v1/campaign/{campaign_id}/recipients', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get Campaigns
     * Returns a list of all the campaigns you&#x27;ve created. The campaigns are returned in reverse sorted order by the time they were created.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page For pagination, which page of results to return. Default &#x3D; 0 (default to <.>)
     * @param {Number} opts.count For pagination, the number of results to return. Max &#x3D; 100 (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2009}
     */

  }, {
    key: "getCampaigns",
    value: function getCampaigns(opts) {
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
      var returnType = _InlineResponse3.InlineResponse2009;
      return _ApiClient.ApiClient.instance.callApi('/v1/campaigns', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Schedule a Campaign
     * Schedules a campaign for a time in the future
     * @param {<&vendorExtensions.x-jsdoc-type>} campaignId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.sendTime 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20010}
     */

  }, {
    key: "scheduleCampaign",
    value: function scheduleCampaign(campaignId, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'campaignId' is set

      if (campaignId === undefined || campaignId === null) {
        throw new Error("Missing the required parameter 'campaignId' when calling scheduleCampaign");
      }

      var pathParams = {
        'campaign_id': campaignId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {
        'send_time': opts['sendTime']
      };
      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse.InlineResponse20010;
      return _ApiClient.ApiClient.instance.callApi('/v1/campaign/{campaign_id}/schedule', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Send a Campaign Immediately
     * Queues a campaign for immediate delivery
     * @param {<&vendorExtensions.x-jsdoc-type>} campaignId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20010}
     */

  }, {
    key: "sendCampaign",
    value: function sendCampaign(campaignId) {
      var postBody = null; // verify the required parameter 'campaignId' is set

      if (campaignId === undefined || campaignId === null) {
        throw new Error("Missing the required parameter 'campaignId' when calling sendCampaign");
      }

      var pathParams = {
        'campaign_id': campaignId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse.InlineResponse20010;
      return _ApiClient.ApiClient.instance.callApi('/v1/campaign/{campaign_id}/send', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update Campaign
     * Updates details of a campaign. You can update a campaign&#x27;s name, subject, from email address, from name, template or list.
     * @param {<&vendorExtensions.x-jsdoc-type>} campaignId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.listId 
     * @param {String} opts.templateId 
     * @param {String} opts.fromEmail 
     * @param {String} opts.fromName 
     * @param {String} opts.subject 
     * @param {String} opts.name 
     * @param {Boolean} opts.useSmartSending 
     * @param {Boolean} opts.addGoogleAnalytics 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Campaign}
     */

  }, {
    key: "updateCampaign",
    value: function updateCampaign(campaignId, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'campaignId' is set

      if (campaignId === undefined || campaignId === null) {
        throw new Error("Missing the required parameter 'campaignId' when calling updateCampaign");
      }

      var pathParams = {
        'campaign_id': campaignId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {
        'list_id': opts['listId'],
        'template_id': opts['templateId'],
        'from_email': opts['fromEmail'],
        'from_name': opts['fromName'],
        'subject': opts['subject'],
        'name': opts['name'],
        'use_smart_sending': opts['useSmartSending'],
        'add_google_analytics': opts['addGoogleAnalytics']
      };
      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = _Campaign.Campaign;
      return _ApiClient.ApiClient.instance.callApi('/v1/campaign/{campaign_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return CampaignsApi;
}();

exports.CampaignsApi = CampaignsApi;