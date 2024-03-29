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
import {CheckMembershipRequest} from '../model/CheckMembershipRequest.js';
import {CheckMembershipResponse} from '../model/CheckMembershipResponse.js';
import {GlobalExclusionResponseData} from '../model/GlobalExclusionResponseData.js';
import {InlineResponse2002} from '../model/InlineResponse2002.js';
import {InlineResponse2003} from '../model/InlineResponse2003.js';
import {InlineResponse2004} from '../model/InlineResponse2004.js';
import {InlineResponse2005} from '../model/InlineResponse2005.js';
import {InlineResponse2006} from '../model/InlineResponse2006.js';
import {InlineResponse2007} from '../model/InlineResponse2007.js';
import {InlineResponse2008} from '../model/InlineResponse2008.js';
import {InlineResponse2009} from '../model/InlineResponse2009.js';
import {ListIdMembersBody} from '../model/ListIdMembersBody.js';
import {ListIdMembersBody1} from '../model/ListIdMembersBody1.js';
import {ListIdSubscribeBody} from '../model/ListIdSubscribeBody.js';

/**
* ListsSegments service.
* @module api/ListsSegmentsApi
* @version 2021.11.26
*/
export class ListsSegmentsApi {

    /**
    * Constructs a new ListsSegmentsApi. 
    * @alias module:api/ListsSegmentsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Add Members to a List
     * Adds profiles to a list. This endpoint is functionally equivalent to adding profiles to a list via a CSV upload and will immediately add profiles to the list. If you would like to subscribe profiles to a list and use the double opt-in settings for the list, please use the subscribe endpoint.
     * @param {<&vendorExtensions.x-jsdoc-type>} listId 
     * @param {Object} opts Optional parameters
     * @param {module:model/ListIdMembersBody} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/InlineResponse2007>}
     */
    addMembers(listId, opts) {

    opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling addMembers");
      }

      let pathParams = {
        'list_id': listId
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
      let returnType = [InlineResponse2007];

      return ApiClient.instance.callApi(
        '/v2/list/{list_id}/members', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      ).then(function(response_and_data) {
          return response_and_data.data;
      });
    }

    /**
     * Create List
     * Creates a new list.
     * @param {Object} opts Optional parameters
     * @param {String} opts.listName 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2004}
     */
    createList(opts) {

    opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        'list_name': opts['listName']
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = InlineResponse2004;

      return ApiClient.instance.callApi(
        '/v2/lists', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      ).then(function(response_and_data) {
          return response_and_data.data;
      });
    }

