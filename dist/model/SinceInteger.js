"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SinceInteger = void 0;

var _ApiClient = require("../ApiClient.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The SinceInteger model module.
 * @module model/SinceInteger
 * @version 2021.11.26
 */
var SinceInteger = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SinceInteger</code>.
   * @alias module:model/SinceInteger
   * @class
   */
  function SinceInteger() {
    _classCallCheck(this, SinceInteger);
  }
  /**
   * Constructs a <code>SinceInteger</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SinceInteger} obj Optional instance to populate.
   * @return {module:model/SinceInteger} The populated <code>SinceInteger</code> instance.
   */


  _createClass(SinceInteger, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SinceInteger();
      }

      return obj;
    }
  }]);

  return SinceInteger;
}();

exports.SinceInteger = SinceInteger;