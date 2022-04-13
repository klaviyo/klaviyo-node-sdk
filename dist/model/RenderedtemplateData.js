"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RenderedtemplateData = void 0;

var _ApiClient = require("../ApiClient.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The RenderedtemplateData model module.
 * @module model/RenderedtemplateData
 * @version 2021.11.26
 */
var RenderedtemplateData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RenderedtemplateData</code>.
   * @alias module:model/RenderedtemplateData
   * @class
   */
  function RenderedtemplateData() {
    _classCallCheck(this, RenderedtemplateData);
  }
  /**
   * Constructs a <code>RenderedtemplateData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RenderedtemplateData} obj Optional instance to populate.
   * @return {module:model/RenderedtemplateData} The populated <code>RenderedtemplateData</code> instance.
   */


  _createClass(RenderedtemplateData, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RenderedtemplateData();
        if (data.hasOwnProperty('html')) obj.html = _ApiClient.ApiClient.convertToType(data['html'], 'String');
        if (data.hasOwnProperty('text')) obj.text = _ApiClient.ApiClient.convertToType(data['text'], 'String');
      }

      return obj;
    }
  }]);

  return RenderedtemplateData;
}();
/**
 * @member {String} html
 */


exports.RenderedtemplateData = RenderedtemplateData;
RenderedtemplateData.prototype.html = undefined;
/**
 * @member {String} text
 */

RenderedtemplateData.prototype.text = undefined;