'use strict';

var utils = require('../utils/writer.js');
var Diagnostics = require('../service/DiagnosticsService');

module.exports.healthCheckGet = function healthCheckGet (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  var userAgent = req.swagger.params['User-Agent'].value;
  var xCorAPITargetID = req.swagger.params['X-CorAPI-Target-ID'].value;
  var xCorAPIClientID = req.swagger.params['X-CorAPI-Client-ID'].value;
  var xCorrelationID = req.swagger.params['X-Correlation-ID'].value;
  var xPSUIPAddress = req.swagger.params['X-PSU-IP-Address'].value;
  var xPSUUserAgent = req.swagger.params['X-PSU-User-Agent'].value;
  Diagnostics.healthCheckGet(authorization,userAgent,xCorAPITargetID,xCorAPIClientID,xCorrelationID,xPSUIPAddress,xPSUUserAgent)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.healthCheckPost = function healthCheckPost (req, res, next) {
  var body = req.swagger.params['body'].value;
  var authorization = req.swagger.params['Authorization'].value;
  var userAgent = req.swagger.params['User-Agent'].value;
  var xCorAPITargetID = req.swagger.params['X-CorAPI-Target-ID'].value;
  var xCorAPIClientID = req.swagger.params['X-CorAPI-Client-ID'].value;
  var xCorrelationID = req.swagger.params['X-Correlation-ID'].value;
  var xPSUIPAddress = req.swagger.params['X-PSU-IP-Address'].value;
  var xPSUUserAgent = req.swagger.params['X-PSU-User-Agent'].value;
  Diagnostics.healthCheckPost(body,authorization,userAgent,xCorAPITargetID,xCorAPIClientID,xCorrelationID,xPSUIPAddress,xPSUUserAgent)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
