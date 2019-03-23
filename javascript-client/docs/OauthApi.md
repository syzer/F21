# SwissCorporateApi.OauthApi

All URIs are relative to *https://tbd.six-group.com/api/bankingservices/corporate/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**oauthToken**](OauthApi.md#oauthToken) | **POST** /oauth/token | Get the OAuth access and refresh token


<a name="oauthToken"></a>
# **oauthToken**
> OauthTokenResponse oauthToken(grantType, clientId, xCorAPITargetID, xCorAPIClientID, xCorrelationID, userAgent, xPSUIPAddress, xPSUUserAgent, opts)

Get the OAuth access and refresh token

Returns the OAuth access and refresh token for the specified client and target 

### Example
```javascript
var SwissCorporateApi = require('swiss_corporate_api');

var apiInstance = new SwissCorporateApi.OauthApi();

var grantType = "grantType_example"; // String | either authorization_code or refresh_token

var clientId = "clientId_example"; // String | client id

var xCorAPITargetID = "xCorAPITargetID_example"; // String | ID that identifies the provider (e.g., a financial institution). (SCOPE: SIX)

var xCorAPIClientID = "xCorAPIClientID_example"; // String | ID of the client forwarded to the provider. (SCOPE: FI)

var xCorrelationID = "xCorrelationID_example"; // String | Unique ID (defined by the caller) which will be reflected back in the response.

var userAgent = "userAgent_example"; // String | Name and version of the of the Client software

var xPSUIPAddress = "xPSUIPAddress_example"; // String | IP address of the user initiating the operation

var xPSUUserAgent = "xPSUUserAgent_example"; // String | User agent of the user initiating the operation

var opts = { 
  'code': "code_example", // String | authorization code if applicable
  'refreshToken': "refreshToken_example", // String | refresh token if applicable
  'redirectUri': "redirectUri_example" // String | original redirect uri if applicable
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.oauthToken(grantType, clientId, xCorAPITargetID, xCorAPIClientID, xCorrelationID, userAgent, xPSUIPAddress, xPSUUserAgent, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **grantType** | **String**| either authorization_code or refresh_token | 
 **clientId** | **String**| client id | 
 **xCorAPITargetID** | **String**| ID that identifies the provider (e.g., a financial institution). (SCOPE: SIX) | 
 **xCorAPIClientID** | **String**| ID of the client forwarded to the provider. (SCOPE: FI) | 
 **xCorrelationID** | **String**| Unique ID (defined by the caller) which will be reflected back in the response. | 
 **userAgent** | **String**| Name and version of the of the Client software | 
 **xPSUIPAddress** | **String**| IP address of the user initiating the operation | 
 **xPSUUserAgent** | **String**| User agent of the user initiating the operation | 
 **code** | **String**| authorization code if applicable | [optional] 
 **refreshToken** | **String**| refresh token if applicable | [optional] 
 **redirectUri** | **String**| original redirect uri if applicable | [optional] 

### Return type

[**OauthTokenResponse**](OauthTokenResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

