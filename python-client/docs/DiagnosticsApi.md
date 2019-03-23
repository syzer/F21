# swagger_client.DiagnosticsApi

All URIs are relative to *https://tbd.six-group.com/api/bankingservices/corporate/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**health_check_get**](DiagnosticsApi.md#health_check_get) | **GET** /healthcheck | Returns all specified request headers and additional diagnostic information
[**health_check_post**](DiagnosticsApi.md#health_check_post) | **POST** /healthcheck | Returns all specified request headers, the request body and additional diagnostic information


# **health_check_get**
> HealthCheckResponse health_check_get(authorization=authorization, user_agent=user_agent, x_cor_api_target_id=x_cor_api_target_id, x_cor_api_client_id=x_cor_api_client_id, x_correlation_id=x_correlation_id, x_psu_ip_address=x_psu_ip_address, x_psu_user_agent=x_psu_user_agent)

Returns all specified request headers and additional diagnostic information

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DiagnosticsApi()
authorization = 'authorization_example' # str | Bearer followed by a base64 encoded OAuth access token (optional)
user_agent = 'user_agent_example' # str | Name and version of the of the client software (optional)
x_cor_api_target_id = 'x_cor_api_target_id_example' # str | ID of the target, e.g., a financial institution. (SCOPE: SIX) (optional)
x_cor_api_client_id = 'x_cor_api_client_id_example' # str | ID of the client forwarded to the provider. (SCOPE: FI) (optional)
x_correlation_id = 'x_correlation_id_example' # str | Unique ID (defined by the caller) which will be reflected back in the response. (optional)
x_psu_ip_address = 'x_psu_ip_address_example' # str | IP address of the user initiating the operation (optional)
x_psu_user_agent = 'x_psu_user_agent_example' # str | User of the client software (optional)

try:
    # Returns all specified request headers and additional diagnostic information
    api_response = api_instance.health_check_get(authorization=authorization, user_agent=user_agent, x_cor_api_target_id=x_cor_api_target_id, x_cor_api_client_id=x_cor_api_client_id, x_correlation_id=x_correlation_id, x_psu_ip_address=x_psu_ip_address, x_psu_user_agent=x_psu_user_agent)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DiagnosticsApi->health_check_get: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| Bearer followed by a base64 encoded OAuth access token | [optional] 
 **user_agent** | **str**| Name and version of the of the client software | [optional] 
 **x_cor_api_target_id** | **str**| ID of the target, e.g., a financial institution. (SCOPE: SIX) | [optional] 
 **x_cor_api_client_id** | **str**| ID of the client forwarded to the provider. (SCOPE: FI) | [optional] 
 **x_correlation_id** | **str**| Unique ID (defined by the caller) which will be reflected back in the response. | [optional] 
 **x_psu_ip_address** | **str**| IP address of the user initiating the operation | [optional] 
 **x_psu_user_agent** | **str**| User of the client software | [optional] 

### Return type

[**HealthCheckResponse**](HealthCheckResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **health_check_post**
> HealthCheckResponse health_check_post(body, authorization=authorization, user_agent=user_agent, x_cor_api_target_id=x_cor_api_target_id, x_cor_api_client_id=x_cor_api_client_id, x_correlation_id=x_correlation_id, x_psu_ip_address=x_psu_ip_address, x_psu_user_agent=x_psu_user_agent)

Returns all specified request headers, the request body and additional diagnostic information

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.DiagnosticsApi()
body = 'body_example' # str | 
authorization = 'authorization_example' # str | Bearer followed by a base64 encoded OAuth access token (optional)
user_agent = 'user_agent_example' # str | Name and version of the of the client software (optional)
x_cor_api_target_id = 'x_cor_api_target_id_example' # str | ID of the target, e.g., a financial institution. (SCOPE: SIX) (optional)
x_cor_api_client_id = 'x_cor_api_client_id_example' # str | ID of the client forwarded to the provider. (SCOPE: FI) (optional)
x_correlation_id = 'x_correlation_id_example' # str | Unique ID (defined by the caller) which will be reflected back in the response. (optional)
x_psu_ip_address = 'x_psu_ip_address_example' # str | IP address of the user initiating the operation (optional)
x_psu_user_agent = 'x_psu_user_agent_example' # str | User of the client software (optional)

try:
    # Returns all specified request headers, the request body and additional diagnostic information
    api_response = api_instance.health_check_post(body, authorization=authorization, user_agent=user_agent, x_cor_api_target_id=x_cor_api_target_id, x_cor_api_client_id=x_cor_api_client_id, x_correlation_id=x_correlation_id, x_psu_ip_address=x_psu_ip_address, x_psu_user_agent=x_psu_user_agent)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling DiagnosticsApi->health_check_post: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **str**|  | 
 **authorization** | **str**| Bearer followed by a base64 encoded OAuth access token | [optional] 
 **user_agent** | **str**| Name and version of the of the client software | [optional] 
 **x_cor_api_target_id** | **str**| ID of the target, e.g., a financial institution. (SCOPE: SIX) | [optional] 
 **x_cor_api_client_id** | **str**| ID of the client forwarded to the provider. (SCOPE: FI) | [optional] 
 **x_correlation_id** | **str**| Unique ID (defined by the caller) which will be reflected back in the response. | [optional] 
 **x_psu_ip_address** | **str**| IP address of the user initiating the operation | [optional] 
 **x_psu_user_agent** | **str**| User of the client software | [optional] 

### Return type

[**HealthCheckResponse**](HealthCheckResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

