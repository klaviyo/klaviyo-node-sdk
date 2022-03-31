"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TemplatesApi = void 0;

var _ApiClient = require("../ApiClient.js");

var _InlineResponse = require("../model/InlineResponse20012.js");

var _InlineResponse2 = require("../model/InlineResponse20013.js");

var _RenderedTemplate = require("../model/RenderedTemplate.js");

var _Template = require("../model/Template.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
* Templates service.
* @module api/TemplatesApi
* @version 2022.03.29
*/
var TemplatesApi = /*#__PURE__*/function () {
  /**
  * Constructs a new TemplatesApi. 
  * @alias module:api/TemplatesApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instanc
  e} if unspecified.
  */
  function TemplatesApi(apiClient) {
    _classCallCheck(this, TemplatesApi);

    this.apiClient = apiClient || _ApiClient.ApiClient.instance;
  }
  /**
   * Clone Template
   * Creates a copy of a given template with a new name.
   * @param {<&vendorExtensions.x-jsdoc-type>} templateId 
   * @param {Object} opts Optional parameters
   * @param {String} opts.name 
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Template}
   */


  _createClass(TemplatesApi, [{
    key: "cloneTemplate",
    value: function cloneTemplate(templateId, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'templateId' is set

      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling cloneTemplate");
      }

      var pathParams = {
        'template_id': templateId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {
        'name': opts['name']
      };
      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = _Template.Template;
      return _ApiClient.ApiClient.instance.callApi('/v1/email-template/{template_id}/clone', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Create New Template
     * Creates a new email template.
     * @param {Object} opts Optional parameters
     * @param {String} opts.name 
     * @param {String} opts.html 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Template}
     */

  }, {
    key: "createTemplate",
    value: function createTemplate(opts) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {
        'name': opts['name'],
        'html': opts['html']
      };
      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = _Template.Template;
      return _ApiClient.ApiClient.instance.callApi('/v1/email-templates', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Delete Template
     * Deletes a given template.
     * @param {<&vendorExtensions.x-jsdoc-type>} templateId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20013}
     */

  }, {
    key: "deleteTemplate",
    value: function deleteTemplate(templateId) {
      var postBody = null; // verify the required parameter 'templateId' is set

      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling deleteTemplate");
      }

      var pathParams = {
        'template_id': templateId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['ApiKeyAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _InlineResponse2.InlineResponse20013;
      return _ApiClient.ApiClient.instance.callApi('/v1/email-template/{template_id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Get All Templates
     * Returns a list of all the email templates you&#x27;ve created. The templates are returned in sorted order by &#x60;name&#x60;.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page For pagination, which page of results to return. Default &#x3D; 0 (default to <.>)
     * @param {Number} opts.count For pagination, the number of results to return. Max &#x3D; 100 (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse20012}
     */

  }, {
    key: "getTemplates",
    value: function getTemplates(opts) {
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
      var returnType = _InlineResponse.InlineResponse20012;
      return _ApiClient.ApiClient.instance.callApi('/v1/email-templates', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Render Template
     * Renders the specified template with the provided data and return HTML and text versions of the email.
     * @param {<&vendorExtensions.x-jsdoc-type>} templateId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.context 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RenderedTemplate}
     */

  }, {
    key: "renderTemplate",
    value: function renderTemplate(templateId, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'templateId' is set

      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling renderTemplate");
      }

      var pathParams = {
        'template_id': templateId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {
        'context': opts['context']
      };
      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = _RenderedTemplate.RenderedTemplate;
      return _ApiClient.ApiClient.instance.callApi('/v1/email-template/{template_id}/render', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Render and Send Template
     * Renders the specified template with the provided data and send the contents in an email via the service specified. This API is intended to test templates only, and is rate limited to the following thresholds: 100/hour, 1,000/day.
     * @param {<&vendorExtensions.x-jsdoc-type>} templateId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.fromEmail 
     * @param {String} opts.fromName 
     * @param {String} opts.subject 
     * @param {String} opts.to 
     * @param {String} opts.context 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/RenderedTemplate}
     */

  }, {
    key: "sendTemplate",
    value: function sendTemplate(templateId, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'templateId' is set

      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling sendTemplate");
      }

      var pathParams = {
        'template_id': templateId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {
        'from_email': opts['fromEmail'],
        'from_name': opts['fromName'],
        'subject': opts['subject'],
        'to': opts['to'],
        'context': opts['context']
      };
      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = _RenderedTemplate.RenderedTemplate;
      return _ApiClient.ApiClient.instance.callApi('/v1/email-template/{template_id}/send', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Update Template
     * Updates the name and/or HTML content of a template. Only updates imported HTML templates; does not currently update drag &amp; drop templates.
     * @param {<&vendorExtensions.x-jsdoc-type>} templateId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.name 
     * @param {String} opts.html 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Template}
     */

  }, {
    key: "updateTemplate",
    value: function updateTemplate(templateId, opts) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'templateId' is set

      if (templateId === undefined || templateId === null) {
        throw new Error("Missing the required parameter 'templateId' when calling updateTemplate");
      }

      var pathParams = {
        'template_id': templateId
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {
        'name': opts['name'],
        'html': opts['html']
      };
      var authNames = ['ApiKeyAuth'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = _Template.Template;
      return _ApiClient.ApiClient.instance.callApi('/v1/email-template/{template_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return TemplatesApi;
}();

exports.TemplatesApi = TemplatesApi;