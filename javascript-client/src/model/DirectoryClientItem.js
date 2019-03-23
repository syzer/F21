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
    define(['ApiClient', 'model/DirectoryContact', 'model/DirectoryImageReference', 'model/DirectoryMarketingDescription', 'model/DirectoryMultisizeImageReference', 'model/DirectoryParticipantStatus', 'model/DirectoryShortDescription', 'model/DirectorySoftwareDescription', 'model/DirectoryUseCaseItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DirectoryContact'), require('./DirectoryImageReference'), require('./DirectoryMarketingDescription'), require('./DirectoryMultisizeImageReference'), require('./DirectoryParticipantStatus'), require('./DirectoryShortDescription'), require('./DirectorySoftwareDescription'), require('./DirectoryUseCaseItem'));
  } else {
    // Browser globals (root is window)
    if (!root.SwissCorporateApi) {
      root.SwissCorporateApi = {};
    }
    root.SwissCorporateApi.DirectoryClientItem = factory(root.SwissCorporateApi.ApiClient, root.SwissCorporateApi.DirectoryContact, root.SwissCorporateApi.DirectoryImageReference, root.SwissCorporateApi.DirectoryMarketingDescription, root.SwissCorporateApi.DirectoryMultisizeImageReference, root.SwissCorporateApi.DirectoryParticipantStatus, root.SwissCorporateApi.DirectoryShortDescription, root.SwissCorporateApi.DirectorySoftwareDescription, root.SwissCorporateApi.DirectoryUseCaseItem);
  }
}(this, function(ApiClient, DirectoryContact, DirectoryImageReference, DirectoryMarketingDescription, DirectoryMultisizeImageReference, DirectoryParticipantStatus, DirectoryShortDescription, DirectorySoftwareDescription, DirectoryUseCaseItem) {
  'use strict';




  /**
   * The DirectoryClientItem model module.
   * @module model/DirectoryClientItem
   * @version 1.0.0.2-SNAPSHOT
   */

  /**
   * Constructs a new <code>DirectoryClientItem</code>.
   * @alias module:model/DirectoryClientItem
   * @class
   * @param companyName {String} 
   * @param contact {Array.<module:model/DirectoryContact>} 
   * @param companyLogo {module:model/DirectoryMultisizeImageReference} 
   * @param companyUrl {String} 
   * @param marketingDescription {module:model/DirectoryMarketingDescription} 
   * @param shortDescription {module:model/DirectoryShortDescription} 
   * @param status {module:model/DirectoryParticipantStatus} 
   * @param registrationDate {Date} 
   * @param lastModified {Date} 
   * @param software {module:model/DirectorySoftwareDescription} 
   */
  var exports = function(companyName, contact, companyLogo, companyUrl, marketingDescription, shortDescription, status, registrationDate, lastModified, software) {
    var _this = this;

    _this['companyName'] = companyName;
    _this['contact'] = contact;
    _this['companyLogo'] = companyLogo;

    _this['companyUrl'] = companyUrl;
    _this['marketingDescription'] = marketingDescription;
    _this['shortDescription'] = shortDescription;
    _this['status'] = status;
    _this['registrationDate'] = registrationDate;
    _this['lastModified'] = lastModified;
    _this['software'] = software;

  };

  /**
   * Constructs a <code>DirectoryClientItem</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DirectoryClientItem} obj Optional instance to populate.
   * @return {module:model/DirectoryClientItem} The populated <code>DirectoryClientItem</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('companyName')) {
        obj['companyName'] = ApiClient.convertToType(data['companyName'], 'String');
      }
      if (data.hasOwnProperty('contact')) {
        obj['contact'] = ApiClient.convertToType(data['contact'], [DirectoryContact]);
      }
      if (data.hasOwnProperty('companyLogo')) {
        obj['companyLogo'] = DirectoryMultisizeImageReference.constructFromObject(data['companyLogo']);
      }
      if (data.hasOwnProperty('marketingImage')) {
        obj['marketingImage'] = DirectoryImageReference.constructFromObject(data['marketingImage']);
      }
      if (data.hasOwnProperty('companyUrl')) {
        obj['companyUrl'] = ApiClient.convertToType(data['companyUrl'], 'String');
      }
      if (data.hasOwnProperty('marketingDescription')) {
        obj['marketingDescription'] = DirectoryMarketingDescription.constructFromObject(data['marketingDescription']);
      }
      if (data.hasOwnProperty('shortDescription')) {
        obj['shortDescription'] = DirectoryShortDescription.constructFromObject(data['shortDescription']);
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = DirectoryParticipantStatus.constructFromObject(data['status']);
      }
      if (data.hasOwnProperty('registrationDate')) {
        obj['registrationDate'] = ApiClient.convertToType(data['registrationDate'], 'Date');
      }
      if (data.hasOwnProperty('lastModified')) {
        obj['lastModified'] = ApiClient.convertToType(data['lastModified'], 'Date');
      }
      if (data.hasOwnProperty('software')) {
        obj['software'] = DirectorySoftwareDescription.constructFromObject(data['software']);
      }
      if (data.hasOwnProperty('useCases')) {
        obj['useCases'] = ApiClient.convertToType(data['useCases'], [DirectoryUseCaseItem]);
      }
    }
    return obj;
  }

  /**
   * @member {String} companyName
   */
  exports.prototype['companyName'] = undefined;
  /**
   * @member {Array.<module:model/DirectoryContact>} contact
   */
  exports.prototype['contact'] = undefined;
  /**
   * @member {module:model/DirectoryMultisizeImageReference} companyLogo
   */
  exports.prototype['companyLogo'] = undefined;
  /**
   * @member {module:model/DirectoryImageReference} marketingImage
   */
  exports.prototype['marketingImage'] = undefined;
  /**
   * @member {String} companyUrl
   */
  exports.prototype['companyUrl'] = undefined;
  /**
   * @member {module:model/DirectoryMarketingDescription} marketingDescription
   */
  exports.prototype['marketingDescription'] = undefined;
  /**
   * @member {module:model/DirectoryShortDescription} shortDescription
   */
  exports.prototype['shortDescription'] = undefined;
  /**
   * @member {module:model/DirectoryParticipantStatus} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {Date} registrationDate
   */
  exports.prototype['registrationDate'] = undefined;
  /**
   * @member {Date} lastModified
   */
  exports.prototype['lastModified'] = undefined;
  /**
   * @member {module:model/DirectorySoftwareDescription} software
   */
  exports.prototype['software'] = undefined;
  /**
   * @member {Array.<module:model/DirectoryUseCaseItem>} useCases
   */
  exports.prototype['useCases'] = undefined;



  return exports;
}));


