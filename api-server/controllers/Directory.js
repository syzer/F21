'use strict';

var utils = require('../utils/writer.js');
var Directory = require('../service/DirectoryService');

module.exports.retrieveClientDetail = function retrieveClientDetail (req, res, next) {
  var clientId = req.swagger.params['clientId'].value;
  var xCorrelationID = req.swagger.params['X-Correlation-ID'].value;
  var userAgent = req.swagger.params['User-Agent'].value;
  Directory.retrieveClientDetail(clientId,xCorrelationID,userAgent)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveClients = function retrieveClients (req, res, next) {
  var xCorrelationID = req.swagger.params['X-Correlation-ID'].value;
  var userAgent = req.swagger.params['User-Agent'].value;
  var status = req.swagger.params['status'].value;
  Directory.retrieveClients(xCorrelationID,userAgent,status)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveProviderDetail = function retrieveProviderDetail (req, res, next) {
  var providerId = req.swagger.params['providerId'].value;
  var xCorrelationID = req.swagger.params['X-Correlation-ID'].value;
  var userAgent = req.swagger.params['User-Agent'].value;
  Directory.retrieveProviderDetail(providerId,xCorrelationID,userAgent)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveProviders = function retrieveProviders (req, res, next) {
  var xCorrelationID = req.swagger.params['X-Correlation-ID'].value;
  var userAgent = req.swagger.params['User-Agent'].value;
  var status = req.swagger.params['status'].value;
  Directory.retrieveProviders(xCorrelationID,userAgent,status)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
