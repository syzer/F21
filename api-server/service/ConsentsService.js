'use strict';


/**
 * Retrieve a list of consents
 * The consents endpoint allows the client (e.g., a third party provider) to query the consents for a given corporate user. The provider (e.g., a financial institution) must return the consents linked with the access token supplied with the request. 
 *
 * authorization String Bearer followed by a base64 encoded OAuth access token
 * xCorAPITargetID String ID that identifies the provider (e.g., a financial institution). (SCOPE: SIX)
 * xCorAPIClientID String ID of the client forwarded to the provider. (SCOPE: FI)
 * xCorrelationID String Unique ID (defined by the caller) which will be reflected back in the response.
 * userAgent String Name and version of the of the Client software
 * returns List
 **/
exports.retrieveConsents = function(authorization,xCorAPITargetID,xCorAPIClientID,xCorrelationID,userAgent) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "useCase" : "ais",
  "accounts" : [ {
    "allowedCurrencies" : [ "CHF", "CHF" ],
    "accountId" : "13579",
    "iban" : "CH123131231231231",
    "currency" : "CHF",
    "designation" : "Savings ABC"
  }, {
    "allowedCurrencies" : [ "CHF", "CHF" ],
    "accountId" : "13579",
    "iban" : "CH123131231231231",
    "currency" : "CHF",
    "designation" : "Savings ABC"
  } ]
}, {
  "useCase" : "ais",
  "accounts" : [ {
    "allowedCurrencies" : [ "CHF", "CHF" ],
    "accountId" : "13579",
    "iban" : "CH123131231231231",
    "currency" : "CHF",
    "designation" : "Savings ABC"
  }, {
    "allowedCurrencies" : [ "CHF", "CHF" ],
    "accountId" : "13579",
    "iban" : "CH123131231231231",
    "currency" : "CHF",
    "designation" : "Savings ABC"
  } ]
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

