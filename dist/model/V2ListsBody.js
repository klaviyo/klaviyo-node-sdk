"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.V2ListsBody = void 0;

var _ApiClient = require("../ApiClient.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The V2ListsBody model module.
 * @module model/V2ListsBody
 * @version 2021.11.26
 */
var V2ListsBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>V2ListsBody</code>.
   * @alias module:model/V2ListsBody
   * @class
   * @extends 
   */
  function V2ListsBody() {
    _classCallCheck(this, V2ListsBody);
  }
  /**
   * Constructs a <code>V2ListsBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/V2ListsBody} obj Optional instance to populate.
   * @return {module:model/V2ListsBody} The populated <code>V2ListsBody</code> instance.
   */


  _createClass(V2ListsBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new V2ListsBody();

        _ApiClient.ApiClient.constructFromObject(data, obj, '');
      }

      return obj;
    }
  }]);

  return V2ListsBody;
}();

exports.V2ListsBody = V2ListsBody;