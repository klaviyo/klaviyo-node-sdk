import {Person, ApiClient} from "./index.js";

const updateProfile = (personId, opts) => {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'personId' is set
      if (personId === undefined || personId === null) {
        throw new Error("Missing the required parameter 'personId' when calling updateProfile");
      }

      let pathParams = {
        'person_id': personId
      };
      let queryParams = opts
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

export {updateProfile}
