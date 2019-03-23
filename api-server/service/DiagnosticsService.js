'use strict';


/**
 * Returns all specified request headers and additional diagnostic information
 *
 * authorization String Bearer followed by a base64 encoded OAuth access token (optional)
 * userAgent String Name and version of the of the client software (optional)
 * xCorAPITargetID String ID of the target, e.g., a financial institution. (SCOPE: SIX) (optional)
 * xCorAPIClientID String ID of the client forwarded to the provider. (SCOPE: FI) (optional)
 * xCorrelationID String Unique ID (defined by the caller) which will be reflected back in the response. (optional)
 * xPSUIPAddress String IP address of the user initiating the operation (optional)
 * xPSUUserAgent String User of the client software (optional)
 * returns healthCheckResponse
 **/
exports.healthCheckGet = function(authorization,userAgent,xCorAPITargetID,xCorAPIClientID,xCorrelationID,xPSUIPAddress,xPSUUserAgent) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "receivedHeaders" : [ {
    "headerName" : "X-Correlation-ID",
    "headerValue" : "headerValue"
  }, {
    "headerName" : "X-Correlation-ID",
    "headerValue" : "headerValue"
  } ],
  "receivedPayload" : "... as received ... ",
  "requestDateTime" : "2018-04-03T07:30:00+01:00"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns all specified request headers, the request body and additional diagnostic information
 *
 * body String 
 * authorization String Bearer followed by a base64 encoded OAuth access token (optional)
 * userAgent String Name and version of the of the client software (optional)
 * xCorAPITargetID String ID of the target, e.g., a financial institution. (SCOPE: SIX) (optional)
 * xCorAPIClientID String ID of the client forwarded to the provider. (SCOPE: FI) (optional)
 * xCorrelationID String Unique ID (defined by the caller) which will be reflected back in the response. (optional)
 * xPSUIPAddress String IP address of the user initiating the operation (optional)
 * xPSUUserAgent String User of the client software (optional)
 * returns healthCheckResponse
 **/
exports.healthCheckPost = function(body,authorization,userAgent,xCorAPITargetID,xCorAPIClientID,xCorrelationID,xPSUIPAddress,xPSUUserAgent) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "receivedHeaders" : [ {
    "headerName" : "X-Correlation-ID",
    "headerValue" : "headerValue"
  }, {
    "headerName" : "X-Correlation-ID",
    "headerValue" : "headerValue"
  } ],
  "receivedPayload" : "... as received ... ",
  "requestDateTime" : "2018-04-03T07:30:00+01:00"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

