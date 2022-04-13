"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.V1EmailtemplatesBody = void 0;

var _ApiClient = require("../ApiClient.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The V1EmailtemplatesBody model module.
 * @module model/V1EmailtemplatesBody
 * @version 2021.11.26
 */
var V1EmailtemplatesBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>V1EmailtemplatesBody</code>.
   * @alias module:model/V1EmailtemplatesBody
   * @class
   * @param name {String} The name of the email template.
   * @param html {String} 
   */
  function V1EmailtemplatesBody(name, html) {
    _classCallCheck(this, V1EmailtemplatesBody);

    this.name = name;
    this.html = html;
  }
  /**
   * Constructs a <code>V1EmailtemplatesBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V1EmailtemplatesBody} obj Optional instance to populate.
   * @return {module:model/V1EmailtemplatesBody} The populated <code>V1EmailtemplatesBody</code> instance.
   */


  _createClass(V1EmailtemplatesBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new V1EmailtemplatesBody();
        if (data.hasOwnProperty('name')) obj.name = _ApiClient.ApiClient.convertToType(data['name'], 'String');
        if (data.hasOwnProperty('html')) obj.html = _ApiClient.ApiClient.convertToType(data['html'], 'String');
      }

      return obj;
    }
  }]);

  return V1EmailtemplatesBody;
}();
/**
 * The name of the email template.
 * @member {String} name
 * @default 'New Template Name'
 */


exports.V1EmailtemplatesBody = V1EmailtemplatesBody;
V1EmailtemplatesBody.prototype.name = 'New Template Name';
/**
 * @member {String} html
 * @default '<html><body><p>This is an email for {{ email }}.</p></body></html>'
 */

V1EmailtemplatesBody.prototype.html = '<html><body><p>This is an email for {{ email }}.</p></body></html>';