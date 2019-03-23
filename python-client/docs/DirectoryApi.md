# swagger_client.DirectoryApi

All URIs are relative to *https://tbd.six-group.com/api/bankingservices/corporate/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**retrieve_client_detail**](DirectoryApi.md#retrieve_client_detail) | **GET** /directory/clients/{clientId} | Retrieve the information for a registered client (e.g. third party provider)
[**retrieve_clients**](DirectoryApi.md#retrieve_clients) | **GET** /directory/clients | Retrieve a list of all registered clients (e.g., third party providers)
[**retrieve_provider_detail**](DirectoryApi.md#retrieve_provider_detail) | **GET** /directory/providers/{providerId} | Retrieve the informatoin for a registered provider (e.g., financial institutions)
[**retrieve_providers**](DirectoryApi.md#retrieve_providers) | **GET** /directory/providers | Retrieve a list of all registered providers (e.g., financial institutions)


# **retrieve_client_detail**
> DirectoryClientItem retrieve_client_detail(client_id, x_correlation_id, user_agent)

Retrieve the information for a registered client (e.g. third party provider)

Returns information regarding software and supported use cases of a client. (SCOPE: SIX) 

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DirectoryApi()
client_id = 'client_id_example' # str | id of the client
x_correlation_id = 'x_correlation_id_example' # str | Unique ID (defined by the caller) which will be reflected back in the response.
user_agent = 'user_agent_example' # str | Name and version of the of the Client software

try:
    # Retrieve the information for a registered client (e.g. third party provider)
    api_response = api_instance.retrieve_client_detail(client_id, x_correlation_id, user_agent)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DirectoryApi->retrieve_client_detail: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_id** | **str**| id of the client | 
 **x_correlation_id** | **str**| Unique ID (defined by the caller) which will be reflected back in the response. | 
 **user_agent** | **str**| Name and version of the of the Client software | 

### Return type

[**DirectoryClientItem**](DirectoryClientItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieve_clients**
> list[DirectoryClientItem] retrieve_clients(x_correlation_id, user_agent, status=status)

Retrieve a list of all registered clients (e.g., third party providers)

Returns a list of clients with information regarding software and supported use cases. (SCOPE: SIX) 

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DirectoryApi()
x_correlation_id = 'x_correlation_id_example' # str | Unique ID (defined by the caller) which will be reflected back in the response.
user_agent = 'user_agent_example' # str | Name and version of the of the Client software
status = 'ACTIVE' # str | status=ACTIVE returns only active clients (optional) (default to ACTIVE)

try:
    # Retrieve a list of all registered clients (e.g., third party providers)
    api_response = api_instance.retrieve_clients(x_correlation_id, user_agent, status=status)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DirectoryApi->retrieve_clients: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_correlation_id** | **str**| Unique ID (defined by the caller) which will be reflected back in the response. | 
 **user_agent** | **str**| Name and version of the of the Client software | 
 **status** | **str**| status&#x3D;ACTIVE returns only active clients | [optional] [default to ACTIVE]

### Return type

[**list[DirectoryClientItem]**](DirectoryClientItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieve_provider_detail**
> DirectoryProviderItem retrieve_provider_detail(provider_id, x_correlation_id, user_agent)

Retrieve the informatoin for a registered provider (e.g., financial institutions)

Returns information regarding software and supported use cases of a provider. (SCOPE: SIX) 

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DirectoryApi()
provider_id = 'provider_id_example' # str | id of the provider
x_correlation_id = 'x_correlation_id_example' # str | Unique ID (defined by the caller) which will be reflected back in the response.
user_agent = 'user_agent_example' # str | Name and version of the of the Client software

try:
    # Retrieve the informatoin for a registered provider (e.g., financial institutions)
    api_response = api_instance.retrieve_provider_detail(provider_id, x_correlation_id, user_agent)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DirectoryApi->retrieve_provider_detail: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **provider_id** | **str**| id of the provider | 
 **x_correlation_id** | **str**| Unique ID (defined by the caller) which will be reflected back in the response. | 
 **user_agent** | **str**| Name and version of the of the Client software | 

### Return type

[**DirectoryProviderItem**](DirectoryProviderItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieve_providers**
> list[DirectoryProviderItem] retrieve_providers(x_correlation_id, user_agent, status=status)

Retrieve a list of all registered providers (e.g., financial institutions)

Returns a list of providers with information regarding software and supported use cases. (SCOPE: SIX) 

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DirectoryApi()
x_correlation_id = 'x_correlation_id_example' # str | Unique ID (defined by the caller) which will be reflected back in the response.
user_agent = 'user_agent_example' # str | Name and version of the of the Client software
status = 'ACTIVE' # str | status=ACTIVE returns only active clients (optional) (default to ACTIVE)

try:
    # Retrieve a list of all registered providers (e.g., financial institutions)
    api_response = api_instance.retrieve_providers(x_correlation_id, user_agent, status=status)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DirectoryApi->retrieve_providers: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_correlation_id** | **str**| Unique ID (defined by the caller) which will be reflected back in the response. | 
 **user_agent** | **str**| Name and version of the of the Client software | 
 **status** | **str**| status&#x3D;ACTIVE returns only active clients | [optional] [default to ACTIVE]

### Return type

[**list[DirectoryProviderItem]**](DirectoryProviderItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

