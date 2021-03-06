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
    root.SwissCorporateApi.PaymentIbanRemittanceReference = factory(root.SwissCorporateApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PaymentIbanRemittanceReference model module.
   * @module model/PaymentIbanRemittanceReference
   * @version 1.0.0.2-SNAPSHOT
   */

  /**
   * Constructs a new <code>PaymentIbanRemittanceReference</code>.
   * either remittanceReference or remittanceInformation must be set
   * @alias module:model/PaymentIbanRemittanceReference
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>PaymentIbanRemittanceReference</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PaymentIbanRemittanceReference} obj Optional instance to populate.
   * @return {module:model/PaymentIbanRemittanceReference} The populated <code>PaymentIbanRemittanceReference</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('reference')) {
        obj['reference'] = ApiClient.convertToType(data['reference'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/PaymentIbanRemittanceReference.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {String} reference
   */
  exports.prototype['reference'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "SCOR"
     * @const
     */
    "SCOR": "SCOR",
    /**
     * value: "QRR"
     * @const
     */
    "QRR": "QRR"  };


  return exports;
}));


