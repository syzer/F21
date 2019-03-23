'use strict';

var utils = require('../utils/writer.js');
var Payments = require('../service/PaymentsService');

module.exports.retrievePaymentSubmission = function retrievePaymentSubmission (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  var submissionId = req.swagger.params['submissionId'].value;
  var xCorAPITargetID = req.swagger.params['X-CorAPI-Target-ID'].value;
  var xCorAPIClientID = req.swagger.params['X-CorAPI-Client-ID'].value;
  var xCorrelationID = req.swagger.params['X-Correlation-ID'].value;
  var userAgent = req.swagger.params['User-Agent'].value;
  Payments.retrievePaymentSubmission(authorization,submissionId,xCorAPITargetID,xCorAPIClientID,xCorrelationID,userAgent)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrievePaymentSubmissionStatus = function retrievePaymentSubmissionStatus (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  var submissionId = req.swagger.params['submissionId'].value;
  var xCorAPITargetID = req.swagger.params['X-CorAPI-Target-ID'].value;
  var xCorAPIClientID = req.swagger.params['X-CorAPI-Client-ID'].value;
  var xCorrelationID = req.swagger.params['X-Correlation-ID'].value;
  var userAgent = req.swagger.params['User-Agent'].value;
  Payments.retrievePaymentSubmissionStatus(authorization,submissionId,xCorAPITargetID,xCorAPIClientID,xCorrelationID,userAgent)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.submitPaymentInstructions = function submitPaymentInstructions (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  var xCorAPITargetID = req.swagger.params['X-CorAPI-Target-ID'].value;
  var xCorAPIClientID = req.swagger.params['X-CorAPI-Client-ID'].value;
  var xCorrelationID = req.swagger.params['X-Correlation-ID'].value;
  var userAgent = req.swagger.params['User-Agent'].value;
  var xPSUIPAddress = req.swagger.params['X-PSU-IP-Address'].value;
  var xPSUUserAgent = req.swagger.params['X-PSU-User-Agent'].value;
  var body = req.swagger.params['body'].value;
  Payments.submitPaymentInstructions(authorization,xCorAPITargetID,xCorAPIClientID,xCorrelationID,userAgent,xPSUIPAddress,xPSUUserAgent,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
