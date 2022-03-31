"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TemplateIdSendBody = void 0;

var _ApiClient = require("../ApiClient.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The TemplateIdSendBody model module.
 * @module model/TemplateIdSendBody
 * @version 2022.03.29
 */
var TemplateIdSendBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TemplateIdSendBody</code>.
   * @alias module:model/TemplateIdSendBody
   * @class
   * @param fromEmail {String} 
   * @param fromName {String} 
   * @param subject {String} 
   * @param to {String} **Mixed**. string, or JSON encoded array of objects with \"email\" and \"name\" keys. `abraham.lincoln@klaviyo.com` OR `[{\"name\":\"Abraham Lincoln\",\"email\":\"abraham.lincoln@klaviyo.com\"}]` 
   */
  function TemplateIdSendBody(fromEmail, fromName, subject, to) {
    _classCallCheck(this, TemplateIdSendBody);

    this.fromEmail = fromEmail;
    this.fromName = fromName;
    this.subject = subject;
    this.to = to;
  }
  /**
   * Constructs a <code>TemplateIdSendBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TemplateIdSendBody} obj Optional instance to populate.
   * @return {module:model/TemplateIdSendBody} The populated <code>TemplateIdSendBody</code> instance.
   */


  _createClass(TemplateIdSendBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TemplateIdSendBody();
        if (data.hasOwnProperty('from_email')) obj.fromEmail = _ApiClient.ApiClient.convertToType(data['from_email'], 'String');
        if (data.hasOwnProperty('from_name')) obj.fromName = _ApiClient.ApiClient.convertToType(data['from_name'], 'String');
        if (data.hasOwnProperty('subject')) obj.subject = _ApiClient.ApiClient.convertToType(data['subject'], 'String');
        if (data.hasOwnProperty('to')) obj.to = _ApiClient.ApiClient.convertToType(data['to'], 'String');
        if (data.hasOwnProperty('context')) obj.context = _ApiClient.ApiClient.convertToType(data['context'], 'String');
      }

      return obj;
    }
  }]);

  return TemplateIdSendBody;
}();
/**
 * @member {String} fromEmail
 * @default 'george.washington@klaviyo.com'
 */


exports.TemplateIdSendBody = TemplateIdSendBody;
TemplateIdSendBody.prototype.fromEmail = 'george.washington@klaviyo.com';
/**
 * @member {String} fromName
 * @default 'George Washington'
 */

TemplateIdSendBody.prototype.fromName = 'George Washington';
/**
 * @member {String} subject
 * @default 'Happy Fourth!'
 */

TemplateIdSendBody.prototype.subject = 'Happy Fourth!';
/**
 * **Mixed**. string, or JSON encoded array of objects with \"email\" and \"name\" keys. `abraham.lincoln@klaviyo.com` OR `[{\"name\":\"Abraham Lincoln\",\"email\":\"abraham.lincoln@klaviyo.com\"}]` 
 * @member {String} to
 * @default '[{"name":"Abraham Lincoln","email":"abraham.lincoln@klaviyo.com"}]'
 */

TemplateIdSendBody.prototype.to = '[{"name":"Abraham Lincoln","email":"abraham.lincoln@klaviyo.com"}]';
/**
 * Optional, JSON object. This is the context your email template will be rendered with. Email templates are rendered with contexts in a similar manner to how Django templates are rendered. This means that nested template variables can be referenced via dot notation and template variables without corresponding context values are treated as falsy and output nothing. ex: `{ \"name\" : \"George Washington\", \"state\" : \"VA\" }` 
 * @member {String} context
 * @default '{ "name" : "George Washington", "state" : "VA" }'
 */

TemplateIdSendBody.prototype.context = '{ "name" : "George Washington", "state" : "VA" }';