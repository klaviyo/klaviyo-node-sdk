import { backOff } from "exponential-backoff";

import {updateProfile} from "./updateProfileOverride.js";
import {CampaignsApi} from './api/CampaignsApi.js';
import {DataPrivacyApi} from './api/DataPrivacyApi.js';
import {ListsSegmentsApi} from './api/ListsSegmentsApi.js';
import {MetricsApi} from './api/MetricsApi.js';
import {ProfilesApi} from './api/ProfilesApi.js';
import {TemplatesApi} from './api/TemplatesApi.js';
import {TrackIdentifyApi} from './api/TrackIdentifyApi.js';

const RETRY_CODES = [429, 503, 504]
const RETRY_MAX_ATTEMPTS = 3

const wrapObj = (api) => {

    Object.getOwnPropertyNames(api.prototype).forEach( functName => {

        if (functName.match(/updateProfile/)) {
            api.prototype[functName] = wrapFunction(updateProfile)
        } else if (!functName.match(/constructor/)) {
            api.prototype[functName] = wrapFunction(api.prototype[functName])
        }
    })

    return new api()
}

const wrapFunction = (funct) => {
    return (...args) => {
        return backOff(() => funct(...args), {
            jitter: "full",
            numOfAttempts: RETRY_MAX_ATTEMPTS,
            timeMultiple: 5,
            startingDelay: 500,
            retry: res => {
                return RETRY_CODES.includes(res.status)
            }
        })
    }
}

const Campaigns = wrapObj(CampaignsApi)
const DataPrivacy = wrapObj(DataPrivacyApi)
const ListsSegments = wrapObj(ListsSegmentsApi)
const Metrics = wrapObj(MetricsApi)
const Profiles =  wrapObj(ProfilesApi)
const Templates = wrapObj(TemplatesApi)
const TrackIdentify = wrapObj(TrackIdentifyApi)


export {
    Campaigns,
    DataPrivacy,
    ListsSegments,
    Metrics,
    Profiles,
    Templates,
    TrackIdentify
}


