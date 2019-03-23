# swagger_client.AccountsApi

All URIs are relative to *https://tbd.six-group.com/api/bankingservices/corporate/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**request_account_balance**](AccountsApi.md#request_account_balance) | **GET** /accounts/{accountId}/balance | Retrieve account balance information
[**request_account_details**](AccountsApi.md#request_account_details) | **GET** /accounts/{accountId} | Retrieve information about a single specific account
[**request_account_list**](AccountsApi.md#request_account_list) | **GET** /accounts | Retrieve list of authorized accounts
[**request_account_transactions**](AccountsApi.md#request_account_transactions) | **GET** /accounts/{accountId}/transactions | Retrieve transactions of a specific account


# **request_account_balance**
> AccountBalanceItem request_account_balance(authorization, account_id, x_cor_api_target_id, x_cor_api_client_id, x_correlation_id, user_agent, _date=_date)

Retrieve account balance information

Retrieve account balance information. * Returns the intraday booked balance (ITBD), if called without a date. * Returns the intraday booked balance (ITBD), if called for the current date. * Returns the closing booked balance (CLBD), if called for a past date.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.AccountsApi()
authorization = 'authorization_example' # str | Bearer followed by a base64 encoded OAuth access token
account_id = 'account_id_example' # str | id of account
x_cor_api_target_id = 'x_cor_api_target_id_example' # str | ID that identifies the provider (e.g., a financial institution). (SCOPE: SIX)
x_cor_api_client_id = 'x_cor_api_client_id_example' # str | ID of the client forwarded to the provider. (SCOPE: FI)
x_correlation_id = 'x_correlation_id_example' # str | Unique ID (defined by the caller) which will be reflected back in the response.
user_agent = 'user_agent_example' # str | Name and version of the of the Client software
_date = 'the current date' # date | The date to query, formatted as yyyy-mm-dd. (optional) (default to the current date)

try:
    # Retrieve account balance information
    api_response = api_instance.request_account_balance(authorization, account_id, x_cor_api_target_id, x_cor_api_client_id, x_correlation_id, user_agent, _date=_date)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling AccountsApi->request_account_balance: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| Bearer followed by a base64 encoded OAuth access token | 
 **account_id** | **str**| id of account | 
 **x_cor_api_target_id** | **str**| ID that identifies the provider (e.g., a financial institution). (SCOPE: SIX) | 
 **x_cor_api_client_id** | **str**| ID of the client forwarded to the provider. (SCOPE: FI) | 
 **x_correlation_id** | **str**| Unique ID (defined by the caller) which will be reflected back in the response. | 
 **user_agent** | **str**| Name and version of the of the Client software | 
 **_date** | **date**| The date to query, formatted as yyyy-mm-dd. | [optional] [default to the current date]

### Return type

[**AccountBalanceItem**](AccountBalanceItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **request_account_details**
> AccountItem request_account_details(authorization, account_id, x_cor_api_target_id, x_cor_api_client_id, x_correlation_id, user_agent)

Retrieve information about a single specific account

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.AccountsApi()
authorization = 'authorization_example' # str | Bearer followed by a base64 encoded OAuth access token
account_id = 'account_id_example' # str | id of account
x_cor_api_target_id = 'x_cor_api_target_id_example' # str | ID that identifies the provider (e.g., a financial institution). (SCOPE: SIX)
x_cor_api_client_id = 'x_cor_api_client_id_example' # str | ID of the client forwarded to the provider. (SCOPE: FI)
x_correlation_id = 'x_correlation_id_example' # str | Unique ID (defined by the caller) which will be reflected back in the response.
user_agent = 'user_agent_example' # str | Name and version of the of the Client software

try:
    # Retrieve information about a single specific account
    api_response = api_instance.request_account_details(authorization, account_id, x_cor_api_target_id, x_cor_api_client_id, x_correlation_id, user_agent)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling AccountsApi->request_account_details: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| Bearer followed by a base64 encoded OAuth access token | 
 **account_id** | **str**| id of account | 
 **x_cor_api_target_id** | **str**| ID that identifies the provider (e.g., a financial institution). (SCOPE: SIX) | 
 **x_cor_api_client_id** | **str**| ID of the client forwarded to the provider. (SCOPE: FI) | 
 **x_correlation_id** | **str**| Unique ID (defined by the caller) which will be reflected back in the response. | 
 **user_agent** | **str**| Name and version of the of the Client software | 

### Return type

[**AccountItem**](AccountItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **request_account_list**
> list[AccountItem] request_account_list(authorization, x_cor_api_target_id, x_cor_api_client_id, x_correlation_id, user_agent)

Retrieve list of authorized accounts

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.AccountsApi()
authorization = 'authorization_example' # str | Bearer followed by a base64 encoded OAuth access token
x_cor_api_target_id = 'x_cor_api_target_id_example' # str | ID that identifies the provider (e.g., a financial institution). (SCOPE: SIX)
x_cor_api_client_id = 'x_cor_api_client_id_example' # str | ID of the client forwarded to the provider. (SCOPE: FI)
x_correlation_id = 'x_correlation_id_example' # str | Unique ID (defined by the caller) which will be reflected back in the response.
user_agent = 'user_agent_example' # str | Name and version of the of the Client software

try:
    # Retrieve list of authorized accounts
    api_response = api_instance.request_account_list(authorization, x_cor_api_target_id, x_cor_api_client_id, x_correlation_id, user_agent)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling AccountsApi->request_account_list: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| Bearer followed by a base64 encoded OAuth access token | 
 **x_cor_api_target_id** | **str**| ID that identifies the provider (e.g., a financial institution). (SCOPE: SIX) | 
 **x_cor_api_client_id** | **str**| ID of the client forwarded to the provider. (SCOPE: FI) | 
 **x_correlation_id** | **str**| Unique ID (defined by the caller) which will be reflected back in the response. | 
 **user_agent** | **str**| Name and version of the of the Client software | 

### Return type

[**list[AccountItem]**](AccountItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **request_account_transactions**
> AccountTransactionReport request_account_transactions(authorization, account_id, x_cor_api_target_id, x_cor_api_client_id, x_correlation_id, user_agent, _date=_date)

Retrieve transactions of a specific account

* Returns the transaction list of the current day, if called without a date. * Returns the transaction list for a specific day, if called for a past date. In case the specified day has not yet been finalized, the response will be a 404 error. 

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.AccountsApi()
authorization = 'authorization_example' # str | Bearer followed by a base64 encoded OAuth access token
account_id = 'account_id_example' # str | id of account
x_cor_api_target_id = 'x_cor_api_target_id_example' # str | ID that identifies the provider (e.g., a financial institution). (SCOPE: SIX)
x_cor_api_client_id = 'x_cor_api_client_id_example' # str | ID of the client forwarded to the provider. (SCOPE: FI)
x_correlation_id = 'x_correlation_id_example' # str | Unique ID (defined by the caller) which will be reflected back in the response.
user_agent = 'user_agent_example' # str | Name and version of the of the Client software
_date = 'the current date' # date | The date to query, formatted as yyyy-mm-dd. (optional) (default to the current date)

try:
    # Retrieve transactions of a specific account
    api_response = api_instance.request_account_transactions(authorization, account_id, x_cor_api_target_id, x_cor_api_client_id, x_correlation_id, user_agent, _date=_date)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling AccountsApi->request_account_transactions: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| Bearer followed by a base64 encoded OAuth access token | 
 **account_id** | **str**| id of account | 
 **x_cor_api_target_id** | **str**| ID that identifies the provider (e.g., a financial institution). (SCOPE: SIX) | 
 **x_cor_api_client_id** | **str**| ID of the client forwarded to the provider. (SCOPE: FI) | 
 **x_correlation_id** | **str**| Unique ID (defined by the caller) which will be reflected back in the response. | 
 **user_agent** | **str**| Name and version of the of the Client software | 
 **_date** | **date**| The date to query, formatted as yyyy-mm-dd. | [optional] [default to the current date]

### Return type

[**AccountTransactionReport**](AccountTransactionReport.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

