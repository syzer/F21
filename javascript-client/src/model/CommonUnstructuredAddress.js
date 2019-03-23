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
    root.SwissCorporateApi.CommonUnstructuredAddress = factory(root.SwissCorporateApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CommonUnstructuredAddress model module.
   * @module model/CommonUnstructuredAddress
   * @version 1.0.0.2-SNAPSHOT
   */

  /**
   * Constructs a new <code>CommonUnstructuredAddress</code>.
   * @alias module:model/CommonUnstructuredAddress
   * @class
   * @param addressLines {Array.<String>} max 2 lines of 35 characters. either postalAdress or adressLines must be set.
   * @param country {String} 
   */
  var exports = function(addressLines, country) {
    var _this = this;

    _this['addressLines'] = addressLines;
    _this['country'] = country;
  };

  /**
   * Constructs a <code>CommonUnstructuredAddress</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CommonUnstructuredAddress} obj Optional instance to populate.
   * @return {module:model/CommonUnstructuredAddress} The populated <code>CommonUnstructuredAddress</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('addressLines')) {
        obj['addressLines'] = ApiClient.convertToType(data['addressLines'], ['String']);
      }
      if (data.hasOwnProperty('country')) {
        obj['country'] = ApiClient.convertToType(data['country'], 'String');
      }
    }
    return obj;
  }

  /**
   * max 2 lines of 35 characters. either postalAdress or adressLines must be set.
   * @member {Array.<String>} addressLines
   */
  exports.prototype['addressLines'] = undefined;
  /**
   * @member {String} country
   */
  exports.prototype['country'] = undefined;



  return exports;
}));


