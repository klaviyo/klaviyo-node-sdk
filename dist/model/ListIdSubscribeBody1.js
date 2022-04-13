"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListIdSubscribeBody1 = void 0;

var _ApiClient = require("../ApiClient.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ListIdSubscribeBody1 model module.
 * @module model/ListIdSubscribeBody1
 * @version 2021.11.26
 */
var ListIdSubscribeBody1 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListIdSubscribeBody1</code>.
   * Profiles is an object containing &#x60;emails&#x60;, &#x60;phone_numbers&#x60;, and &#x60;push_tokens&#x60;. Each is an array of strings. Profiles with corresponding values will be removed from this list.
   * @alias module:model/ListIdSubscribeBody1
   * @class
   * @extends 
   */
  function ListIdSubscribeBody1() {
    _classCallCheck(this, ListIdSubscribeBody1);
  }
  /**
   * Constructs a <code>ListIdSubscribeBody1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListIdSubscribeBody1} obj Optional instance to populate.
   * @return {module:model/ListIdSubscribeBody1} The populated <code>ListIdSubscribeBody1</code> instance.
   */


  _createClass(ListIdSubscribeBody1, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListIdSubscribeBody1();

        _ApiClient.ApiClient.constructFromObject(data, obj, '');
      }

      return obj;
    }
  }]);

  return ListIdSubscribeBody1;
}();

exports.ListIdSubscribeBody1 = ListIdSubscribeBody1;