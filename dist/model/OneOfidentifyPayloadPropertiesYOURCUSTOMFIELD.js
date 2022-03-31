"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OneOfidentifyPayloadPropertiesYOURCUSTOMFIELD = void 0;

var _ApiClient = require("../ApiClient.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The OneOfidentifyPayloadPropertiesYOURCUSTOMFIELD model module.
 * @module model/OneOfidentifyPayloadPropertiesYOURCUSTOMFIELD
 * @version 2022.03.29
 */
var OneOfidentifyPayloadPropertiesYOURCUSTOMFIELD = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>OneOfidentifyPayloadPropertiesYOURCUSTOMFIELD</code>.
   * @alias module:model/OneOfidentifyPayloadPropertiesYOURCUSTOMFIELD
   * @class
   */
  function OneOfidentifyPayloadPropertiesYOURCUSTOMFIELD() {
    _classCallCheck(this, OneOfidentifyPayloadPropertiesYOURCUSTOMFIELD);
  }
  /**
   * Constructs a <code>OneOfidentifyPayloadPropertiesYOURCUSTOMFIELD</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OneOfidentifyPayloadPropertiesYOURCUSTOMFIELD} obj Optional instance to populate.
   * @return {module:model/OneOfidentifyPayloadPropertiesYOURCUSTOMFIELD} The populated <code>OneOfidentifyPayloadPropertiesYOURCUSTOMFIELD</code> instance.
   */


  _createClass(OneOfidentifyPayloadPropertiesYOURCUSTOMFIELD, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new OneOfidentifyPayloadPropertiesYOURCUSTOMFIELD();
      }

      return obj;
    }
  }]);

  return OneOfidentifyPayloadPropertiesYOURCUSTOMFIELD;
}();

exports.OneOfidentifyPayloadPropertiesYOURCUSTOMFIELD = OneOfidentifyPayloadPropertiesYOURCUSTOMFIELD;