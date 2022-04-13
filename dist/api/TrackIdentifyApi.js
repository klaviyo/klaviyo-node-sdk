"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TrackIdentifyApi = void 0;

var _ApiClient = require("../ApiClient.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* TrackIdentify service.
* @module api/TrackIdentifyApi
* @version 2021.11.26
*/
var TrackIdentifyApi = /*#__PURE__*/function () {
  /**
  * Constructs a new TrackIdentifyApi. 
  * @alias module:api/TrackIdentifyApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instanc
  e} if unspecified.
  */
  function TrackIdentifyApi(apiClient) {
    _classCallCheck(this, TrackIdentifyApi);

    this.apiClient = apiClient || _ApiClient.ApiClient.instance;
  }
  /**
   * Identify Profile
   * This endpoint is also used to identify a profile and update its properties without an associated event. It takes as input the same payload as the above POST request, but as a base64-encoded string passed as a query parameter. NOTE: This is offered for backwards compatibility; we recommend all new implementations use the POST approach above.    **EXAMPLE:**      &#x60;&#x60;&#x60;   {       \&quot;token\&quot;: \&quot;PUBLIC_KEY\&quot;,       \&quot;properties\&quot;: {         \&quot;$email\&quot;: \&quot;abraham.lincoln@klaviyo.com\&quot;,         \&quot;$first_name\&quot;: \&quot;Abraham\&quot;,         \&quot;$last_name\&quot;: \&quot;Lincoln\&quot;,         \&quot;$city\&quot;: \&quot;Springfield\&quot;,         \&quot;$region\&quot;: \&quot;Illinois\&quot;       }   }   &#x60;&#x60;&#x60;   Gets encoded into the following string, which is passed into the &#x60;data&#x60; parameter:    &#x60;eyJ0b2tlbiI6ICJQVUJMSUNfS0VZIiwicHJvcGVydGllcyI6IHsiJGVtYWlsIjogImFicmFoYW0ubGluY29sbkBrbGF2aXlvLmNvbSIsIiRmaXJzdF9uYW1lIjogIkFicmFoYW0iLCIkbGFzdF9uYW1lIjogIkxpbmNvbG4iLCIkY2l0eSI6ICJTcHJpbmdmaWVsZCIsIiRyZWdpb24iOiAiSWxsaW5vaXMifX0K&#x60;     
   * @param {<&vendorExtensions.x-jsdoc-type>} data String representation of base64 encoded JSON object
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link 'String'}
   */


  _createClass(TrackIdentifyApi, [{
    key: "identifyGet",
    value: function identifyGet(data) {
      var postBody = null; // verify the required parameter 'data' is set

      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling identifyGet");
      }

      var pathParams = {};
      var queryParams = {
        'data': data
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/html'];
      var returnType = 'String';
      return _ApiClient.ApiClient.instance.callApi('/identify', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Identify Profile
     * This endpoint is used to track and update properties about an individual without tracking an associated event. The following data is stored in a JSON object.     **JSON OBJECT STRUCTURE:**    __token: *string*__   This is your public API key.      __properties: *JSON Object or null*__   Properties of the profile to track/update. You must identify the person by their email using a $email key (or by their phone number using a &#x60;$phone_number&#x60; key if you have SMS-only contacts). Other than that, you can include any data you want and it can then be used to create segments of people. For example, if you wanted to create a list of people on trial plans, include a person&#x27;s plan type in this JSON object so you can use that information later.         **SPECIAL FIELDS:**    The Klaviyo CRM has the following special fields you can set for customer **properties** with the **Identify** endpoint, to unlock additional functionality:      **$email:** _string_   **$first_name:** _string_   **$last_name:** _string_   **$phone_number:** _string; eg: \&quot;+13239169023\&quot;_   **$city:** _string_   **$region:** _string; state, or other region_   **$country:** _string_   **$zip:** _string_   **$image:** _string; url to a photo of a person_   **$consent:** _list of strings; eg: [&#x27;sms&#x27;, &#x27;email&#x27;, &#x27;web&#x27;, &#x27;directmail&#x27;, &#x27;mobile&#x27;]_         **EXAMPLE:**      &#x60;&#x60;&#x60;   {       \&quot;token\&quot;: \&quot;PUBLIC_KEY\&quot;,       \&quot;properties\&quot;: {         \&quot;$email\&quot;: \&quot;abraham.lincoln@klaviyo.com\&quot;,         \&quot;$first_name\&quot;: \&quot;Abraham\&quot;,         \&quot;$last_name\&quot;: \&quot;Lincoln\&quot;,         \&quot;$city\&quot;: \&quot;Springfield\&quot;,         \&quot;$region\&quot;: \&quot;Illinois\&quot;       }   }    
     * @param {Object} opts Optional parameters
     * @param {String} opts.data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link 'String'}
     */

  }, {
    key: "identifyPost",
    value: function identifyPost(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {
        'data': opts['data']
      };
      var authNames = [];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['text/html'];
      var returnType = 'String';
      return _ApiClient.ApiClient.instance.callApi('/identify', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Track Profile Activity
     * This endpoint is also used to track a profile&#x27;s activity. It takes as input the same payload as the above POST request, but as a base64-encoded string passed as a query parameter. NOTE: This is offered for backwards compatibility; we recommend all new implementations use the POST approach above.      **EXAMPLE:**      &#x60;&#x60;&#x60;   {     \&quot;token\&quot;: \&quot;PUBLIC_KEY\&quot;,     \&quot;event\&quot;: \&quot;Ordered Product\&quot;,     \&quot;customer_properties\&quot;: {       \&quot;$email\&quot;: \&quot;abraham.lincoln@klaviyo.com\&quot;     },     \&quot;properties\&quot;: {       \&quot;item_name\&quot;: \&quot;Boots\&quot;,       \&quot;$value\&quot;: 100     }   }    &#x60;&#x60;&#x60;   Gets encoded into the following string, which is passed into the &#x60;data&#x60; parameter:    &#x60;eyJ0b2tlbiI6ICJQVUJMSUNfS0VZIiwiZXZlbnQiOiAiT3JkZXJlZEl0ZW0iLCJjdXN0b21lcl9wcm9wZXJ0aWVzIjogeyIkZW1haWwiOiAiYWJyYWhhbS5saW5jb2xuQGtsYXZpeW8uY29tIn0sInByb3BlcnRpZXMiOiB7Iml0ZW1fbmFtZSI6ICJCb290cyIsIiR2YWx1ZSI6IDEwMH19&#x60; 
     * @param {<&vendorExtensions.x-jsdoc-type>} data String representation of base64 encoded JSON object
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link 'String'}
     */

  }, {
    key: "trackGet",
    value: function trackGet(data) {
      var postBody = null; // verify the required parameter 'data' is set

      if (data === undefined || data === null) {
        throw new Error("Missing the required parameter 'data' when calling trackGet");
      }

      var pathParams = {};
      var queryParams = {
        'data': data
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/html'];
      var returnType = 'String';
      return _ApiClient.ApiClient.instance.callApi('/track', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Track Profile Activity
     * This endpoint is used to track a profile&#x27;s activity. The following data is encoded in a JSON object. NOTE: an account can have up to 200 unique metrics (event types). This endpoint can accept payloads up to approximately 1MB.     **JSON OBJECT STRUCTURE:**    __token: *string*__   This is your public API key.      __event: *string*__   Name of the event you want to track.       __customer_properties: *JSON Object or null*__   Properties of the profile that triggered this event. You must identify the person by their email using a $email key (or by their phone number using a &#x60;$phone_number&#x60; key if you have SMS-only contacts). Other than that, you can include any data you want and it can then be used to create segments of people. For example, if you wanted to create a list of people on trial plans, include a person&#x27;s plan type in this JSON object so you can use that information later.      __properties: *optional; JSON Object or null*__   Properties of this event. Any properties included here can be used for creating segments later For example, if you track an event called \&quot;Ordered Product\&quot; you could include a property for item type (e.g. image, article, etc.), size, etc.    __time: *optional; 10-digit UNIX timestamp or null*__   When this event occurred. By default, Klaviyo assumes events happen when a request is made. If you&#x27;d like to track an event that happened in past, use this property.         **SPECIAL FIELDS:**      The Klaviyo CRM has the following special fields you can set for **customer_properties** with the **Track** endpoint, to unlock additional functionality:      **$email:** _string_   **$first_name:** _string_   **$last_name:** _string_   **$phone_number:** _string; eg: \&quot;+13239169023\&quot;_   **$city:** _string_   **$region:** _string; state, or other region_   **$country:** _string_   **$zip:** _string_   **$image:** _string; url to a photo of a person_   **$consent:** _list of strings; eg: [&#x27;sms&#x27;, &#x27;email&#x27;, &#x27;web&#x27;, &#x27;directmail&#x27;, &#x27;mobile&#x27;]_      You can also set the following special fields in event **properties** with the **Track** endpoint:      **$event_id:** _a unique identifier for an event_   **$value:** _a numeric value to associate with this event (e.g. the dollar value of a purchase)_      **EXAMPLE:**      &#x60;&#x60;&#x60;   {     \&quot;token\&quot;: \&quot;PUBLIC_KEY\&quot;,     \&quot;event\&quot;: \&quot;Ordered Product\&quot;,     \&quot;customer_properties\&quot;: {       \&quot;$email\&quot;: \&quot;abraham.lincoln@klaviyo.com\&quot;     },     \&quot;properties\&quot;: {       \&quot;item_name\&quot;: \&quot;Boots\&quot;,       \&quot;$value\&quot;: 100     }   } 
     * @param {Object} opts Optional parameters
     * @param {String} opts.data 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link 'String'}
     */

  }, {
    key: "trackPost",
    value: function trackPost(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {
        'data': opts['data']
      };
      var authNames = [];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['text/html'];
      var returnType = 'String';
      return _ApiClient.ApiClient.instance.callApi('/track', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return TrackIdentifyApi;
}();

exports.TrackIdentifyApi = TrackIdentifyApi;