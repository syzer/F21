/**
 * Swiss Corporate API
 * This is the release candidate version of the \"Swiss Corporate API\" specification. 
 *
 * OpenAPI spec version: 1.0.0.2-SNAPSHOT
 * Contact: swisscorpapi@six-group.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.2
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SwissCorporateApi) {
      root.SwissCorporateApi = {};
    }
    root.SwissCorporateApi.DirectoryContact = factory(root.SwissCorporateApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DirectoryContact model module.
   * @module model/DirectoryContact
   * @version 1.0.0.2-SNAPSHOT
   */

  /**
   * Constructs a new <code>DirectoryContact</code>.
   * @alias module:model/DirectoryContact
   * @class
   * @param type {module:model/DirectoryContact.TypeEnum} 
   * @param emailAddress {String} 
   */
  var exports = function(type, emailAddress) {
    var _this = this;

    _this['type'] = type;

    _this['emailAddress'] = emailAddress;

  };

  /**
   * Constructs a <code>DirectoryContact</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DirectoryContact} obj Optional instance to populate.
   * @return {module:model/DirectoryContact} The populated <code>DirectoryContact</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('designation')) {
        obj['designation'] = ApiClient.convertToType(data['designation'], 'String');
      }
      if (data.hasOwnProperty('emailAddress')) {
        obj['emailAddress'] = ApiClient.convertToType(data['emailAddress'], 'String');
      }
      if (data.hasOwnProperty('phone')) {
        obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/DirectoryContact.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {String} designation
   */
  exports.prototype['designation'] = undefined;
  /**
   * @member {String} emailAddress
   */
  exports.prototype['emailAddress'] = undefined;
  /**
   * @member {String} phone
   */
  exports.prototype['phone'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "BUSINESS"
     * @const
     */
    "BUSINESS": "BUSINESS",
    /**
     * value: "TECHNICAL"
     * @const
     */
    "TECHNICAL": "TECHNICAL"  };


  return exports;
}));

