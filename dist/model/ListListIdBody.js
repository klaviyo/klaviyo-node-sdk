"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListListIdBody = void 0;

var _ApiClient = require("../ApiClient.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The ListListIdBody model module.
 * @module model/ListListIdBody
 * @version 2022.03.29
 */
var ListListIdBody = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ListListIdBody</code>.
   * @alias module:model/ListListIdBody
   * @class
   * @param listName {String} 
   */
  function ListListIdBody(listName) {
    _classCallCheck(this, ListListIdBody);

    this.listName = listName;
  }
  /**
   * Constructs a <code>ListListIdBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListListIdBody} obj Optional instance to populate.
   * @return {module:model/ListListIdBody} The populated <code>ListListIdBody</code> instance.
   */


  _createClass(ListListIdBody, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ListListIdBody();
        if (data.hasOwnProperty('list_name')) obj.listName = _ApiClient.ApiClient.convertToType(data['list_name'], 'String');
      }

      return obj;
    }
  }]);

  return ListListIdBody;
}();
/**
 * @member {String} listName
 * @default 'MyRenamedList'
 */


exports.ListListIdBody = ListListIdBody;
ListListIdBody.prototype.listName = 'MyRenamedList';