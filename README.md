# Klaviyo JavaScript SDK

- SDK version: 20220330.0.0

## Helpful Resources

- [API Reference](https://developers.klaviyo.com/en/reference/api-overview)
- [API Guides](https://developers.klaviyo.com/en/docs)
- [Postman Workspace](https://www.postman.com/klaviyo/workspace/klaviyo-developers)

## Design & Approach

This SDK is a thin wrapper around our API. See our API Reference for full documentation on API behavior.

This SDK exactly mirrors the organization and naming convention of the above language-agnostic resources, with a few namespace changes to make it Pythonic (details in Appendix).

## Organization

This SDK is organized into the following resources:

- Campaigns
- DataPrivacy
- ListsSegments
- Metrics
- Profiles
- Templates
- TrackIdentify

# Installation

## NPM

You can install this library using `npm`.

`npm install klaviyo-sdk`

## source code

*Alternatively*, you can also run this using this repo as source code, by running *one* of the following shell commands within the cloned repo:

`npm install`

and then running JavaScript from the cloned repo.

# Usage Example

### To instantiate the client

```JavaScript
import {ApiClient} from 'klaviyo-sdk'


// Klaviyo sdk setup
const defaultClient = ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
const ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = "KLAVIYO PRIVATE KEY GOES HERE";
```
Or if ES6 isn't your thing
```JavaScript
var client = require('klaviyo-sdk');

// Klaviyo sdk setup
var defaultClient = client.ApiClient.instance;
// Configure API key authorization: ApiKeyAuth
var ApiKeyAuth = defaultClient.authentications['ApiKeyAuth'];
ApiKeyAuth.apiKey = "KLAVIYO PRIVATE KEY GOES HERE";
```

NOTE:
* The SDK retries on resolvable errors, namely: rate limits (common) and server errors on klaviyo (rare).

### To call the `metric-export` operation:

```JavaScript
import {Metrics} from 'klaviyo-sdk';

const metricId = "METRIC_ID";
const opts = {count: 100};

Metrics.metricExport(metricId, opts)
    .then(data => 'Do Something Here')
    .catch(error => 'An error was thrown check the HTTP code with error.status');
```
or if you want to use async await
```JavaScript
import {Metrics} from 'klaviyo-sdk';

const metricId = "METRIC_ID";
const opts = {count: 100};

// Just make sure you are calling with the async tag ie. async () => {}
try {
    data = await Metrics.metricExport(metricId, opts);
    console.log(data);
} catch (e) {
    console.log(error);
}
```

once again if you're not using ES6

```Javascript
var client = require('klaviyo-sdk');

var metricId = "METRIC_ID";
var opts = {count: 100};

client.Metrics.metricExport(metricId, opts)
    .then(data => 'Do Something Here')
    .catch(error => 'An error was thrown check the HTTP code with error.status');
```


# Comprehensive list of Operations & Parameters

_**NOTE:**_
- Organization: Resource groups and operation_ids are listed in alphabetical order, first by Resource name, then by **OpenAPI Summary**. Operation summaries are those listed in the right side bar of the [API Reference](https://developers.klaviyo.com/en/reference/track-post).
- For example values / data types, as well as whether parameters are required/optional, please reference the corresponding API Reference link.
- Some keyword args are required for the API call to succeed, the API docs above are the source of truth regarding which keyword params are required.



## CampaignsApi


#### [Cancel a Campaign](https://developers.klaviyo.com/en/reference/cancel-campaign)

```JavaScript
Campaigns.cancelCampaign(campaignId)
```




#### [Clone a Campaign](https://developers.klaviyo.com/en/reference/clone-campaign)

```JavaScript
Campaigns.cloneCampaign(campaignId, opts)
```




#### [Create New Campaign](https://developers.klaviyo.com/en/reference/create-campaign)

```JavaScript
Campaigns.createCampaign(opts)
```




#### [Get Campaign Info](https://developers.klaviyo.com/en/reference/get-campaign-info)

```JavaScript
Campaigns.getCampaignInfo(campaignId)
```




#### [Get Campaign Recipients](https://developers.klaviyo.com/en/reference/get-campaign-recipients)

```JavaScript
Campaigns.getCampaignRecipients(campaignId, opts)
```




#### [Get Campaigns](https://developers.klaviyo.com/en/reference/get-campaigns)

```JavaScript
Campaigns.getCampaigns(opts)
```




#### [Schedule a Campaign](https://developers.klaviyo.com/en/reference/schedule-campaign)

```JavaScript
Campaigns.scheduleCampaign(campaignId, opts)
```




#### [Send a Campaign Immediately](https://developers.klaviyo.com/en/reference/send-campaign)

```JavaScript
Campaigns.sendCampaign(campaignId)
```




#### [Update Campaign](https://developers.klaviyo.com/en/reference/update-campaign)

```JavaScript
Campaigns.updateCampaign(campaignId, opts)
```



## DataPrivacyApi


#### [Request a Deletion](https://developers.klaviyo.com/en/reference/request-deletion)

```JavaScript
DataPrivacy.requestDeletion(opts)
```



## ListsSegmentsApi


#### [Add Members to a List](https://developers.klaviyo.com/en/reference/add-members)

```JavaScript
ListsSegments.addMembers(listId, opts)
```




#### [Create List](https://developers.klaviyo.com/en/reference/create-list)

```JavaScript
ListsSegments.createList(opts)
```




#### [Delete List](https://developers.klaviyo.com/en/reference/delete-list)

```JavaScript
ListsSegments.deleteList(listId)
```




#### [Exclude Profile From All Email](https://developers.klaviyo.com/en/reference/exclude-globally)

```JavaScript
ListsSegments.excludeGlobally(opts)
```




#### [Get Global Exclusions & Unsubscribes](https://developers.klaviyo.com/en/reference/get-global-exclusions)

```JavaScript
ListsSegments.getGlobalExclusions(opts)
```




#### [Get All Exclusions for a List](https://developers.klaviyo.com/en/reference/get-list-exclusions)

```JavaScript
ListsSegments.getListExclusions(listId, opts)
```




#### [Get List Info](https://developers.klaviyo.com/en/reference/get-list-info)

```JavaScript
ListsSegments.getListInfo(listId)
```




#### [Check if Profiles Are in a List](https://developers.klaviyo.com/en/reference/get-list-members)

```JavaScript
ListsSegments.getListMembers(listId, opts)
```




#### [Check if Profiles Are in a List and not Suppressed](https://developers.klaviyo.com/en/reference/get-list-subscriptions)

```JavaScript
ListsSegments.getListSubscriptions(listId, opts)
```




#### [Get Lists](https://developers.klaviyo.com/en/reference/get-lists)

```JavaScript
ListsSegments.getLists()
```




#### [Get List and Segment Members](https://developers.klaviyo.com/en/reference/get-members)

```JavaScript
ListsSegments.getMembers(listOrSegmentId, opts)
```




#### [Check if Profiles Are in a Segment](https://developers.klaviyo.com/en/reference/get-segment-members)

```JavaScript
ListsSegments.getSegmentMembers(segmentId, opts)
```




#### [Remove Profiles From List](https://developers.klaviyo.com/en/reference/remove-members)

```JavaScript
ListsSegments.removeMembers(listId, opts)
```




#### [Subscribe Profiles to List](https://developers.klaviyo.com/en/reference/subscribe)

```JavaScript
ListsSegments.subscribe(listId, opts)
```




#### [Unsubscribe Profiles From List](https://developers.klaviyo.com/en/reference/unsubscribe)

```JavaScript
ListsSegments.unsubscribe(listId, opts)
```




#### [Update List Name](https://developers.klaviyo.com/en/reference/update-list-name)

```JavaScript
ListsSegments.updateListName(listId, opts)
```



## MetricsApi


#### [Get Metrics Info](https://developers.klaviyo.com/en/reference/get-metrics)

```JavaScript
Metrics.getMetrics(opts)
```




#### [Query Event Data](https://developers.klaviyo.com/en/reference/metric-export)

```JavaScript
Metrics.metricExport(metricId, opts)
```




#### [Get Events for a Specific Metric](https://developers.klaviyo.com/en/reference/metric-timeline)

```JavaScript
Metrics.metricTimeline(metricId, opts)
```




#### [Get Events for All Metrics](https://developers.klaviyo.com/en/reference/metrics-timeline)

```JavaScript
Metrics.metricsTimeline(opts)
```



## ProfilesApi


#### [Exchange ID for Profile ID](https://developers.klaviyo.com/en/reference/exchange)

```JavaScript
Profiles.exchange(opts)
```




#### [Get Profile](https://developers.klaviyo.com/en/reference/get-profile)

```JavaScript
Profiles.getProfile(personId)
```




#### [Get Profile's Events for a Specific Metric](https://developers.klaviyo.com/en/reference/profile-metric-timeline)

```JavaScript
Profiles.profileMetricTimeline(personId, metricId, opts)
```




#### [Get Profile's Events for all Metrics](https://developers.klaviyo.com/en/reference/profile-metrics-timeline)

```JavaScript
Profiles.profileMetricsTimeline(personId, opts)
```




#### [Update Profile](https://developers.klaviyo.com/en/reference/update-profile)

```JavaScript
Profiles.updateProfile(personId, opts)
```



## TemplatesApi


#### [Clone Template](https://developers.klaviyo.com/en/reference/clone-template)

```JavaScript
Templates.cloneTemplate(templateId, opts)
```




#### [Create New Template](https://developers.klaviyo.com/en/reference/create-template)

```JavaScript
Templates.createTemplate(opts)
```




#### [Delete Template](https://developers.klaviyo.com/en/reference/delete-template)

```JavaScript
Templates.deleteTemplate(templateId)
```




#### [Get All Templates](https://developers.klaviyo.com/en/reference/get-templates)

```JavaScript
Templates.getTemplates(opts)
```




#### [Render Template](https://developers.klaviyo.com/en/reference/render-template)

```JavaScript
Templates.renderTemplate(templateId, opts)
```




#### [Render and Send Template](https://developers.klaviyo.com/en/reference/send-template)

```JavaScript
Templates.sendTemplate(templateId, opts)
```




#### [Update Template](https://developers.klaviyo.com/en/reference/update-template)

```JavaScript
Templates.updateTemplate(templateId, opts)
```



## TrackIdentifyApi


#### [Identify Profile (Legacy)](https://developers.klaviyo.com/en/reference/identify-get)

```JavaScript
TrackIdentify.identifyGet(data)
```




#### [Identify Profile](https://developers.klaviyo.com/en/reference/identify-post)

```JavaScript
TrackIdentify.identifyPost(opts)
```




#### [Track Profile Activity (Legacy)](https://developers.klaviyo.com/en/reference/track-get)

```JavaScript
TrackIdentify.trackGet(data)
```




#### [Track Profile Activity](https://developers.klaviyo.com/en/reference/track-post)

```JavaScript
TrackIdentify.trackPost(opts)
```



# Appendix

## Limitations

- The `api_key` is set at the global level: this means that if you manage multiple stores, you will need to run the code for each store in a different environment

## Refresher on catching exceptions:

```JavaScript

try {
    await YOUR_CALL
} catch e {
    print(e.status, e.reason, e.body, e.headers)
}
```

## Namespace

In the interest of making the SDK follow conventions, we made the following namespace changes *relative* to the language agnostic resources up top.

1. dashes `-` are removed in favor of camelCase
2. all other non-alphanumeric symbols, including spaces, are removed.

For example:
* `get-campaigns` becomes `getCampaigns`
* `Track & Identify` becomes `TrackIdentify`

## Parameters & Arguments

The parameters follow the same naming conventions as the resource groups and operations.

We stick to the following convention for parameters/arguments

1. All parameters are passed as function args.
2. All optional params, as well as all Body and Form Data params (including required ones), are passed in a single object param.
3. All query and path params that are tagged as `required` in the docs are passed as positional args.
4. There is no need to pass in your private `api_key` for any operations, as it is defined upon client instantiation; public key is still required where its used.