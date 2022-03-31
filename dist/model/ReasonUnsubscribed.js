"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReasonUnsubscribed = void 0;

var _ApiClient = require("../ApiClient.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ReasonUnsubscribed model module.
 * @module model/ReasonUnsubscribed
 * @version 2022.03.29
 */
var ReasonUnsubscribed = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ReasonUnsubscribed</code>.
   * @alias module:model/ReasonUnsubscribed
   * @class
   */
  function ReasonUnsubscribed() {
    _classCallCheck(this, ReasonUnsubscribed);
  }
  /**
   * Constructs a <code>ReasonUnsubscribed</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReasonUnsubscribed} obj Optional instance to populate.
   * @return {module:model/ReasonUnsubscribed} The populated <code>ReasonUnsubscribed</code> instance.
   */


  _createClass(ReasonUnsubscribed, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ReasonUnsubscribed();
      }

      return obj;
    }
  }]);

  return ReasonUnsubscribed;
}();

exports.ReasonUnsubscribed = ReasonUnsubscribed;