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
    root.SwissCorporateApi.AccountTransactionInstructedAmount = factory(root.SwissCorporateApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AccountTransactionInstructedAmount model module.
   * @module model/AccountTransactionInstructedAmount
   * @version 1.0.0.2-SNAPSHOT
   */

  /**
   * Constructs a new <code>AccountTransactionInstructedAmount</code>.
   * @alias module:model/AccountTransactionInstructedAmount
   * @class
   * @param amount {String} 
   * @param sourceCurrency {String} 
   * @param targetCurrency {String} 
   */
  var exports = function(amount, sourceCurrency, targetCurrency) {
    var _this = this;

    _this['amount'] = amount;
    _this['sourceCurrency'] = sourceCurrency;
    _this['targetCurrency'] = targetCurrency;


  };

  /**
   * Constructs a <code>AccountTransactionInstructedAmount</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AccountTransactionInstructedAmount} obj Optional instance to populate.
   * @return {module:model/AccountTransactionInstructedAmount} The populated <code>AccountTransactionInstructedAmount</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
      }
      if (data.hasOwnProperty('sourceCurrency')) {
        obj['sourceCurrency'] = ApiClient.convertToType(data['sourceCurrency'], 'String');
      }
      if (data.hasOwnProperty('targetCurrency')) {
        obj['targetCurrency'] = ApiClient.convertToType(data['targetCurrency'], 'String');
      }
      if (data.hasOwnProperty('exchangeRate')) {
        obj['exchangeRate'] = ApiClient.convertToType(data['exchangeRate'], 'String');
      }
      if (data.hasOwnProperty('exchangeIndicator')) {
        obj['exchangeIndicator'] = ApiClient.convertToType(data['exchangeIndicator'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} amount
   */
  exports.prototype['amount'] = undefined;
  /**
   * @member {String} sourceCurrency
   */
  exports.prototype['sourceCurrency'] = undefined;
  /**
   * @member {String} targetCurrency
   */
  exports.prototype['targetCurrency'] = undefined;
  /**
   * @member {String} exchangeRate
   */
  exports.prototype['exchangeRate'] = undefined;
  /**
   * @member {String} exchangeIndicator
   */
  exports.prototype['exchangeIndicator'] = undefined;



  return exports;
}));


