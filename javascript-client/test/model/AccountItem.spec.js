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
    instance = new SwissCorporateApi.AccountItem();
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

  describe('AccountItem', function() {
    it('should create an instance of AccountItem', function() {
      // uncomment below and update the code to test AccountItem
      //var instance = new SwissCorporateApi.AccountItem();
      //expect(instance).to.be.a(SwissCorporateApi.AccountItem);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new SwissCorporateApi.AccountItem();
      //expect(instance).to.be();
    });

    it('should have the property account (base name: "account")', function() {
      // uncomment below and update the code to test the property account
      //var instance = new SwissCorporateApi.AccountItem();
      //expect(instance).to.be();
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instance = new SwissCorporateApi.AccountItem();
      //expect(instance).to.be();
    });

    it('should have the property designation (base name: "designation")', function() {
      // uncomment below and update the code to test the property designation
      //var instance = new SwissCorporateApi.AccountItem();
      //expect(instance).to.be();
    });

    it('should have the property links (base name: "_links")', function() {
      // uncomment below and update the code to test the property links
      //var instance = new SwissCorporateApi.AccountItem();
      //expect(instance).to.be();
    });

  });

}));