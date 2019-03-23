# swagger_client.OauthApi

All URIs are relative to *https://tbd.six-group.com/api/bankingservices/corporate/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**oauth_token**](OauthApi.md#oauth_token) | **POST** /oauth/token | Get the OAuth access and refresh token


# **oauth_token**
> OauthTokenResponse oauth_token(grant_type, client_id, x_cor_api_target_id, x_cor_api_client_id, x_correlation_id, user_agent, x_psu_ip_address, x_psu_user_agent, code=code, refresh_token=refresh_token, redirect_uri=redirect_uri)

Get the OAuth access and refresh token

Returns the OAuth access and refresh token for the specified client and target 

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.OauthApi()
grant_type = 'grant_type_example' # str | either authorization_code or refresh_token
client_id = 'client_id_example' # str | client id
x_cor_api_target_id = 'x_cor_api_target_id_example' # str | ID that identifies the provider (e.g., a financial institution). (SCOPE: SIX)
x_cor_api_client_id = 'x_cor_api_client_id_example' # str | ID of the client forwarded to the provider. (SCOPE: FI)
x_correlation_id = 'x_correlation_id_example' # str | Unique ID (defined by the caller) which will be reflected back in the response.
user_agent = 'user_agent_example' # str | Name and version of the of the Client software
x_psu_ip_address = 'x_psu_ip_address_example' # str | IP address of the user initiating the operation
x_psu_user_agent = 'x_psu_user_agent_example' # str | User agent of the user initiating the operation
code = 'code_example' # str | authorization code if applicable (optional)
refresh_token = 'refresh_token_example' # str | refresh token if applicable (optional)
redirect_uri = 'redirect_uri_example' # str | original redirect uri if applicable (optional)

try:
    # Get the OAuth access and refresh token
    api_response = api_instance.oauth_token(grant_type, client_id, x_cor_api_target_id, x_cor_api_client_id, x_correlation_id, user_agent, x_psu_ip_address, x_psu_user_agent, code=code, refresh_token=refresh_token, redirect_uri=redirect_uri)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling OauthApi->oauth_token: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **grant_type** | **str**| either authorization_code or refresh_token | 
 **client_id** | **str**| client id | 
 **x_cor_api_target_id** | **str**| ID that identifies the provider (e.g., a financial institution). (SCOPE: SIX) | 
 **x_cor_api_client_id** | **str**| ID of the client forwarded to the provider. (SCOPE: FI) | 
 **x_correlation_id** | **str**| Unique ID (defined by the caller) which will be reflected back in the response. | 
 **user_agent** | **str**| Name and version of the of the Client software | 
 **x_psu_ip_address** | **str**| IP address of the user initiating the operation | 
 **x_psu_user_agent** | **str**| User agent of the user initiating the operation | 
 **code** | **str**| authorization code if applicable | [optional] 
 **refresh_token** | **str**| refresh token if applicable | [optional] 
 **redirect_uri** | **str**| original redirect uri if applicable | [optional] 

### Return type

[**OauthTokenResponse**](OauthTokenResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

