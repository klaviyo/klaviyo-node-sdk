"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OneOfinlineResponse2006 = void 0;

var _ApiClient = require("../ApiClient.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The OneOfinlineResponse2006 model module.
 * @module model/OneOfinlineResponse2006
 * @version 2021.11.26
 */
var OneOfinlineResponse2006 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OneOfinlineResponse2006</code>.
   * @alias module:model/OneOfinlineResponse2006
   * @class
   */
  function OneOfinlineResponse2006() {
    _classCallCheck(this, OneOfinlineResponse2006);
  }
  /**
   * Constructs a <code>OneOfinlineResponse2006</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OneOfinlineResponse2006} obj Optional instance to populate.
   * @return {module:model/OneOfinlineResponse2006} The populated <code>OneOfinlineResponse2006</code> instance.
   */


  _createClass(OneOfinlineResponse2006, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OneOfinlineResponse2006();
      }

      return obj;
    }
  }]);

  return OneOfinlineResponse2006;
}();

exports.OneOfinlineResponse2006 = OneOfinlineResponse2006;