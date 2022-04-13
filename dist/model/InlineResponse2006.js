"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InlineResponse2006 = void 0;

var _ApiClient = require("../ApiClient.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The InlineResponse2006 model module.
 * @module model/InlineResponse2006
 * @version 2021.11.26
 */
var InlineResponse2006 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse2006</code>.
   * @alias module:model/InlineResponse2006
   * @class
   */
  function InlineResponse2006() {
    _classCallCheck(this, InlineResponse2006);
  }
  /**
   * Constructs a <code>InlineResponse2006</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse2006} obj Optional instance to populate.
   * @return {module:model/InlineResponse2006} The populated <code>InlineResponse2006</code> instance.
   */


  _createClass(InlineResponse2006, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2006();
      }

      return obj;
    }
  }]);

  return InlineResponse2006;
}(); // Implement OneOfinlineResponse2006 interface:


exports.InlineResponse2006 = InlineResponse2006;