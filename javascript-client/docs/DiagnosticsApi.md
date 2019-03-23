# SwissCorporateApi.DiagnosticsApi

All URIs are relative to *https://tbd.six-group.com/api/bankingservices/corporate/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**healthCheckGet**](DiagnosticsApi.md#healthCheckGet) | **GET** /healthcheck | Returns all specified request headers and additional diagnostic information
[**healthCheckPost**](DiagnosticsApi.md#healthCheckPost) | **POST** /healthcheck | Returns all specified request headers, the request body and additional diagnostic information


<a name="healthCheckGet"></a>
# **healthCheckGet**
> HealthCheckResponse healthCheckGet(opts)

Returns all specified request headers and additional diagnostic information

### Example
```javascript
var SwissCorporateApi = require('swiss_corporate_api');

var apiInstance = new SwissCorporateApi.DiagnosticsApi();

var opts = { 
  'authorization': "authorization_example", // String | Bearer followed by a base64 encoded OAuth access token
  'userAgent': "userAgent_example", // String | Name and version of the of the client software
  'xCorAPITargetID': "xCorAPITargetID_example", // String | ID of the target, e.g., a financial institution. (SCOPE: SIX)
  'xCorAPIClientID': "xCorAPIClientID_example", // String | ID of the client forwarded to the provider. (SCOPE: FI)
  'xCorrelationID': "xCorrelationID_example", // String | Unique ID (defined by the caller) which will be reflected back in the response.
  'xPSUIPAddress': "xPSUIPAddress_example", // String | IP address of the user initiating the operation
  'xPSUUserAgent': "xPSUUserAgent_example" // String | User of the client software
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.healthCheckGet(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Bearer followed by a base64 encoded OAuth access token | [optional] 
 **userAgent** | **String**| Name and version of the of the client software | [optional] 
 **xCorAPITargetID** | **String**| ID of the target, e.g., a financial institution. (SCOPE: SIX) | [optional] 
 **xCorAPIClientID** | **String**| ID of the client forwarded to the provider. (SCOPE: FI) | [optional] 
 **xCorrelationID** | **String**| Unique ID (defined by the caller) which will be reflected back in the response. | [optional] 
 **xPSUIPAddress** | **String**| IP address of the user initiating the operation | [optional] 
 **xPSUUserAgent** | **String**| User of the client software | [optional] 

### Return type

[**HealthCheckResponse**](HealthCheckResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="healthCheckPost"></a>
# **healthCheckPost**
> HealthCheckResponse healthCheckPost(body, opts)

Returns all specified request headers, the request body and additional diagnostic information

### Example
```javascript
var SwissCorporateApi = require('swiss_corporate_api');

var apiInstance = new SwissCorporateApi.DiagnosticsApi();

var body = "body_example"; // String | 

var opts = { 
  'authorization': "authorization_example", // String | Bearer followed by a base64 encoded OAuth access token
  'userAgent': "userAgent_example", // String | Name and version of the of the client software
  'xCorAPITargetID': "xCorAPITargetID_example", // String | ID of the target, e.g., a financial institution. (SCOPE: SIX)
  'xCorAPIClientID': "xCorAPIClientID_example", // String | ID of the client forwarded to the provider. (SCOPE: FI)
  'xCorrelationID': "xCorrelationID_example", // String | Unique ID (defined by the caller) which will be reflected back in the response.
  'xPSUIPAddress': "xPSUIPAddress_example", // String | IP address of the user initiating the operation
  'xPSUUserAgent': "xPSUUserAgent_example" // String | User of the client software
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.healthCheckPost(body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **String**|  | 
 **authorization** | **String**| Bearer followed by a base64 encoded OAuth access token | [optional] 
 **userAgent** | **String**| Name and version of the of the client software | [optional] 
 **xCorAPITargetID** | **String**| ID of the target, e.g., a financial institution. (SCOPE: SIX) | [optional] 
 **xCorAPIClientID** | **String**| ID of the client forwarded to the provider. (SCOPE: FI) | [optional] 
 **xCorrelationID** | **String**| Unique ID (defined by the caller) which will be reflected back in the response. | [optional] 
 **xPSUIPAddress** | **String**| IP address of the user initiating the operation | [optional] 
 **xPSUUserAgent** | **String**| User of the client software | [optional] 

### Return type

[**HealthCheckResponse**](HealthCheckResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

