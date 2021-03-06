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
    root.SwissCorporateApi.BalanceCurrencyAmount = factory(root.SwissCorporateApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The BalanceCurrencyAmount model module.
   * @module model/BalanceCurrencyAmount
   * @version 1.0.0.2-SNAPSHOT
   */

  /**
   * Constructs a new <code>BalanceCurrencyAmount</code>.
   * @alias module:model/BalanceCurrencyAmount
   * @class
   * @param currency {String} 
   * @param amount {String} 
   */
  var exports = function(currency, amount) {
    var _this = this;

    _this['currency'] = currency;
    _this['amount'] = amount;
  };

  /**
   * Constructs a <code>BalanceCurrencyAmount</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BalanceCurrencyAmount} obj Optional instance to populate.
   * @return {module:model/BalanceCurrencyAmount} The populated <code>BalanceCurrencyAmount</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('currency')) {
        obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
      }
      if (data.hasOwnProperty('amount')) {
        obj['amount'] = ApiClient.convertToType(data['amount'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} currency
   */
  exports.prototype['currency'] = undefined;
  /**
   * @member {String} amount
   */
  exports.prototype['amount'] = undefined;



  return exports;
}));


