"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TemplateIdRenderBody = void 0;

var _ApiClient = require("../ApiClient.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The TemplateIdRenderBody model module.
 * @module model/TemplateIdRenderBody
 * @version 2022.03.29
 */
var TemplateIdRenderBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TemplateIdRenderBody</code>.
   * @alias module:model/TemplateIdRenderBody
   * @class
   */
  function TemplateIdRenderBody() {
    _classCallCheck(this, TemplateIdRenderBody);
  }
  /**
   * Constructs a <code>TemplateIdRenderBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TemplateIdRenderBody} obj Optional instance to populate.
   * @return {module:model/TemplateIdRenderBody} The populated <code>TemplateIdRenderBody</code> instance.
   */


  _createClass(TemplateIdRenderBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TemplateIdRenderBody();
        if (data.hasOwnProperty('context')) obj.context = _ApiClient.ApiClient.convertToType(data['context'], 'String');
      }

      return obj;
    }
  }]);

  return TemplateIdRenderBody;
}();
/**
 * This is the context your email template will be rendered with. Email templates are rendered with contexts in a similar manner to how Django templates are rendered. This means that nested template variables can be referenced via dot notation and template variables without corresponding context values are treated as falsy and output nothing.
 * @member {String} context
 * @default '{ "name" : "George Washington", "state" : "VA" }'
 */


exports.TemplateIdRenderBody = TemplateIdRenderBody;
TemplateIdRenderBody.prototype.context = '{ "name" : "George Washington", "state" : "VA" }';