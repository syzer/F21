'use strict';


/**
 * Get the OAuth access and refresh token
 * Returns the OAuth access and refresh token for the specified client and target 
 *
 * grant_type String either authorization_code or refresh_token
 * client_id String client id
 * xCorAPITargetID String ID that identifies the provider (e.g., a financial institution). (SCOPE: SIX)
 * xCorAPIClientID String ID of the client forwarded to the provider. (SCOPE: FI)
 * xCorrelationID String Unique ID (defined by the caller) which will be reflected back in the response.
 * userAgent String Name and version of the of the Client software
 * xPSUIPAddress String IP address of the user initiating the operation
 * xPSUUserAgent String User agent of the user initiating the operation
 * code String authorization code if applicable (optional)
 * refresh_token String refresh token if applicable (optional)
 * redirect_uri String original redirect uri if applicable (optional)
 * returns oauthTokenResponse
 **/
exports.oauthToken = function(grant_type,client_id,xCorAPITargetID,xCorAPIClientID,xCorrelationID,userAgent,xPSUIPAddress,xPSUUserAgent,code,refresh_token,redirect_uri) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "access_token" : "access_token",
  "refresh_token" : "refresh_token",
  "token_type" : "bearer",
  "expires_in" : 1
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

