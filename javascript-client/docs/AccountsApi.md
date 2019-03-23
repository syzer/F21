# SwissCorporateApi.AccountsApi

All URIs are relative to *https://tbd.six-group.com/api/bankingservices/corporate/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**requestAccountBalance**](AccountsApi.md#requestAccountBalance) | **GET** /accounts/{accountId}/balance | Retrieve account balance information
[**requestAccountDetails**](AccountsApi.md#requestAccountDetails) | **GET** /accounts/{accountId} | Retrieve information about a single specific account
[**requestAccountList**](AccountsApi.md#requestAccountList) | **GET** /accounts | Retrieve list of authorized accounts
[**requestAccountTransactions**](AccountsApi.md#requestAccountTransactions) | **GET** /accounts/{accountId}/transactions | Retrieve transactions of a specific account


<a name="requestAccountBalance"></a>
# **requestAccountBalance**
> AccountBalanceItem requestAccountBalance(authorization, accountId, xCorAPITargetID, xCorAPIClientID, xCorrelationID, userAgent, , opts)

Retrieve account balance information

Retrieve account balance information. * Returns the intraday booked balance (ITBD), if called without a date. * Returns the intraday booked balance (ITBD), if called for the current date. * Returns the closing booked balance (CLBD), if called for a past date.

### Example
```javascript
var SwissCorporateApi = require('swiss_corporate_api');

var apiInstance = new SwissCorporateApi.AccountsApi();

var authorization = "authorization_example"; // String | Bearer followed by a base64 encoded OAuth access token

var accountId = "accountId_example"; // String | id of account

var xCorAPITargetID = "xCorAPITargetID_example"; // String | ID that identifies the provider (e.g., a financial institution). (SCOPE: SIX)

var xCorAPIClientID = "xCorAPIClientID_example"; // String | ID of the client forwarded to the provider. (SCOPE: FI)

var xCorrelationID = "xCorrelationID_example"; // String | Unique ID (defined by the caller) which will be reflected back in the response.

var userAgent = "userAgent_example"; // String | Name and version of the of the Client software

var opts = { 
  '_date': new Date("the current date") // Date | The date to query, formatted as yyyy-mm-dd.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.requestAccountBalance(authorization, accountId, xCorAPITargetID, xCorAPIClientID, xCorrelationID, userAgent, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Bearer followed by a base64 encoded OAuth access token | 
 **accountId** | **String**| id of account | 
 **xCorAPITargetID** | **String**| ID that identifies the provider (e.g., a financial institution). (SCOPE: SIX) | 
 **xCorAPIClientID** | **String**| ID of the client forwarded to the provider. (SCOPE: FI) | 
 **xCorrelationID** | **String**| Unique ID (defined by the caller) which will be reflected back in the response. | 
 **userAgent** | **String**| Name and version of the of the Client software | 
 **_date** | **Date**| The date to query, formatted as yyyy-mm-dd. | [optional] [default to the current date]

### Return type

[**AccountBalanceItem**](AccountBalanceItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="requestAccountDetails"></a>
# **requestAccountDetails**
> AccountItem requestAccountDetails(authorization, accountId, xCorAPITargetID, xCorAPIClientID, xCorrelationID, userAgent, )

Retrieve information about a single specific account

### Example
```javascript
var SwissCorporateApi = require('swiss_corporate_api');

var apiInstance = new SwissCorporateApi.AccountsApi();

var authorization = "authorization_example"; // String | Bearer followed by a base64 encoded OAuth access token

var accountId = "accountId_example"; // String | id of account

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
apiInstance.requestAccountDetails(authorization, accountId, xCorAPITargetID, xCorAPIClientID, xCorrelationID, userAgent, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Bearer followed by a base64 encoded OAuth access token | 
 **accountId** | **String**| id of account | 
 **xCorAPITargetID** | **String**| ID that identifies the provider (e.g., a financial institution). (SCOPE: SIX) | 
 **xCorAPIClientID** | **String**| ID of the client forwarded to the provider. (SCOPE: FI) | 
 **xCorrelationID** | **String**| Unique ID (defined by the caller) which will be reflected back in the response. | 
 **userAgent** | **String**| Name and version of the of the Client software | 

### Return type

[**AccountItem**](AccountItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="requestAccountList"></a>
# **requestAccountList**
> [AccountItem] requestAccountList(authorization, xCorAPITargetID, xCorAPIClientID, xCorrelationID, userAgent, )

Retrieve list of authorized accounts

### Example
```javascript
var SwissCorporateApi = require('swiss_corporate_api');

var apiInstance = new SwissCorporateApi.AccountsApi();

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
apiInstance.requestAccountList(authorization, xCorAPITargetID, xCorAPIClientID, xCorrelationID, userAgent, , callback);
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

[**[AccountItem]**](AccountItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="requestAccountTransactions"></a>
# **requestAccountTransactions**
> AccountTransactionReport requestAccountTransactions(authorization, accountId, xCorAPITargetID, xCorAPIClientID, xCorrelationID, userAgent, , opts)

Retrieve transactions of a specific account

* Returns the transaction list of the current day, if called without a date. * Returns the transaction list for a specific day, if called for a past date. In case the specified day has not yet been finalized, the response will be a 404 error. 

### Example
```javascript
var SwissCorporateApi = require('swiss_corporate_api');

var apiInstance = new SwissCorporateApi.AccountsApi();

var authorization = "authorization_example"; // String | Bearer followed by a base64 encoded OAuth access token

var accountId = "accountId_example"; // String | id of account

var xCorAPITargetID = "xCorAPITargetID_example"; // String | ID that identifies the provider (e.g., a financial institution). (SCOPE: SIX)

var xCorAPIClientID = "xCorAPIClientID_example"; // String | ID of the client forwarded to the provider. (SCOPE: FI)

var xCorrelationID = "xCorrelationID_example"; // String | Unique ID (defined by the caller) which will be reflected back in the response.

var userAgent = "userAgent_example"; // String | Name and version of the of the Client software

var opts = { 
  '_date': new Date("the current date") // Date | The date to query, formatted as yyyy-mm-dd.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.requestAccountTransactions(authorization, accountId, xCorAPITargetID, xCorAPIClientID, xCorrelationID, userAgent, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| Bearer followed by a base64 encoded OAuth access token | 
 **accountId** | **String**| id of account | 
 **xCorAPITargetID** | **String**| ID that identifies the provider (e.g., a financial institution). (SCOPE: SIX) | 
 **xCorAPIClientID** | **String**| ID of the client forwarded to the provider. (SCOPE: FI) | 
 **xCorrelationID** | **String**| Unique ID (defined by the caller) which will be reflected back in the response. | 
 **userAgent** | **String**| Name and version of the of the Client software | 
 **_date** | **Date**| The date to query, formatted as yyyy-mm-dd. | [optional] [default to the current date]

### Return type

[**AccountTransactionReport**](AccountTransactionReport.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

