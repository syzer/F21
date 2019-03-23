# SwissCorporateApi.DirectoryApi

All URIs are relative to *https://tbd.six-group.com/api/bankingservices/corporate/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**retrieveClientDetail**](DirectoryApi.md#retrieveClientDetail) | **GET** /directory/clients/{clientId} | Retrieve the information for a registered client (e.g. third party provider)
[**retrieveClients**](DirectoryApi.md#retrieveClients) | **GET** /directory/clients | Retrieve a list of all registered clients (e.g., third party providers)
[**retrieveProviderDetail**](DirectoryApi.md#retrieveProviderDetail) | **GET** /directory/providers/{providerId} | Retrieve the informatoin for a registered provider (e.g., financial institutions)
[**retrieveProviders**](DirectoryApi.md#retrieveProviders) | **GET** /directory/providers | Retrieve a list of all registered providers (e.g., financial institutions)


<a name="retrieveClientDetail"></a>
# **retrieveClientDetail**
> DirectoryClientItem retrieveClientDetail(clientId, xCorrelationID, userAgent, )

Retrieve the information for a registered client (e.g. third party provider)

Returns information regarding software and supported use cases of a client. (SCOPE: SIX) 

### Example
```javascript
var SwissCorporateApi = require('swiss_corporate_api');

var apiInstance = new SwissCorporateApi.DirectoryApi();

var clientId = "clientId_example"; // String | id of the client

var xCorrelationID = "xCorrelationID_example"; // String | Unique ID (defined by the caller) which will be reflected back in the response.

var userAgent = "userAgent_example"; // String | Name and version of the of the Client software


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.retrieveClientDetail(clientId, xCorrelationID, userAgent, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **clientId** | **String**| id of the client | 
 **xCorrelationID** | **String**| Unique ID (defined by the caller) which will be reflected back in the response. | 
 **userAgent** | **String**| Name and version of the of the Client software | 

### Return type

[**DirectoryClientItem**](DirectoryClientItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="retrieveClients"></a>
# **retrieveClients**
> [DirectoryClientItem] retrieveClients(xCorrelationID, userAgent, , opts)

Retrieve a list of all registered clients (e.g., third party providers)

Returns a list of clients with information regarding software and supported use cases. (SCOPE: SIX) 

### Example
```javascript
var SwissCorporateApi = require('swiss_corporate_api');

var apiInstance = new SwissCorporateApi.DirectoryApi();

var xCorrelationID = "xCorrelationID_example"; // String | Unique ID (defined by the caller) which will be reflected back in the response.

var userAgent = "userAgent_example"; // String | Name and version of the of the Client software

var opts = { 
  'status': "ACTIVE" // String | status=ACTIVE returns only active clients
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.retrieveClients(xCorrelationID, userAgent, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xCorrelationID** | **String**| Unique ID (defined by the caller) which will be reflected back in the response. | 
 **userAgent** | **String**| Name and version of the of the Client software | 
 **status** | **String**| status&#x3D;ACTIVE returns only active clients | [optional] [default to ACTIVE]

### Return type

[**[DirectoryClientItem]**](DirectoryClientItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="retrieveProviderDetail"></a>
# **retrieveProviderDetail**
> DirectoryProviderItem retrieveProviderDetail(providerId, xCorrelationID, userAgent, )

Retrieve the informatoin for a registered provider (e.g., financial institutions)

Returns information regarding software and supported use cases of a provider. (SCOPE: SIX) 

### Example
```javascript
var SwissCorporateApi = require('swiss_corporate_api');

var apiInstance = new SwissCorporateApi.DirectoryApi();

var providerId = "providerId_example"; // String | id of the provider

var xCorrelationID = "xCorrelationID_example"; // String | Unique ID (defined by the caller) which will be reflected back in the response.

var userAgent = "userAgent_example"; // String | Name and version of the of the Client software


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.retrieveProviderDetail(providerId, xCorrelationID, userAgent, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **providerId** | **String**| id of the provider | 
 **xCorrelationID** | **String**| Unique ID (defined by the caller) which will be reflected back in the response. | 
 **userAgent** | **String**| Name and version of the of the Client software | 

### Return type

[**DirectoryProviderItem**](DirectoryProviderItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="retrieveProviders"></a>
# **retrieveProviders**
> [DirectoryProviderItem] retrieveProviders(xCorrelationID, userAgent, , opts)

Retrieve a list of all registered providers (e.g., financial institutions)

Returns a list of providers with information regarding software and supported use cases. (SCOPE: SIX) 

### Example
```javascript
var SwissCorporateApi = require('swiss_corporate_api');

var apiInstance = new SwissCorporateApi.DirectoryApi();

var xCorrelationID = "xCorrelationID_example"; // String | Unique ID (defined by the caller) which will be reflected back in the response.

var userAgent = "userAgent_example"; // String | Name and version of the of the Client software

var opts = { 
  'status': "ACTIVE" // String | status=ACTIVE returns only active clients
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.retrieveProviders(xCorrelationID, userAgent, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xCorrelationID** | **String**| Unique ID (defined by the caller) which will be reflected back in the response. | 
 **userAgent** | **String**| Name and version of the of the Client software | 
 **status** | **String**| status&#x3D;ACTIVE returns only active clients | [optional] [default to ACTIVE]

### Return type

[**[DirectoryProviderItem]**](DirectoryProviderItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

