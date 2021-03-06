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
    root.SwissCorporateApi.DirectoryMarketingDescription = factory(root.SwissCorporateApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DirectoryMarketingDescription model module.
   * @module model/DirectoryMarketingDescription
   * @version 1.0.0.2-SNAPSHOT
   */

  /**
   * Constructs a new <code>DirectoryMarketingDescription</code>.
   * @alias module:model/DirectoryMarketingDescription
   * @class
   * @param de {Array.<String>} 
   * @param en {Array.<String>} 
   * @param fr {Array.<String>} 
   * @param it {Array.<String>} 
   */
  var exports = function(de, en, fr, it) {
    var _this = this;

    _this['de'] = de;
    _this['en'] = en;
    _this['fr'] = fr;
    _this['it'] = it;
  };

  /**
   * Constructs a <code>DirectoryMarketingDescription</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DirectoryMarketingDescription} obj Optional instance to populate.
   * @return {module:model/DirectoryMarketingDescription} The populated <code>DirectoryMarketingDescription</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('de')) {
        obj['de'] = ApiClient.convertToType(data['de'], ['String']);
      }
      if (data.hasOwnProperty('en')) {
        obj['en'] = ApiClient.convertToType(data['en'], ['String']);
      }
      if (data.hasOwnProperty('fr')) {
        obj['fr'] = ApiClient.convertToType(data['fr'], ['String']);
      }
      if (data.hasOwnProperty('it')) {
        obj['it'] = ApiClient.convertToType(data['it'], ['String']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<String>} de
   */
  exports.prototype['de'] = undefined;
  /**
   * @member {Array.<String>} en
   */
  exports.prototype['en'] = undefined;
  /**
   * @member {Array.<String>} fr
   */
  exports.prototype['fr'] = undefined;
  /**
   * @member {Array.<String>} it
   */
  exports.prototype['it'] = undefined;



  return exports;
}));


