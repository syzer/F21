# SwissCorporateApi.ConsentsApi

All URIs are relative to *https://tbd.six-group.com/api/bankingservices/corporate/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**retrieveConsents**](ConsentsApi.md#retrieveConsents) | **GET** /consents | Retrieve a list of consents


<a name="retrieveConsents"></a>
# **retrieveConsents**
> [ConsentItem] retrieveConsents(authorization, xCorAPITargetID, xCorAPIClientID, xCorrelationID, userAgent, )

Retrieve a list of consents

The consents endpoint allows the client (e.g., a third party provider) to query the consents for a given corporate user. The provider (e.g., a financial institution) must return the consents linked with the access token supplied with the request. 

### Example
```javascript
var SwissCorporateApi = require('swiss_corporate_api');

var apiInstance = new SwissCorporateApi.ConsentsApi();

var authorization = "authorization_example"; // String | Bearer followed by a base64 encoded OAuth access token

var xCorAPITargetID = "xCorAPITargetID_example"; // String | ID that identifies the provider (e.g., a financial institution). (SCOPE: SIX)

var xCorAPIClientID = "xCorAPIClientID_example"; // String | ID of the client forwarded to the provider. (SCOPE: FI)

var xCorrelationID = "xCorrelationID_example"; // String | Unique ID (defined by the caller) which will be reflected back in the response.

var userAgent = "userAgent_example"; // String | Name and version of the of the Client software


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.retrieveConsents(authorization, xCorAPITargetID, xCorAPIClientID, xCorrelationID, userAgent, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Bearer followed by a base64 encoded OAuth access token | 
 **xCorAPITargetID** | **String**| ID that identifies the provider (e.g., a financial institution). (SCOPE: SIX) | 
 **xCorAPIClientID** | **String**| ID of the client forwarded to the provider. (SCOPE: FI) | 
 **xCorrelationID** | **String**| Unique ID (defined by the caller) which will be reflected back in the response. | 
 **userAgent** | **String**| Name and version of the of the Client software | 

### Return type

[**[ConsentItem]**](ConsentItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

