"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RenderedTemplate = void 0;

var _ApiClient = require("../ApiClient.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The RenderedTemplate model module.
 * @module model/RenderedTemplate
 * @version 2021.11.26
 */
var RenderedTemplate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RenderedTemplate</code>.
   * @alias module:model/RenderedTemplate
   * @class
   * @extends 
   */
  function RenderedTemplate() {
    _classCallCheck(this, RenderedTemplate);
  }
  /**
   * Constructs a <code>RenderedTemplate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RenderedTemplate} obj Optional instance to populate.
   * @return {module:model/RenderedTemplate} The populated <code>RenderedTemplate</code> instance.
   */


  _createClass(RenderedTemplate, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RenderedTemplate();

        _ApiClient.ApiClient.constructFromObject(data, obj, '');
      }

      return obj;
    }
  }]);

  return RenderedTemplate;
}();

exports.RenderedTemplate = RenderedTemplate;