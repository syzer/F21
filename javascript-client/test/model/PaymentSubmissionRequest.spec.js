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
    instance = new SwissCorporateApi.PaymentSubmissionRequest();
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

  describe('PaymentSubmissionRequest', function() {
    it('should create an instance of PaymentSubmissionRequest', function() {
      // uncomment below and update the code to test PaymentSubmissionRequest
      //var instance = new SwissCorporateApi.PaymentSubmissionRequest();
      //expect(instance).to.be.a(SwissCorporateApi.PaymentSubmissionRequest);
    });

    it('should have the property messageId (base name: "messageId")', function() {
      // uncomment below and update the code to test the property messageId
      //var instance = new SwissCorporateApi.PaymentSubmissionRequest();
      //expect(instance).to.be();
    });

    it('should have the property initiatingPartyId (base name: "initiatingPartyId")', function() {
      // uncomment below and update the code to test the property initiatingPartyId
      //var instance = new SwissCorporateApi.PaymentSubmissionRequest();
      //expect(instance).to.be();
    });

    it('should have the property requestedExecutionDate (base name: "requestedExecutionDate")', function() {
      // uncomment below and update the code to test the property requestedExecutionDate
      //var instance = new SwissCorporateApi.PaymentSubmissionRequest();
      //expect(instance).to.be();
    });

    it('should have the property debtorAccount (base name: "debtorAccount")', function() {
      // uncomment below and update the code to test the property debtorAccount
      //var instance = new SwissCorporateApi.PaymentSubmissionRequest();
      //expect(instance).to.be();
    });

    it('should have the property bookingInstruction (base name: "bookingInstruction")', function() {
      // uncomment below and update the code to test the property bookingInstruction
      //var instance = new SwissCorporateApi.PaymentSubmissionRequest();
      //expect(instance).to.be();
    });

    it('should have the property transactions (base name: "transactions")', function() {
      // uncomment below and update the code to test the property transactions
      //var instance = new SwissCorporateApi.PaymentSubmissionRequest();
      //expect(instance).to.be();
    });

  });

}));
