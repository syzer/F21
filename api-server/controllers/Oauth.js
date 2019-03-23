'use strict';

var utils = require('../utils/writer.js');
var Oauth = require('../service/OauthService');

module.exports.oauthToken = function oauthToken (req, res, next) {
  var grant_type = req.swagger.params['grant_type'].value;
  var client_id = req.swagger.params['client_id'].value;
  var xCorAPITargetID = req.swagger.params['X-CorAPI-Target-ID'].value;
  var xCorAPIClientID = req.swagger.params['X-CorAPI-Client-ID'].value;
  var xCorrelationID = req.swagger.params['X-Correlation-ID'].value;
  var userAgent = req.swagger.params['User-Agent'].value;
  var xPSUIPAddress = req.swagger.params['X-PSU-IP-Address'].value;
  var xPSUUserAgent = req.swagger.params['X-PSU-User-Agent'].value;
  var code = req.swagger.params['code'].value;
  var refresh_token = req.swagger.params['refresh_token'].value;
  var redirect_uri = req.swagger.params['redirect_uri'].value;
  Oauth.oauthToken(grant_type,client_id,xCorAPITargetID,xCorAPIClientID,xCorrelationID,userAgent,xPSUIPAddress,xPSUUserAgent,code,refresh_token,redirect_uri)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
