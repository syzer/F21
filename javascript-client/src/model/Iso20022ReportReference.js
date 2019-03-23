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
    root.SwissCorporateApi.Iso20022ReportReference = factory(root.SwissCorporateApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Iso20022ReportReference model module.
   * @module model/Iso20022ReportReference
   * @version 1.0.0.2-SNAPSHOT
   */

  /**
   * Constructs a new <code>Iso20022ReportReference</code>.
   * @alias module:model/Iso20022ReportReference
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>Iso20022ReportReference</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Iso20022ReportReference} obj Optional instance to populate.
   * @return {module:model/Iso20022ReportReference} The populated <code>Iso20022ReportReference</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {module:model/Iso20022ReportReference.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "CAMT53"
     * @const
     */
    "CAMT53": "CAMT53",
    /**
     * value: "CAMT54"
     * @const
     */
    "CAMT54": "CAMT54"  };


  return exports;
}));


