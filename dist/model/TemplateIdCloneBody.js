"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TemplateIdCloneBody = void 0;

var _ApiClient = require("../ApiClient.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The TemplateIdCloneBody model module.
 * @module model/TemplateIdCloneBody
 * @version 2021.11.26
 */
var TemplateIdCloneBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TemplateIdCloneBody</code>.
   * @alias module:model/TemplateIdCloneBody
   * @class
   * @param name {String} The new name of the email template.
   */
  function TemplateIdCloneBody(name) {
    _classCallCheck(this, TemplateIdCloneBody);

    this.name = name;
  }
  /**
   * Constructs a <code>TemplateIdCloneBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TemplateIdCloneBody} obj Optional instance to populate.
   * @return {module:model/TemplateIdCloneBody} The populated <code>TemplateIdCloneBody</code> instance.
   */


  _createClass(TemplateIdCloneBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TemplateIdCloneBody();
        if (data.hasOwnProperty('name')) obj.name = _ApiClient.ApiClient.convertToType(data['name'], 'String');
      }

      return obj;
    }
  }]);

  return TemplateIdCloneBody;
}();
/**
 * The new name of the email template.
 * @member {String} name
 * @default 'My Cloned Template'
 */


exports.TemplateIdCloneBody = TemplateIdCloneBody;
TemplateIdCloneBody.prototype.name = 'My Cloned Template';