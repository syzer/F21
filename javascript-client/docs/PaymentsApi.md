# SwissCorporateApi.PaymentsApi

All URIs are relative to *https://tbd.six-group.com/api/bankingservices/corporate/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**retrievePaymentSubmission**](PaymentsApi.md#retrievePaymentSubmission) | **GET** /payments/{submissionId} | Retrieve a payment submission
[**retrievePaymentSubmissionStatus**](PaymentsApi.md#retrievePaymentSubmissionStatus) | **GET** /payments/{submissionId}/status | Retrieve payment submission status information
[**submitPaymentInstructions**](PaymentsApi.md#submitPaymentInstructions) | **POST** /payments | Submit payment instructions


<a name="retrievePaymentSubmission"></a>
# **retrievePaymentSubmission**
> PaymentSubmissionRequest retrievePaymentSubmission(authorization, submissionId, xCorAPITargetID, xCorAPIClientID, xCorrelationID, userAgent, )

Retrieve a payment submission

### Example
```javascript
var SwissCorporateApi = require('swiss_corporate_api');

var apiInstance = new SwissCorporateApi.PaymentsApi();

var authorization = "authorization_example"; // String | Bearer followed by a base64 encoded OAuth access token

var submissionId = "submissionId_example"; // String | id of payment submission

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
apiInstance.retrievePaymentSubmission(authorization, submissionId, xCorAPITargetID, xCorAPIClientID, xCorrelationID, userAgent, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Bearer followed by a base64 encoded OAuth access token | 
 **submissionId** | **String**| id of payment submission | 
 **xCorAPITargetID** | **String**| ID that identifies the provider (e.g., a financial institution). (SCOPE: SIX) | 
 **xCorAPIClientID** | **String**| ID of the client forwarded to the provider. (SCOPE: FI) | 
 **xCorrelationID** | **String**| Unique ID (defined by the caller) which will be reflected back in the response. | 
 **userAgent** | **String**| Name and version of the of the Client software | 

### Return type

[**PaymentSubmissionRequest**](PaymentSubmissionRequest.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="retrievePaymentSubmissionStatus"></a>
# **retrievePaymentSubmissionStatus**
> PaymentSubmissionStatus retrievePaymentSubmissionStatus(authorization, submissionId, xCorAPITargetID, xCorAPIClientID, xCorrelationID, userAgent, )

Retrieve payment submission status information

### Example
```javascript
var SwissCorporateApi = require('swiss_corporate_api');

var apiInstance = new SwissCorporateApi.PaymentsApi();

var authorization = "authorization_example"; // String | Bearer followed by a base64 encoded OAuth access token

var submissionId = "submissionId_example"; // String | id of payment submission

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
apiInstance.retrievePaymentSubmissionStatus(authorization, submissionId, xCorAPITargetID, xCorAPIClientID, xCorrelationID, userAgent, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Bearer followed by a base64 encoded OAuth access token | 
 **submissionId** | **String**| id of payment submission | 
 **xCorAPITargetID** | **String**| ID that identifies the provider (e.g., a financial institution). (SCOPE: SIX) | 
 **xCorAPIClientID** | **String**| ID of the client forwarded to the provider. (SCOPE: FI) | 
 **xCorrelationID** | **String**| Unique ID (defined by the caller) which will be reflected back in the response. | 
 **userAgent** | **String**| Name and version of the of the Client software | 

### Return type

[**PaymentSubmissionStatus**](PaymentSubmissionStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="submitPaymentInstructions"></a>
# **submitPaymentInstructions**
> submitPaymentInstructions(authorization, xCorAPITargetID, xCorAPIClientID, xCorrelationID, userAgent, xPSUIPAddress, xPSUUserAgentbody)

Submit payment instructions

### Example
```javascript
var SwissCorporateApi = require('swiss_corporate_api');

var apiInstance = new SwissCorporateApi.PaymentsApi();

var authorization = "authorization_example"; // String | Bearer followed by a base64 encoded OAuth access token

var xCorAPITargetID = "xCorAPITargetID_example"; // String | ID that identifies the provider (e.g., a financial institution). (SCOPE: SIX)

var xCorAPIClientID = "xCorAPIClientID_example"; // String | ID of the client forwarded to the provider. (SCOPE: FI)

var xCorrelationID = "xCorrelationID_example"; // String | Unique ID (defined by the caller) which will be reflected back in the response.

var userAgent = "userAgent_example"; // String | Name and version of the of the Client software

var xPSUIPAddress = "xPSUIPAddress_example"; // String | IP address of the user initiating the operation

var xPSUUserAgent = "xPSUUserAgent_example"; // String | User agent of the user initiating the operation

var body = new SwissCorporateApi.PaymentSubmissionRequest(); // PaymentSubmissionRequest | Payment instruction details as defined by data model. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.submitPaymentInstructions(authorization, xCorAPITargetID, xCorAPIClientID, xCorrelationID, userAgent, xPSUIPAddress, xPSUUserAgentbody, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Bearer followed by a base64 encoded OAuth access token | 
 **xCorAPITargetID** | **String**| ID that identifies the provider (e.g., a financial institution). (SCOPE: SIX) | 
 **xCorAPIClientID** | **String**| ID of the client forwarded to the provider. (SCOPE: FI) | 
 **xCorrelationID** | **String**| Unique ID (defined by the caller) which will be reflected back in the response. | 
 **userAgent** | **String**| Name and version of the of the Client software | 
 **xPSUIPAddress** | **String**| IP address of the user initiating the operation | 
 **xPSUUserAgent** | **String**| User agent of the user initiating the operation | 
 **body** | [**PaymentSubmissionRequest**](PaymentSubmissionRequest.md)| Payment instruction details as defined by data model.  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

