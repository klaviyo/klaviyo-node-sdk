"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TrackIdentify = exports.Templates = exports.Profiles = exports.Metrics = exports.ListsSegments = exports.DataPrivacy = exports.Campaigns = void 0;

var _exponentialBackoff = require("exponential-backoff");

var _updateProfileOverride = require("./updateProfileOverride.js");

var _CampaignsApi = require("./api/CampaignsApi.js");

var _DataPrivacyApi = require("./api/DataPrivacyApi.js");

var _ListsSegmentsApi = require("./api/ListsSegmentsApi.js");

var _MetricsApi = require("./api/MetricsApi.js");

var _ProfilesApi = require("./api/ProfilesApi.js");

var _TemplatesApi = require("./api/TemplatesApi.js");

var _TrackIdentifyApi = require("./api/TrackIdentifyApi.js");

var RETRY_CODES = [429, 503, 504];
var RETRY_MAX_ATTEMPTS = 3;

var wrapObj = function wrapObj(api) {
  Object.getOwnPropertyNames(api.prototype).forEach(function (functName) {
    if (functName.match(/updateProfile/)) {
      api.prototype[functName] = wrapFunction(_updateProfileOverride.updateProfile);
    } else if (!functName.match(/constructor/)) {
      api.prototype[functName] = wrapFunction(api.prototype[functName]);
    }
  });
  return new api();
};

var wrapFunction = function wrapFunction(funct) {
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (0, _exponentialBackoff.backOff)(function () {
      return funct.apply(void 0, args);
    }, {
      jitter: "full",
      numOfAttempts: RETRY_MAX_ATTEMPTS,
      timeMultiple: 5,
      startingDelay: 500,
      retry: function retry(res) {
        return RETRY_CODES.includes(res.status);
      }
    });
  };
};

var Campaigns = wrapObj(_CampaignsApi.CampaignsApi);
exports.Campaigns = Campaigns;
var DataPrivacy = wrapObj(_DataPrivacyApi.DataPrivacyApi);
exports.DataPrivacy = DataPrivacy;
var ListsSegments = wrapObj(_ListsSegmentsApi.ListsSegmentsApi);
exports.ListsSegments = ListsSegments;
var Metrics = wrapObj(_MetricsApi.MetricsApi);
exports.Metrics = Metrics;
var Profiles = wrapObj(_ProfilesApi.ProfilesApi);
exports.Profiles = Profiles;
var Templates = wrapObj(_TemplatesApi.TemplatesApi);
exports.Templates = Templates;
var TrackIdentify = wrapObj(_TrackIdentifyApi.TrackIdentifyApi);
exports.TrackIdentify = TrackIdentify;