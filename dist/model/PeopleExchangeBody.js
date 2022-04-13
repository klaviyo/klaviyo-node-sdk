"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PeopleExchangeBody = void 0;

var _ApiClient = require("../ApiClient.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The PeopleExchangeBody model module.
 * @module model/PeopleExchangeBody
 * @version 2021.11.26
 */
var PeopleExchangeBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PeopleExchangeBody</code>.
   * @alias module:model/PeopleExchangeBody
   * @class
   */
  function PeopleExchangeBody() {
    _classCallCheck(this, PeopleExchangeBody);
  }
  /**
   * Constructs a <code>PeopleExchangeBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PeopleExchangeBody} obj Optional instance to populate.
   * @return {module:model/PeopleExchangeBody} The populated <code>PeopleExchangeBody</code> instance.
   */


  _createClass(PeopleExchangeBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PeopleExchangeBody();
        if (data.hasOwnProperty('exchange_id')) obj.exchangeId = _ApiClient.ApiClient.convertToType(data['exchange_id'], 'String');
      }

      return obj;
    }
  }]);

  return PeopleExchangeBody;
}();
/**
 * @member {String} exchangeId
 * @default 'EXCHANGE_ID'
 */


exports.PeopleExchangeBody = PeopleExchangeBody;
PeopleExchangeBody.prototype.exchangeId = 'EXCHANGE_ID';