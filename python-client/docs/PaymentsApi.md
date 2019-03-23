# swagger_client.PaymentsApi

All URIs are relative to *https://tbd.six-group.com/api/bankingservices/corporate/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**retrieve_payment_submission**](PaymentsApi.md#retrieve_payment_submission) | **GET** /payments/{submissionId} | Retrieve a payment submission
[**retrieve_payment_submission_status**](PaymentsApi.md#retrieve_payment_submission_status) | **GET** /payments/{submissionId}/status | Retrieve payment submission status information
[**submit_payment_instructions**](PaymentsApi.md#submit_payment_instructions) | **POST** /payments | Submit payment instructions


# **retrieve_payment_submission**
> PaymentSubmissionRequest retrieve_payment_submission(authorization, submission_id, x_cor_api_target_id, x_cor_api_client_id, x_correlation_id, user_agent)

Retrieve a payment submission

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.PaymentsApi()
authorization = 'authorization_example' # str | Bearer followed by a base64 encoded OAuth access token
submission_id = 'submission_id_example' # str | id of payment submission
x_cor_api_target_id = 'x_cor_api_target_id_example' # str | ID that identifies the provider (e.g., a financial institution). (SCOPE: SIX)
x_cor_api_client_id = 'x_cor_api_client_id_example' # str | ID of the client forwarded to the provider. (SCOPE: FI)
x_correlation_id = 'x_correlation_id_example' # str | Unique ID (defined by the caller) which will be reflected back in the response.
user_agent = 'user_agent_example' # str | Name and version of the of the Client software

try:
    # Retrieve a payment submission
    api_response = api_instance.retrieve_payment_submission(authorization, submission_id, x_cor_api_target_id, x_cor_api_client_id, x_correlation_id, user_agent)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling PaymentsApi->retrieve_payment_submission: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| Bearer followed by a base64 encoded OAuth access token | 
 **submission_id** | **str**| id of payment submission | 
 **x_cor_api_target_id** | **str**| ID that identifies the provider (e.g., a financial institution). (SCOPE: SIX) | 
 **x_cor_api_client_id** | **str**| ID of the client forwarded to the provider. (SCOPE: FI) | 
 **x_correlation_id** | **str**| Unique ID (defined by the caller) which will be reflected back in the response. | 
 **user_agent** | **str**| Name and version of the of the Client software | 

### Return type

[**PaymentSubmissionRequest**](PaymentSubmissionRequest.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieve_payment_submission_status**
> PaymentSubmissionStatus retrieve_payment_submission_status(authorization, submission_id, x_cor_api_target_id, x_cor_api_client_id, x_correlation_id, user_agent)

Retrieve payment submission status information

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.PaymentsApi()
authorization = 'authorization_example' # str | Bearer followed by a base64 encoded OAuth access token
submission_id = 'submission_id_example' # str | id of payment submission
x_cor_api_target_id = 'x_cor_api_target_id_example' # str | ID that identifies the provider (e.g., a financial institution). (SCOPE: SIX)
x_cor_api_client_id = 'x_cor_api_client_id_example' # str | ID of the client forwarded to the provider. (SCOPE: FI)
x_correlation_id = 'x_correlation_id_example' # str | Unique ID (defined by the caller) which will be reflected back in the response.
user_agent = 'user_agent_example' # str | Name and version of the of the Client software

try:
    # Retrieve payment submission status information
    api_response = api_instance.retrieve_payment_submission_status(authorization, submission_id, x_cor_api_target_id, x_cor_api_client_id, x_correlation_id, user_agent)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling PaymentsApi->retrieve_payment_submission_status: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| Bearer followed by a base64 encoded OAuth access token | 
 **submission_id** | **str**| id of payment submission | 
 **x_cor_api_target_id** | **str**| ID that identifies the provider (e.g., a financial institution). (SCOPE: SIX) | 
 **x_cor_api_client_id** | **str**| ID of the client forwarded to the provider. (SCOPE: FI) | 
 **x_correlation_id** | **str**| Unique ID (defined by the caller) which will be reflected back in the response. | 
 **user_agent** | **str**| Name and version of the of the Client software | 

### Return type

[**PaymentSubmissionStatus**](PaymentSubmissionStatus.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **submit_payment_instructions**
> submit_payment_instructions(authorization, x_cor_api_target_id, x_cor_api_client_id, x_correlation_id, user_agent, x_psu_ip_address, x_psu_user_agent, body)

Submit payment instructions

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.PaymentsApi()
authorization = 'authorization_example' # str | Bearer followed by a base64 encoded OAuth access token
x_cor_api_target_id = 'x_cor_api_target_id_example' # str | ID that identifies the provider (e.g., a financial institution). (SCOPE: SIX)
x_cor_api_client_id = 'x_cor_api_client_id_example' # str | ID of the client forwarded to the provider. (SCOPE: FI)
x_correlation_id = 'x_correlation_id_example' # str | Unique ID (defined by the caller) which will be reflected back in the response.
user_agent = 'user_agent_example' # str | Name and version of the of the Client software
x_psu_ip_address = 'x_psu_ip_address_example' # str | IP address of the user initiating the operation
x_psu_user_agent = 'x_psu_user_agent_example' # str | User agent of the user initiating the operation
body = swagger_client.PaymentSubmissionRequest() # PaymentSubmissionRequest | Payment instruction details as defined by data model. 

try:
    # Submit payment instructions
    api_instance.submit_payment_instructions(authorization, x_cor_api_target_id, x_cor_api_client_id, x_correlation_id, user_agent, x_psu_ip_address, x_psu_user_agent, body)
except ApiException as e:
    print("Exception when calling PaymentsApi->submit_payment_instructions: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| Bearer followed by a base64 encoded OAuth access token | 
 **x_cor_api_target_id** | **str**| ID that identifies the provider (e.g., a financial institution). (SCOPE: SIX) | 
 **x_cor_api_client_id** | **str**| ID of the client forwarded to the provider. (SCOPE: FI) | 
 **x_correlation_id** | **str**| Unique ID (defined by the caller) which will be reflected back in the response. | 
 **user_agent** | **str**| Name and version of the of the Client software | 
 **x_psu_ip_address** | **str**| IP address of the user initiating the operation | 
 **x_psu_user_agent** | **str**| User agent of the user initiating the operation | 
 **body** | [**PaymentSubmissionRequest**](PaymentSubmissionRequest.md)| Payment instruction details as defined by data model.  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

