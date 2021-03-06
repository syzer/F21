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
    root.SwissCorporateApi.PaymentRemittanceInformation = factory(root.SwissCorporateApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PaymentRemittanceInformation model module.
   * @module model/PaymentRemittanceInformation
   * @version 1.0.0.2-SNAPSHOT
   */

  /**
   * Constructs a new <code>PaymentRemittanceInformation</code>.
   * either remittanceReference or remittanceInformation must be set
   * @alias module:model/PaymentRemittanceInformation
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>PaymentRemittanceInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PaymentRemittanceInformation} obj Optional instance to populate.
   * @return {module:model/PaymentRemittanceInformation} The populated <code>PaymentRemittanceInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    return data;
  }




  return exports;
}));


