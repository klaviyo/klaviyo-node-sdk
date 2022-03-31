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
import {ApiClient} from "../ApiClient.js";

/**
* DataPrivacy service.
* @module api/DataPrivacyApi
* @version 2022.03.29
*/
export class DataPrivacyApi {

    /**
    * Constructs a new DataPrivacyApi. 
    * @alias module:api/DataPrivacyApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Request a Deletion
     * Request a data privacy-compliant deletion for the person record corresponding to an email address, phone number, or person identifier.   **If multiple person records exist for the provided identifier, only one of them will be deleted.**  The arguments should be sent as content type application/json.           Note that only **one** identifier (email, phone_number, or person_id) can be specified.  In addition to your API key, you need to set exactly one of the following parameters: &#x60;email&#x60;, &#x60;phone_number&#x60;, &#x60;or person_id&#x60;, along with the associated &#x60;string&#x60; value.   Examples:  Email:    &#x60;{\&quot;email\&quot;:\&quot;abraham.lincoln@klaviyo.com\&quot;}&#x60;    Phone Number:      &#x60;{\&quot;phone_number\&quot;:\&quot;+13239169023\&quot;}&#x60;    Person ID:      &#x60;{\&quot;person_id\&quot;:\&quot;PERSON_ID\&quot;}&#x60; 
     * @param {Object} opts Optional parameters
     * @param {String} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link 'String'}
     */
    requestDeletion(opts) {

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
      let returnType = 'String';

      return ApiClient.instance.callApi(
        '/v2/data-privacy/deletion-request', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      ).then(function(response_and_data) {
          return response_and_data.data;
      });
    }

}