'use strict';


/**
 * Retrieve the information for a registered client (e.g. third party provider)
 * Returns information regarding software and supported use cases of a client. (SCOPE: SIX) 
 *
 * clientId String id of the client
 * xCorrelationID String Unique ID (defined by the caller) which will be reflected back in the response.
 * userAgent String Name and version of the of the Client software
 * returns directoryClientItem
 **/
exports.retrieveClientDetail = function(clientId,xCorrelationID,userAgent) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve a list of all registered clients (e.g., third party providers)
 * Returns a list of clients with information regarding software and supported use cases. (SCOPE: SIX) 
 *
 * xCorrelationID String Unique ID (defined by the caller) which will be reflected back in the response.
 * userAgent String Name and version of the of the Client software
 * status String status=ACTIVE returns only active clients (optional)
 * returns List
 **/
exports.retrieveClients = function(xCorrelationID,userAgent,status) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ "", "" ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve the informatoin for a registered provider (e.g., financial institutions)
 * Returns information regarding software and supported use cases of a provider. (SCOPE: SIX) 
 *
 * providerId String id of the provider
 * xCorrelationID String Unique ID (defined by the caller) which will be reflected back in the response.
 * userAgent String Name and version of the of the Client software
 * returns directoryProviderItem
 **/
exports.retrieveProviderDetail = function(providerId,xCorrelationID,userAgent) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve a list of all registered providers (e.g., financial institutions)
 * Returns a list of providers with information regarding software and supported use cases. (SCOPE: SIX) 
 *
 * xCorrelationID String Unique ID (defined by the caller) which will be reflected back in the response.
 * userAgent String Name and version of the of the Client software
 * status String status=ACTIVE returns only active clients (optional)
 * returns List
 **/
exports.retrieveProviders = function(xCorrelationID,userAgent,status) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ "", "" ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

