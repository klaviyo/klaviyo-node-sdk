"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataPrivacyApi = void 0;

var _ApiClient = require("../ApiClient.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* DataPrivacy service.
* @module api/DataPrivacyApi
* @version 2021.11.26
*/
var DataPrivacyApi = /*#__PURE__*/function () {
  /**
  * Constructs a new DataPrivacyApi. 
  * @alias module:api/DataPrivacyApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instanc
  e} if unspecified.
  */
  function DataPrivacyApi(apiClient) {
    _classCallCheck(this, DataPrivacyApi);

    this.apiClient = apiClient || _ApiClient.ApiClient.instance;
  }
  /**
   * Request a Deletion
   * Request a data privacy-compliant deletion for the person record corresponding to an email address, phone number, or person identifier.   **If multiple person records exist for the provided identifier, only one of them will be deleted.**  The arguments should be sent as content type application/json.           Note that only **one** identifier (email, phone_number, or person_id) can be specified.  In addition to your API key, you need to set exactly one of the following parameters: &#x60;email&#x60;, &#x60;phone_number&#x60;, &#x60;or person_id&#x60;, along with the associated &#x60;string&#x60; value.   Examples:  Email:    &#x60;{\&quot;email\&quot;:\&quot;abraham.lincoln@klaviyo.com\&quot;}&#x60;    Phone Number:      &#x60;{\&quot;phone_number\&quot;:\&quot;+13239169023\&quot;}&#x60;    Person ID:      &#x60;{\&quot;person_id\&quot;:\&quot;PERSON_ID\&quot;}&#x60; 
   * @param {Object} opts Optional parameters
   * @param {String} opts.body 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link 'String'}
   */


  _createClass(DataPrivacyApi, [{
    key: "requestDeletion",
    value: function requestDeletion(opts) {
      opts = opts || {};
      var postBody = opts['body'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = 'String';
      return _ApiClient.ApiClient.instance.callApi('/v2/data-privacy/deletion-request', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return DataPrivacyApi;
}();

exports.DataPrivacyApi = DataPrivacyApi;