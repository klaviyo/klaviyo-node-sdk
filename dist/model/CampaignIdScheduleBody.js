"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CampaignIdScheduleBody = void 0;

var _ApiClient = require("../ApiClient.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The CampaignIdScheduleBody model module.
 * @module model/CampaignIdScheduleBody
 * @version 2022.03.29
 */
var CampaignIdScheduleBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CampaignIdScheduleBody</code>.
   * @alias module:model/CampaignIdScheduleBody
   * @class
   * @param sendTime {String}  A timestamp of the format `%Y-%m-%d %H:%M:%S` in the UTC timezone.  Ex:  `2022-01-13 00:00:00` 
   */
  function CampaignIdScheduleBody(sendTime) {
    _classCallCheck(this, CampaignIdScheduleBody);

    this.sendTime = sendTime;
  }
  /**
   * Constructs a <code>CampaignIdScheduleBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CampaignIdScheduleBody} obj Optional instance to populate.
   * @return {module:model/CampaignIdScheduleBody} The populated <code>CampaignIdScheduleBody</code> instance.
   */


  _createClass(CampaignIdScheduleBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CampaignIdScheduleBody();
        if (data.hasOwnProperty('send_time')) obj.sendTime = _ApiClient.ApiClient.convertToType(data['send_time'], 'String');
      }

      return obj;
    }
  }]);

  return CampaignIdScheduleBody;
}();
/**
 *  A timestamp of the format `%Y-%m-%d %H:%M:%S` in the UTC timezone.  Ex:  `2022-01-13 00:00:00` 
 * @member {String} sendTime
 * @default '2022-01-13 00:00:00'
 */


exports.CampaignIdScheduleBody = CampaignIdScheduleBody;
CampaignIdScheduleBody.prototype.sendTime = '2022-01-13 00:00:00';