    /**
     * Delete List
     * Deletes a list from an account. This is a destructive operation and cannot be undone. It will also remove flow triggers associated with the list.
     * @param {<&vendorExtensions.x-jsdoc-type>} listId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deleteList(listId) {

    
      let postBody = null;
      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling deleteList");
      }

      let pathParams = {
        'list_id': listId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return ApiClient.instance.callApi(
        '/v2/list/{list_id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      ).then(function(response_and_data) {
          return response_and_data.data;
      });
    }

    /**
     * Exclude Profile From All Email
     * Marks a person as excluded from all email. This works the same way as manually excluding someone via the excluded people page. Someone who is excluded will no longer receive any campaigns or flow emails. Keep in mind, there is currently no API to un-exclude someone. In order to remove this block, you must manually remove someone from the unsubscribed list.
     * @param {Object} opts Optional parameters
     * @param {String} opts.email 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2002}
     */
    excludeGlobally(opts) {

    opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        'email': opts['email']
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/json'];
      let returnType = InlineResponse2002;

      return ApiClient.instance.callApi(
        '/v1/people/exclusions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      ).then(function(response_and_data) {
          return response_and_data.data;
      });
    }

    /**
     * Get Global Exclusions &amp; Unsubscribes
     * Returns global exclusions/unsubscribes. Global exclusions are distinct from list exclusions in that these email addresses will not receive any emails from any list. Typically, when someone unsubscribes from a campaign, they are only unsubscribed from that list and are not globally unsubscribed.
     * @param {Object} opts Optional parameters
     * @param {String} opts.reason Filter results based on the reason for someone being excluded. The possible values are &#x60;unsubscribed&#x60;, &#x60;bounced&#x60;, &#x60;invalid_email&#x60;, &#x60;reported_spam&#x60; and &#x60;manually_excluded&#x60;. Only a single value may be specified at a time. Defaults to return all profiles regardless of reason.
     * @param {String} opts.sort Sort order to apply to results, either ascending or descending. Valid values are &#x60;asc&#x60; or &#x60;desc&#x60;. Defaults to &#x60;asc&#x60;. (default to <.>)
     * @param {Number} opts.count For pagination, the number of results to return. Default &#x3D; 500 (default to <.>)
     * @param {Number} opts.page For pagination, which page of results to return. Default &#x3D; 0 (default to <.>)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GlobalExclusionResponseData}
     */
    getGlobalExclusions(opts) {

    opts = opts || {};
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        'reason': opts['reason'],'sort': opts['sort'],'count': opts['count'],'page': opts['page']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GlobalExclusionResponseData;

      return ApiClient.instance.callApi(
        '/v1/people/exclusions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      ).then(function(response_and_data) {
          return response_and_data.data;
      });
    }

    /**
     * Get All Exclusions for a List
     * Gets all of the emails and phone numbers that have been excluded from a list along with the exclusion reasons and exclusion time. This endpoint uses batching to return the records, so for a large list multiple calls will need to be made to get all of the records.
     * @param {<&vendorExtensions.x-jsdoc-type>} listId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.marker A marker value returned by a previous GET call. Use this to grab the next batch of records.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2008}
     */
    getListExclusions(listId, opts) {

    opts = opts || {};
      let postBody = null;
      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling getListExclusions");
      }

      let pathParams = {
        'list_id': listId
      };
      let queryParams = {
        'marker': opts['marker']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2008;

      return ApiClient.instance.callApi(
        '/v2/list/{list_id}/exclusions/all', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      ).then(function(response_and_data) {
          return response_and_data.data;
      });
    }

    /**
     * Get List Info
     * Returns information about a list.
     * @param {<&vendorExtensions.x-jsdoc-type>} listId 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2005}
     */
    getListInfo(listId) {

    
      let postBody = null;
      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling getListInfo");
      }

      let pathParams = {
        'list_id': listId
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
      let returnType = InlineResponse2005;

      return ApiClient.instance.callApi(
        '/v2/list/{list_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      ).then(function(response_and_data) {
          return response_and_data.data;
      });
    }

    /**
     * Check if Profiles Are in a List
     * Checks if one or more emails, phone numbers, or push tokens are in a given list. No distinction is made between a person not being in a given list, and not being present in Klaviyo at all. Can check up to a maximum of 100 emails at a time.
     * @param {<&vendorExtensions.x-jsdoc-type>} listId 
     * @param {Object} opts Optional parameters
     * @param {module:model/CheckMembershipRequest} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CheckMembershipResponse}
     */
    getListMembers(listId, opts) {

    opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling getListMembers");
      }

      let pathParams = {
        'list_id': listId
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
      let returnType = CheckMembershipResponse;

      return ApiClient.instance.callApi(
        '/v2/list/{list_id}/get-members', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      ).then(function(response_and_data) {
          return response_and_data.data;
      });
    }

    /**
     * Check if Profiles Are in a List and not Suppressed
     * Checks if one or more emails are in a given list and not suppressed. No distinction is made between a person not being in a given list, and not being present in Klaviyo at all. Can check up to a maximum of 100 emails at a time.
     * @param {<&vendorExtensions.x-jsdoc-type>} listId 
     * @param {Object} opts Optional parameters
     * @param {module:model/CheckMembershipRequest} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CheckMembershipResponse}
     */
    getListSubscriptions(listId, opts) {

    opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling getListSubscriptions");
      }

      let pathParams = {
        'list_id': listId
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
      let returnType = CheckMembershipResponse;

      return ApiClient.instance.callApi(
        '/v2/list/{list_id}/get-list-subscriptions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      ).then(function(response_and_data) {
          return response_and_data.data;
      });
    }

    /**
     * Get Lists
     * Returns a listing of all of the lists in an account.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/InlineResponse2003>}
     */
    getLists() {

    
      let postBody = null;

      let pathParams = {
        
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
      let returnType = [InlineResponse2003];

      return ApiClient.instance.callApi(
        '/v2/lists', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      ).then(function(response_and_data) {
          return response_and_data.data;
      });
    }

    /**
     * Get List and Segment Members
     * Gets all of the emails, phone numbers, and push tokens for profiles in a given list or segment
     * @param {<&vendorExtensions.x-jsdoc-type>} listOrSegmentId 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.marker A marker value returned by a previous GET call. Use this to grab the next batch of records.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2009}
     */
    getMembers(listOrSegmentId, opts) {

    opts = opts || {};
      let postBody = null;
      // verify the required parameter 'listOrSegmentId' is set
      if (listOrSegmentId === undefined || listOrSegmentId === null) {
        throw new Error("Missing the required parameter 'listOrSegmentId' when calling getMembers");
      }

      let pathParams = {
        'list_or_segment_id': listOrSegmentId
      };
      let queryParams = {
        'marker': opts['marker']
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = InlineResponse2009;

      return ApiClient.instance.callApi(
        '/v2/group/{list_or_segment_id}/members/all', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      ).then(function(response_and_data) {
          return response_and_data.data;
      });
    }

    /**
     * Check if Profiles Are in a Segment
     * Checks if one or more emails, phone numbers, or push tokens are in a given segment. No distinction is made between a person not being in a given segment, and not being present in Klaviyo at all. Can check up to a maximum of 100 emails at a time.
     * @param {<&vendorExtensions.x-jsdoc-type>} segmentId 
     * @param {Object} opts Optional parameters
     * @param {module:model/CheckMembershipRequest} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CheckMembershipResponse}
     */
    getSegmentMembers(segmentId, opts) {

    opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'segmentId' is set
      if (segmentId === undefined || segmentId === null) {
        throw new Error("Missing the required parameter 'segmentId' when calling getSegmentMembers");
      }

      let pathParams = {
        'segment_id': segmentId
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
      let returnType = CheckMembershipResponse;

      return ApiClient.instance.callApi(
        '/v2/segment/{segment_id}/get-members', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      ).then(function(response_and_data) {
          return response_and_data.data;
      });
    }

    /**
     * Remove Profiles From List
     * Removes profiles from a list.
     * @param {<&vendorExtensions.x-jsdoc-type>} listId 
     * @param {Object} opts Optional parameters
     * @param {module:model/ListIdMembersBody1} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    removeMembers(listId, opts) {

    opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling removeMembers");
      }

      let pathParams = {
        'list_id': listId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;

      return ApiClient.instance.callApi(
        '/v2/list/{list_id}/members', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      ).then(function(response_and_data) {
          return response_and_data.data;
      });
    }

    /**
     * Subscribe Profiles to List
     * Subscribes profiles to a list. Profiles will be single or double opted into the specified list in accordance with that list’s settings. **Note:** If you have double opt-in enabled (default behavior), users will not be added to list until they opt-in, and so API will respond with an empty list: &#x60;[]&#x60;
     * @param {<&vendorExtensions.x-jsdoc-type>} listId 
     * @param {Object} opts Optional parameters
     * @param {module:model/ListIdSubscribeBody} opts.body 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/InlineResponse2006}
     */
    subscribe(listId, opts) {

    opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling subscribe");
      }

      let pathParams = {
        'list_id': listId
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
      let returnType = InlineResponse2006;

      return ApiClient.instance.callApi(
        '/v2/list/{list_id}/subscribe', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      ).then(function(response_and_data) {
          return response_and_data.data;
      });
    }

    /**
     * Unsubscribe Profiles From List
     * Unsubscribes and removes profiles from a list.
     * @param {<&vendorExtensions.x-jsdoc-type>} listId 
     * @param {Object} opts Optional parameters
     * @param {{String: Object}} opts.body Unsubscribe and remove profiles from a list.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    unsubscribe(listId, opts) {

    opts = opts || {};
      let postBody = opts['body'];
      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling unsubscribe");
      }

      let pathParams = {
        'list_id': listId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;

      return ApiClient.instance.callApi(
        '/v2/list/{list_id}/subscribe', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      ).then(function(response_and_data) {
          return response_and_data.data;
      });
    }

    /**
     * Update List Name
     * Updates a list&#x27;s name.
     * @param {<&vendorExtensions.x-jsdoc-type>} listId 
     * @param {Object} opts Optional parameters
     * @param {String} opts.listName 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    updateListName(listId, opts) {

    opts = opts || {};
      let postBody = null;
      // verify the required parameter 'listId' is set
      if (listId === undefined || listId === null) {
        throw new Error("Missing the required parameter 'listId' when calling updateListName");
      }

      let pathParams = {
        'list_id': listId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        'list_name': opts['listName']
      };

      let authNames = ['ApiKeyAuth'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = [];
      let returnType = null;

      return ApiClient.instance.callApi(
        '/v2/list/{list_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      ).then(function(response_and_data) {
          return response_and_data.data;
      });
    }

}