'use strict';


/**
 * Retrieves the designated ISO20022 XML CAMT document.
 *
 * authorization String Bearer followed by a base64 encoded OAuth access token
 * reportId String id of report
 * xCorAPITargetID String ID that identifies the provider (e.g., a financial institution). (SCOPE: SIX)
 * xCorAPIClientID String ID of the client forwarded to the provider. (SCOPE: FI)
 * xCorrelationID String Unique ID (defined by the caller) which will be reflected back in the response.
 * userAgent String Name and version of the of the Client software
 * returns File
 **/
exports.retrieveIso20022AccountStatement = function(authorization,reportId,xCorAPITargetID,xCorAPIClientID,xCorrelationID,userAgent) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve a list of resource links to account statements (CAMT.053)
 * Retrieve resources links to available account statements. The returned account statements must conform to the XML Schema and Implementation Guidelines defined by Swiss Payment Standards; see: https://www.six-interbank-clearing.com/en/home/standardization/iso-payments/customer-bank/implementation-guidelines.html 
 *
 * authorization String Bearer followed by a base64 encoded OAuth access token
 * xCorAPITargetID String ID that identifies the provider (e.g., a financial institution). (SCOPE: SIX)
 * xCorAPIClientID String ID of the client forwarded to the provider. (SCOPE: FI)
 * xCorrelationID String Unique ID (defined by the caller) which will be reflected back in the response.
 * userAgent String Name and version of the of the Client software
 * returns List
 **/
exports.retrieveIso20022AccountStatementIds = function(authorization,xCorAPITargetID,xCorAPIClientID,xCorrelationID,userAgent) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "name" : "name",
  "description" : "description",
  "id" : "id",
  "type" : "CAMT53"
}, {
  "name" : "name",
  "description" : "description",
  "id" : "id",
  "type" : "CAMT53"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve the submitted ISO20022 XML PAIN.001 message.
 *
 * authorization String Bearer followed by a base64 encoded OAuth access token
 * submissionId String id of payment submission
 * xCorAPITargetID String ID that identifies the provider (e.g., a financial institution). (SCOPE: SIX)
 * xCorAPIClientID String ID of the client forwarded to the provider. (SCOPE: FI)
 * xCorrelationID String Unique ID (defined by the caller) which will be reflected back in the response.
 * userAgent String Name and version of the of the Client software
 * returns File
 **/
exports.retrieveIso20022PaymentInstruction = function(authorization,submissionId,xCorAPITargetID,xCorAPIClientID,xCorrelationID,userAgent) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve ISO20022 XML status report (PAIN.002) of a payment instruction
 * Retrieve the XML ISO20022 pain.002 status report. The returned status report must conform to the XML Schema and Implementation Guidelines defined by Swiss Payment Standards; see: https://www.six-interbank-clearing.com/en/home/standardization/iso-payments/customer-bank/implementation-guidelines.html 
 *
 * authorization String Bearer followed by a base64 encoded OAuth access token
 * submissionId String id of payment submission
 * xCorAPITargetID String ID that identifies the provider (e.g., a financial institution). (SCOPE: SIX)
 * xCorAPIClientID String ID of the client forwarded to the provider. (SCOPE: FI)
 * xCorrelationID String Unique ID (defined by the caller) which will be reflected back in the response.
 * userAgent String Name and version of the of the Client software
 * returns File
 **/
exports.retrieveIso20022PaymentInstructionStatusReport = function(authorization,submissionId,xCorAPITargetID,xCorAPIClientID,xCorrelationID,userAgent) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Submit an ISO20022 XML payment instruction (PAIN.001)
 * Submit an ISO20022 XML PAIN.001 payment instruction. The submitted payment instruction must conform to the XML Schema and Implementation Guidelines defined by Swiss Payment Standards; see: https://www.six-interbank-clearing.com/en/home/standardization/iso-payments/customer-bank/implementation-guidelines.html 
 *
 * authorization String Bearer followed by a base64 encoded OAuth access token
 * xCorAPITargetID String ID that identifies the provider (e.g., a financial institution). (SCOPE: SIX)
 * xCorAPIClientID String ID of the client forwarded to the provider. (SCOPE: FI)
 * xCorrelationID String Unique ID (defined by the caller) which will be reflected back in the response.
 * userAgent String Name and version of the of the Client software
 * xPSUIPAddress String IP address of the user initiating the operation
 * xPSUUserAgent String User agent of the user initiating the operation
 * body String Payment instruction details as defined by data model. 
 * no response value expected for this operation
 **/
exports.submitIso20022PaymentInstruction = function(authorization,xCorAPITargetID,xCorAPIClientID,xCorrelationID,userAgent,xPSUIPAddress,xPSUUserAgent,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

