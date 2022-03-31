"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateProfile = void 0;

var _index = require("./index.js");

var updateProfile = function updateProfile(personId, opts) {
  opts = opts || {};
  var postBody = null; // verify the required parameter 'personId' is set

  if (personId === undefined || personId === null) {
    throw new Error("Missing the required parameter 'personId' when calling updateProfile");
  }

  var pathParams = {
    'person_id': personId
  };
  var queryParams = opts;
  var headerParams = {};
  var formParams = {};
  var authNames = ['ApiKeyAuth'];
  var contentTypes = [];
  var accepts = ['application/json'];
  var returnType = _index.Person;
  return _index.ApiClient.instance.callApi('/v1/person/{person_id}', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType).then(function (response_and_data) {
    return response_and_data.data;
  });
};

exports.updateProfile = updateProfile;