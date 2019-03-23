# SwissCorporateApi.Iso20022Api

All URIs are relative to *https://tbd.six-group.com/api/bankingservices/corporate/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**retrieveIso20022AccountStatement**](Iso20022Api.md#retrieveIso20022AccountStatement) | **GET** /iso20022/statements/{reportId} | Retrieves the designated ISO20022 XML CAMT document.
[**retrieveIso20022AccountStatementIds**](Iso20022Api.md#retrieveIso20022AccountStatementIds) | **GET** /iso20022/statements | Retrieve a list of resource links to account statements (CAMT.053)
[**retrieveIso20022PaymentInstruction**](Iso20022Api.md#retrieveIso20022PaymentInstruction) | **GET** /iso20022/payments/{submissionId} | Retrieve the submitted ISO20022 XML PAIN.001 message.
[**retrieveIso20022PaymentInstructionStatusReport**](Iso20022Api.md#retrieveIso20022PaymentInstructionStatusReport) | **GET** /iso20022/payments/{submissionId}/status | Retrieve ISO20022 XML status report (PAIN.002) of a payment instruction
[**submitIso20022PaymentInstruction**](Iso20022Api.md#submitIso20022PaymentInstruction) | **POST** /iso20022/payments | Submit an ISO20022 XML payment instruction (PAIN.001)


<a name="retrieveIso20022AccountStatement"></a>
# **retrieveIso20022AccountStatement**
> File retrieveIso20022AccountStatement(authorization, reportId, xCorAPITargetID, xCorAPIClientID, xCorrelationID, userAgent, )

Retrieves the designated ISO20022 XML CAMT document.

### Example
```javascript
var SwissCorporateApi = require('swiss_corporate_api');

var apiInstance = new SwissCorporateApi.Iso20022Api();

var authorization = "authorization_example"; // String | Bearer followed by a base64 encoded OAuth access token

var reportId = "reportId_example"; // String | id of report

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
apiInstance.retrieveIso20022AccountStatement(authorization, reportId, xCorAPITargetID, xCorAPIClientID, xCorrelationID, userAgent, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Bearer followed by a base64 encoded OAuth access token | 
 **reportId** | **String**| id of report | 
 **xCorAPITargetID** | **String**| ID that identifies the provider (e.g., a financial institution). (SCOPE: SIX) | 
 **xCorAPIClientID** | **String**| ID of the client forwarded to the provider. (SCOPE: FI) | 
 **xCorrelationID** | **String**| Unique ID (defined by the caller) which will be reflected back in the response. | 
 **userAgent** | **String**| Name and version of the of the Client software | 

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml

<a name="retrieveIso20022AccountStatementIds"></a>
# **retrieveIso20022AccountStatementIds**
> [Iso20022ReportReference] retrieveIso20022AccountStatementIds(authorization, xCorAPITargetID, xCorAPIClientID, xCorrelationID, userAgent, )

Retrieve a list of resource links to account statements (CAMT.053)

Retrieve resources links to available account statements. The returned account statements must conform to the XML Schema and Implementation Guidelines defined by Swiss Payment Standards; see: https://www.six-interbank-clearing.com/en/home/standardization/iso-payments/customer-bank/implementation-guidelines.html 

### Example
```javascript
var SwissCorporateApi = require('swiss_corporate_api');

var apiInstance = new SwissCorporateApi.Iso20022Api();

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
apiInstance.retrieveIso20022AccountStatementIds(authorization, xCorAPITargetID, xCorAPIClientID, xCorrelationID, userAgent, , callback);
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

[**[Iso20022ReportReference]**](Iso20022ReportReference.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="retrieveIso20022PaymentInstruction"></a>
# **retrieveIso20022PaymentInstruction**
> File retrieveIso20022PaymentInstruction(authorization, submissionId, xCorAPITargetID, xCorAPIClientID, xCorrelationID, userAgent, )

Retrieve the submitted ISO20022 XML PAIN.001 message.

### Example
```javascript
var SwissCorporateApi = require('swiss_corporate_api');

var apiInstance = new SwissCorporateApi.Iso20022Api();

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
apiInstance.retrieveIso20022PaymentInstruction(authorization, submissionId, xCorAPITargetID, xCorAPIClientID, xCorrelationID, userAgent, , callback);
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

**File**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml

<a name="retrieveIso20022PaymentInstructionStatusReport"></a>
# **retrieveIso20022PaymentInstructionStatusReport**
> File retrieveIso20022PaymentInstructionStatusReport(authorization, submissionId, xCorAPITargetID, xCorAPIClientID, xCorrelationID, userAgent, )

Retrieve ISO20022 XML status report (PAIN.002) of a payment instruction

Retrieve the XML ISO20022 pain.002 status report. The returned status report must conform to the XML Schema and Implementation Guidelines defined by Swiss Payment Standards; see: https://www.six-interbank-clearing.com/en/home/standardization/iso-payments/customer-bank/implementation-guidelines.html 

### Example
```javascript
var SwissCorporateApi = require('swiss_corporate_api');

var apiInstance = new SwissCorporateApi.Iso20022Api();

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
apiInstance.retrieveIso20022PaymentInstructionStatusReport(authorization, submissionId, xCorAPITargetID, xCorAPIClientID, xCorrelationID, userAgent, , callback);
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

**File**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml

<a name="submitIso20022PaymentInstruction"></a>
# **submitIso20022PaymentInstruction**
> submitIso20022PaymentInstruction(authorization, xCorAPITargetID, xCorAPIClientID, xCorrelationID, userAgent, xPSUIPAddress, xPSUUserAgentbody)

Submit an ISO20022 XML payment instruction (PAIN.001)

Submit an ISO20022 XML PAIN.001 payment instruction. The submitted payment instruction must conform to the XML Schema and Implementation Guidelines defined by Swiss Payment Standards; see: https://www.six-interbank-clearing.com/en/home/standardization/iso-payments/customer-bank/implementation-guidelines.html 

### Example
```javascript
var SwissCorporateApi = require('swiss_corporate_api');

var apiInstance = new SwissCorporateApi.Iso20022Api();

var authorization = "authorization_example"; // String | Bearer followed by a base64 encoded OAuth access token

var xCorAPITargetID = "xCorAPITargetID_example"; // String | ID that identifies the provider (e.g., a financial institution). (SCOPE: SIX)

var xCorAPIClientID = "xCorAPIClientID_example"; // String | ID of the client forwarded to the provider. (SCOPE: FI)

var xCorrelationID = "xCorrelationID_example"; // String | Unique ID (defined by the caller) which will be reflected back in the response.

var userAgent = "userAgent_example"; // String | Name and version of the of the Client software

var xPSUIPAddress = "xPSUIPAddress_example"; // String | IP address of the user initiating the operation

var xPSUUserAgent = "xPSUUserAgent_example"; // String | User agent of the user initiating the operation

var body = "body_example"; // String | Payment instruction details as defined by data model. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.submitIso20022PaymentInstruction(authorization, xCorAPITargetID, xCorAPIClientID, xCorrelationID, userAgent, xPSUIPAddress, xPSUUserAgentbody, callback);
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
 **body** | **String**| Payment instruction details as defined by data model.  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml
 - **Accept**: Not defined

