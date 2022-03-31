"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListIdSubscribeBody = void 0;

var _ApiClient = require("../ApiClient.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ListIdSubscribeBody model module.
 * @module model/ListIdSubscribeBody
 * @version 2022.03.29
 */
var ListIdSubscribeBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListIdSubscribeBody</code>.
   * The profiles that you would like to subscribe. Each object in the list must have either an email or phone number key. You can also provide additional properties as key-value pairs. If you are a GDPR compliant business, you will need to include &#x60;$consent&#x60; in your API call. &#x60;$consent&#x60; is a list-type, Klaviyo special property and only accepts some subset of the following: &#x60;[\&quot;email\&quot;, \&quot;web\&quot;, \&quot;sms\&quot;, \&quot;directmail\&quot;, \&quot;mobile\&quot;]&#x60;. If you are updating consent for a phone number or would like to send an opt-in SMS to the profile (for double opt-in lists), include an &#x60;sms_consent&#x60; key in the profile with a value of &#x60;true&#x60; or &#x60;false&#x60;.
   * @alias module:model/ListIdSubscribeBody
   * @class
   * @param profiles {Array.<Object.<String, Object>>} 
   */
  function ListIdSubscribeBody(profiles) {
    _classCallCheck(this, ListIdSubscribeBody);

    this.profiles = profiles;
  }
  /**
   * Constructs a <code>ListIdSubscribeBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListIdSubscribeBody} obj Optional instance to populate.
   * @return {module:model/ListIdSubscribeBody} The populated <code>ListIdSubscribeBody</code> instance.
   */


  _createClass(ListIdSubscribeBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListIdSubscribeBody();
        if (data.hasOwnProperty('profiles')) obj.profiles = _ApiClient.ApiClient.convertToType(data['profiles'], [{
          'String': Object
        }]);
      }

      return obj;
    }
  }]);

  return ListIdSubscribeBody;
}();
/**
 * @member {Array.<Object.<String, Object>>} profiles
 */


exports.ListIdSubscribeBody = ListIdSubscribeBody;
ListIdSubscribeBody.prototype.profiles = undefined;