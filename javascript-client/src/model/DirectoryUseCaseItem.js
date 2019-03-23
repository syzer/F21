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
    root.SwissCorporateApi.DirectoryUseCaseItem = factory(root.SwissCorporateApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DirectoryUseCaseItem model module.
   * @module model/DirectoryUseCaseItem
   * @version 1.0.0.2-SNAPSHOT
   */

  /**
   * Constructs a new <code>DirectoryUseCaseItem</code>.
   * @alias module:model/DirectoryUseCaseItem
   * @class
   * @param name {String} 
   * @param version {String} 
   * @param status {module:model/DirectoryUseCaseItem.StatusEnum} 
   * @param from {Date} 
   */
  var exports = function(name, version, status, from) {
    var _this = this;

    _this['name'] = name;
    _this['version'] = version;
    _this['status'] = status;
    _this['from'] = from;


  };

  /**
   * Constructs a <code>DirectoryUseCaseItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DirectoryUseCaseItem} obj Optional instance to populate.
   * @return {module:model/DirectoryUseCaseItem} The populated <code>DirectoryUseCaseItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('version')) {
        obj['version'] = ApiClient.convertToType(data['version'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('from')) {
        obj['from'] = ApiClient.convertToType(data['from'], 'Date');
      }
      if (data.hasOwnProperty('until')) {
        obj['until'] = ApiClient.convertToType(data['until'], 'Date');
      }
      if (data.hasOwnProperty('properties')) {
        obj['properties'] = ApiClient.convertToType(data['properties'], {'String': 'String'});
      }
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} version
   */
  exports.prototype['version'] = undefined;
  /**
   * @member {module:model/DirectoryUseCaseItem.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {Date} from
   */
  exports.prototype['from'] = undefined;
  /**
   * @member {Date} until
   */
  exports.prototype['until'] = undefined;
  /**
   * @member {Object.<String, String>} properties
   */
  exports.prototype['properties'] = undefined;


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "ONBOARDING"
     * @const
     */
    "ONBOARDING": "ONBOARDING",
    /**
     * value: "CERTIFIED"
     * @const
     */
    "CERTIFIED": "CERTIFIED"  };


  return exports;
}));


