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
    define(['ApiClient', 'model/CommonClearingSystemMemberIdentification'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CommonClearingSystemMemberIdentification'));
  } else {
    // Browser globals (root is window)
    if (!root.SwissCorporateApi) {
      root.SwissCorporateApi = {};
    }
    root.SwissCorporateApi.PaymentCreditorAgent = factory(root.SwissCorporateApi.ApiClient, root.SwissCorporateApi.CommonClearingSystemMemberIdentification);
  }
}(this, function(ApiClient, CommonClearingSystemMemberIdentification) {
  'use strict';




  /**
   * The PaymentCreditorAgent model module.
   * @module model/PaymentCreditorAgent
   * @version 1.0.0.2-SNAPSHOT
   */

  /**
   * Constructs a new <code>PaymentCreditorAgent</code>.
   * @alias module:model/PaymentCreditorAgent
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>PaymentCreditorAgent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PaymentCreditorAgent} obj Optional instance to populate.
   * @return {module:model/PaymentCreditorAgent} The populated <code>PaymentCreditorAgent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('bic')) {
        obj['bic'] = ApiClient.convertToType(data['bic'], 'String');
      }
      if (data.hasOwnProperty('clearingSystemMemberIdentification')) {
        obj['clearingSystemMemberIdentification'] = CommonClearingSystemMemberIdentification.constructFromObject(data['clearingSystemMemberIdentification']);
      }
    }
    return obj;
  }

  /**
   * @member {String} bic
   */
  exports.prototype['bic'] = undefined;
  /**
   * @member {module:model/CommonClearingSystemMemberIdentification} clearingSystemMemberIdentification
   */
  exports.prototype['clearingSystemMemberIdentification'] = undefined;



  return exports;
}));


