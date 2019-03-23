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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SwissCorporateApi);
  }
}(this, function(expect, SwissCorporateApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SwissCorporateApi.DirectoryProviderItem();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('DirectoryProviderItem', function() {
    it('should create an instance of DirectoryProviderItem', function() {
      // uncomment below and update the code to test DirectoryProviderItem
      //var instance = new SwissCorporateApi.DirectoryProviderItem();
      //expect(instance).to.be.a(SwissCorporateApi.DirectoryProviderItem);
    });

    it('should have the property companyName (base name: "companyName")', function() {
      // uncomment below and update the code to test the property companyName
      //var instance = new SwissCorporateApi.DirectoryProviderItem();
      //expect(instance).to.be();
    });

    it('should have the property contact (base name: "contact")', function() {
      // uncomment below and update the code to test the property contact
      //var instance = new SwissCorporateApi.DirectoryProviderItem();
      //expect(instance).to.be();
    });

    it('should have the property companyLogo (base name: "companyLogo")', function() {
      // uncomment below and update the code to test the property companyLogo
      //var instance = new SwissCorporateApi.DirectoryProviderItem();
      //expect(instance).to.be();
    });

    it('should have the property marketingImage (base name: "marketingImage")', function() {
      // uncomment below and update the code to test the property marketingImage
      //var instance = new SwissCorporateApi.DirectoryProviderItem();
      //expect(instance).to.be();
    });

    it('should have the property companyUrl (base name: "companyUrl")', function() {
      // uncomment below and update the code to test the property companyUrl
      //var instance = new SwissCorporateApi.DirectoryProviderItem();
      //expect(instance).to.be();
    });

    it('should have the property marketingDescription (base name: "marketingDescription")', function() {
      // uncomment below and update the code to test the property marketingDescription
      //var instance = new SwissCorporateApi.DirectoryProviderItem();
      //expect(instance).to.be();
    });

    it('should have the property shortDescription (base name: "shortDescription")', function() {
      // uncomment below and update the code to test the property shortDescription
      //var instance = new SwissCorporateApi.DirectoryProviderItem();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new SwissCorporateApi.DirectoryProviderItem();
      //expect(instance).to.be();
    });

    it('should have the property registrationDate (base name: "registrationDate")', function() {
      // uncomment below and update the code to test the property registrationDate
      //var instance = new SwissCorporateApi.DirectoryProviderItem();
      //expect(instance).to.be();
    });

    it('should have the property lastModified (base name: "lastModified")', function() {
      // uncomment below and update the code to test the property lastModified
      //var instance = new SwissCorporateApi.DirectoryProviderItem();
      //expect(instance).to.be();
    });

    it('should have the property software (base name: "software")', function() {
      // uncomment below and update the code to test the property software
      //var instance = new SwissCorporateApi.DirectoryProviderItem();
      //expect(instance).to.be();
    });

    it('should have the property useCases (base name: "useCases")', function() {
      // uncomment below and update the code to test the property useCases
      //var instance = new SwissCorporateApi.DirectoryProviderItem();
      //expect(instance).to.be();
    });

  });

}));
