"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeletePerson = void 0;

var _ApiClient = require("../ApiClient.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * The DeletePerson model module.
 * @module model/DeletePerson
 * @version 2022.03.29
 */
var DeletePerson = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DeletePerson</code>.
   * @alias module:model/DeletePerson
   * @class
   */
  function DeletePerson() {
    _classCallCheck(this, DeletePerson);
  }
  /**
   * Constructs a <code>DeletePerson</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeletePerson} obj Optional instance to populate.
   * @return {module:model/DeletePerson} The populated <code>DeletePerson</code> instance.
   */


  _createClass(DeletePerson, null, [{
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeletePerson();
        if (data.hasOwnProperty('person_id')) obj.personId = _ApiClient.ApiClient.convertToType(data['person_id'], 'String');
      }

      return obj;
    }
  }]);

  return DeletePerson;
}();
/**
 * @member {String} personId
 */


exports.DeletePerson = DeletePerson;
DeletePerson.prototype.personId = undefined;