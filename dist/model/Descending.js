"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Descending = void 0;

var _ApiClient = require("../ApiClient.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The Descending model module.
 * @module model/Descending
 * @version 2021.11.26
 */
var Descending = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Descending</code>.
   * @alias module:model/Descending
   * @class
   */
  function Descending() {
    _classCallCheck(this, Descending);
  }
  /**
   * Constructs a <code>Descending</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Descending} obj Optional instance to populate.
   * @return {module:model/Descending} The populated <code>Descending</code> instance.
   */


  _createClass(Descending, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Descending();
      }

      return obj;
    }
  }]);

  return Descending;
}();

exports.Descending = Descending;