'use strict';

var utils = require('../utils/writer.js');
var Consents = require('../service/ConsentsService');

module.exports.retrieveConsents = function retrieveConsents (req, res, next) {
  var authorization = req.swagger.params['Authorization'].value;
  var xCorAPITargetID = req.swagger.params['X-CorAPI-Target-ID'].value;
  var xCorAPIClientID = req.swagger.params['X-CorAPI-Client-ID'].value;
  var xCorrelationID = req.swagger.params['X-Correlation-ID'].value;
  var userAgent = req.swagger.params['User-Agent'].value;
  Consents.retrieveConsents(authorization,xCorAPITargetID,xCorAPIClientID,xCorrelationID,userAgent)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
