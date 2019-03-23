'use strict';

var utils = require('../utils/writer.js');
var Accounts = require('../service/AccountsService');

module.exports.requestAccountBalance = function requestAccountBalance (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  var accountId = req.swagger.params['accountId'].value;
  var xCorAPITargetID = req.swagger.params['X-CorAPI-Target-ID'].value;
  var xCorAPIClientID = req.swagger.params['X-CorAPI-Client-ID'].value;
  var xCorrelationID = req.swagger.params['X-Correlation-ID'].value;
  var userAgent = req.swagger.params['User-Agent'].value;
  var date = req.swagger.params['date'].value;
  Accounts.requestAccountBalance(authorization,accountId,xCorAPITargetID,xCorAPIClientID,xCorrelationID,userAgent,date)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.requestAccountDetails = function requestAccountDetails (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  var accountId = req.swagger.params['accountId'].value;
  var xCorAPITargetID = req.swagger.params['X-CorAPI-Target-ID'].value;
  var xCorAPIClientID = req.swagger.params['X-CorAPI-Client-ID'].value;
  var xCorrelationID = req.swagger.params['X-Correlation-ID'].value;
  var userAgent = req.swagger.params['User-Agent'].value;
  Accounts.requestAccountDetails(authorization,accountId,xCorAPITargetID,xCorAPIClientID,xCorrelationID,userAgent)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.requestAccountList = function requestAccountList (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  var xCorAPITargetID = req.swagger.params['X-CorAPI-Target-ID'].value;
  var xCorAPIClientID = req.swagger.params['X-CorAPI-Client-ID'].value;
  var xCorrelationID = req.swagger.params['X-Correlation-ID'].value;
  var userAgent = req.swagger.params['User-Agent'].value;
  Accounts.requestAccountList(authorization,xCorAPITargetID,xCorAPIClientID,xCorrelationID,userAgent)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.requestAccountTransactions = function requestAccountTransactions (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  var accountId = req.swagger.params['accountId'].value;
  var xCorAPITargetID = req.swagger.params['X-CorAPI-Target-ID'].value;
  var xCorAPIClientID = req.swagger.params['X-CorAPI-Client-ID'].value;
  var xCorrelationID = req.swagger.params['X-Correlation-ID'].value;
  var userAgent = req.swagger.params['User-Agent'].value;
  var date = req.swagger.params['date'].value;
  Accounts.requestAccountTransactions(authorization,accountId,xCorAPITargetID,xCorAPIClientID,xCorrelationID,userAgent,date)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
