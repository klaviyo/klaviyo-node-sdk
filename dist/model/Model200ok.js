"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Model200ok = void 0;

var _ApiClient = require("../ApiClient.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The Model200ok model module.
 * @module model/Model200ok
 * @version 2022.03.29
 */
var Model200ok = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Model200ok</code>.
   * @alias module:model/Model200ok
   * @class
   */
  function Model200ok() {
    _classCallCheck(this, Model200ok);
  }
  /**
   * Constructs a <code>Model200ok</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Model200ok} obj Optional instance to populate.
   * @return {module:model/Model200ok} The populated <code>Model200ok</code> instance.
   */


  _createClass(Model200ok, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Model200ok();
      }

      return obj;
    }
  }]);

  return Model200ok;
}();

exports.Model200ok = Model200ok;