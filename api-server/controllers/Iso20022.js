'use strict';

var utils = require('../utils/writer.js');
var Iso20022 = require('../service/Iso20022Service');

module.exports.retrieveIso20022AccountStatement = function retrieveIso20022AccountStatement (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  var reportId = req.swagger.params['reportId'].value;
  var xCorAPITargetID = req.swagger.params['X-CorAPI-Target-ID'].value;
  var xCorAPIClientID = req.swagger.params['X-CorAPI-Client-ID'].value;
  var xCorrelationID = req.swagger.params['X-Correlation-ID'].value;
  var userAgent = req.swagger.params['User-Agent'].value;
  Iso20022.retrieveIso20022AccountStatement(authorization,reportId,xCorAPITargetID,xCorAPIClientID,xCorrelationID,userAgent)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveIso20022AccountStatementIds = function retrieveIso20022AccountStatementIds (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  var xCorAPITargetID = req.swagger.params['X-CorAPI-Target-ID'].value;
  var xCorAPIClientID = req.swagger.params['X-CorAPI-Client-ID'].value;
  var xCorrelationID = req.swagger.params['X-Correlation-ID'].value;
  var userAgent = req.swagger.params['User-Agent'].value;
  Iso20022.retrieveIso20022AccountStatementIds(authorization,xCorAPITargetID,xCorAPIClientID,xCorrelationID,userAgent)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveIso20022PaymentInstruction = function retrieveIso20022PaymentInstruction (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  var submissionId = req.swagger.params['submissionId'].value;
  var xCorAPITargetID = req.swagger.params['X-CorAPI-Target-ID'].value;
  var xCorAPIClientID = req.swagger.params['X-CorAPI-Client-ID'].value;
  var xCorrelationID = req.swagger.params['X-Correlation-ID'].value;
  var userAgent = req.swagger.params['User-Agent'].value;
  Iso20022.retrieveIso20022PaymentInstruction(authorization,submissionId,xCorAPITargetID,xCorAPIClientID,xCorrelationID,userAgent)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveIso20022PaymentInstructionStatusReport = function retrieveIso20022PaymentInstructionStatusReport (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  var submissionId = req.swagger.params['submissionId'].value;
  var xCorAPITargetID = req.swagger.params['X-CorAPI-Target-ID'].value;
  var xCorAPIClientID = req.swagger.params['X-CorAPI-Client-ID'].value;
  var xCorrelationID = req.swagger.params['X-Correlation-ID'].value;
  var userAgent = req.swagger.params['User-Agent'].value;
  Iso20022.retrieveIso20022PaymentInstructionStatusReport(authorization,submissionId,xCorAPITargetID,xCorAPIClientID,xCorrelationID,userAgent)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.submitIso20022PaymentInstruction = function submitIso20022PaymentInstruction (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  var xCorAPITargetID = req.swagger.params['X-CorAPI-Target-ID'].value;
  var xCorAPIClientID = req.swagger.params['X-CorAPI-Client-ID'].value;
  var xCorrelationID = req.swagger.params['X-Correlation-ID'].value;
  var userAgent = req.swagger.params['User-Agent'].value;
  var xPSUIPAddress = req.swagger.params['X-PSU-IP-Address'].value;
  var xPSUUserAgent = req.swagger.params['X-PSU-User-Agent'].value;
  var body = req.swagger.params['body'].value;
  Iso20022.submitIso20022PaymentInstruction(authorization,xCorAPITargetID,xCorAPIClientID,xCorrelationID,userAgent,xPSUIPAddress,xPSUUserAgent,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
