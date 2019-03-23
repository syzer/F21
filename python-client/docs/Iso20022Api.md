# swagger_client.Iso20022Api

All URIs are relative to *https://tbd.six-group.com/api/bankingservices/corporate/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**retrieve_iso20022_account_statement**](Iso20022Api.md#retrieve_iso20022_account_statement) | **GET** /iso20022/statements/{reportId} | Retrieves the designated ISO20022 XML CAMT document.
[**retrieve_iso20022_account_statement_ids**](Iso20022Api.md#retrieve_iso20022_account_statement_ids) | **GET** /iso20022/statements | Retrieve a list of resource links to account statements (CAMT.053)
[**retrieve_iso20022_payment_instruction**](Iso20022Api.md#retrieve_iso20022_payment_instruction) | **GET** /iso20022/payments/{submissionId} | Retrieve the submitted ISO20022 XML PAIN.001 message.
[**retrieve_iso20022_payment_instruction_status_report**](Iso20022Api.md#retrieve_iso20022_payment_instruction_status_report) | **GET** /iso20022/payments/{submissionId}/status | Retrieve ISO20022 XML status report (PAIN.002) of a payment instruction
[**submit_iso20022_payment_instruction**](Iso20022Api.md#submit_iso20022_payment_instruction) | **POST** /iso20022/payments | Submit an ISO20022 XML payment instruction (PAIN.001)


# **retrieve_iso20022_account_statement**
> file retrieve_iso20022_account_statement(authorization, report_id, x_cor_api_target_id, x_cor_api_client_id, x_correlation_id, user_agent)

Retrieves the designated ISO20022 XML CAMT document.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.Iso20022Api()
authorization = 'authorization_example' # str | Bearer followed by a base64 encoded OAuth access token
report_id = 'report_id_example' # str | id of report
x_cor_api_target_id = 'x_cor_api_target_id_example' # str | ID that identifies the provider (e.g., a financial institution). (SCOPE: SIX)
x_cor_api_client_id = 'x_cor_api_client_id_example' # str | ID of the client forwarded to the provider. (SCOPE: FI)
x_correlation_id = 'x_correlation_id_example' # str | Unique ID (defined by the caller) which will be reflected back in the response.
user_agent = 'user_agent_example' # str | Name and version of the of the Client software

try:
    # Retrieves the designated ISO20022 XML CAMT document.
    api_response = api_instance.retrieve_iso20022_account_statement(authorization, report_id, x_cor_api_target_id, x_cor_api_client_id, x_correlation_id, user_agent)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling Iso20022Api->retrieve_iso20022_account_statement: %s\n" % e)
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **str**| Bearer followed by a base64 encoded OAuth access token | 
 **report_id** | **str**| id of report | 
 **x_cor_api_target_id** | **str**| ID that identifies the provider (e.g., a financial institution). (SCOPE: SIX) | 
 **x_cor_api_client_id** | **str**| ID of the client forwarded to the provider. (SCOPE: FI) | 
 **x_correlation_id** | **str**| Unique ID (defined by the caller) which will be reflected back in the response. | 
 **user_agent** | **str**| Name and version of the of the Client software | 

### Return type

[**file**](file.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieve_iso20022_account_statement_ids**
> list[Iso20022ReportReference] retrieve_iso20022_account_statement_ids(authorization, x_cor_api_target_id, x_cor_api_client_id, x_correlation_id, user_agent)

Retrieve a list of resource links to account statements (CAMT.053)

Retrieve resources links to available account statements. The returned account statements must conform to the XML Schema and Implementation Guidelines defined by Swiss Payment Standards; see: https://www.six-interbank-clearing.com/en/home/standardization/iso-payments/customer-bank/implementation-guidelines.html 

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.Iso20022Api()
authorization = 'authorization_example' # str | Bearer followed by a base64 encoded OAuth access token
x_cor_api_target_id = 'x_cor_api_target_id_example' # str | ID that identifies the provider (e.g., a financial institution). (SCOPE: SIX)
x_cor_api_client_id = 'x_cor_api_client_id_example' # str | ID of the client forwarded to the provider. (SCOPE: FI)
x_correlation_id = 'x_correlation_id_example' # str | Unique ID (defined by the caller) which will be reflected back in the response.
user_agent = 'user_agent_example' # str | Name and version of the of the Client software

try:
    # Retrieve a list of resource links to account statements (CAMT.053)
    api_response = api_instance.retrieve_iso20022_account_statement_ids(authorization, x_cor_api_target_id, x_cor_api_client_id, x_correlation_id, user_agent)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling Iso20022Api->retrieve_iso20022_account_statement_ids: %s\n" % e)
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

[**list[Iso20022ReportReference]**](Iso20022ReportReference.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieve_iso20022_payment_instruction**
> file retrieve_iso20022_payment_instruction(authorization, submission_id, x_cor_api_target_id, x_cor_api_client_id, x_correlation_id, user_agent)

Retrieve the submitted ISO20022 XML PAIN.001 message.

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.Iso20022Api()
authorization = 'authorization_example' # str | Bearer followed by a base64 encoded OAuth access token
submission_id = 'submission_id_example' # str | id of payment submission
x_cor_api_target_id = 'x_cor_api_target_id_example' # str | ID that identifies the provider (e.g., a financial institution). (SCOPE: SIX)
x_cor_api_client_id = 'x_cor_api_client_id_example' # str | ID of the client forwarded to the provider. (SCOPE: FI)
x_correlation_id = 'x_correlation_id_example' # str | Unique ID (defined by the caller) which will be reflected back in the response.
user_agent = 'user_agent_example' # str | Name and version of the of the Client software

try:
    # Retrieve the submitted ISO20022 XML PAIN.001 message.
    api_response = api_instance.retrieve_iso20022_payment_instruction(authorization, submission_id, x_cor_api_target_id, x_cor_api_client_id, x_correlation_id, user_agent)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling Iso20022Api->retrieve_iso20022_payment_instruction: %s\n" % e)
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

[**file**](file.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieve_iso20022_payment_instruction_status_report**
> file retrieve_iso20022_payment_instruction_status_report(authorization, submission_id, x_cor_api_target_id, x_cor_api_client_id, x_correlation_id, user_agent)

Retrieve ISO20022 XML status report (PAIN.002) of a payment instruction

Retrieve the XML ISO20022 pain.002 status report. The returned status report must conform to the XML Schema and Implementation Guidelines defined by Swiss Payment Standards; see: https://www.six-interbank-clearing.com/en/home/standardization/iso-payments/customer-bank/implementation-guidelines.html 

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.Iso20022Api()
authorization = 'authorization_example' # str | Bearer followed by a base64 encoded OAuth access token
submission_id = 'submission_id_example' # str | id of payment submission
x_cor_api_target_id = 'x_cor_api_target_id_example' # str | ID that identifies the provider (e.g., a financial institution). (SCOPE: SIX)
x_cor_api_client_id = 'x_cor_api_client_id_example' # str | ID of the client forwarded to the provider. (SCOPE: FI)
x_correlation_id = 'x_correlation_id_example' # str | Unique ID (defined by the caller) which will be reflected back in the response.
user_agent = 'user_agent_example' # str | Name and version of the of the Client software

try:
    # Retrieve ISO20022 XML status report (PAIN.002) of a payment instruction
    api_response = api_instance.retrieve_iso20022_payment_instruction_status_report(authorization, submission_id, x_cor_api_target_id, x_cor_api_client_id, x_correlation_id, user_agent)
    pprint(api_response)
except ApiException as e:
    print("Exception when calling Iso20022Api->retrieve_iso20022_payment_instruction_status_report: %s\n" % e)
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

[**file**](file.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/xml

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **submit_iso20022_payment_instruction**
> submit_iso20022_payment_instruction(authorization, x_cor_api_target_id, x_cor_api_client_id, x_correlation_id, user_agent, x_psu_ip_address, x_psu_user_agent, body)

Submit an ISO20022 XML payment instruction (PAIN.001)

Submit an ISO20022 XML PAIN.001 payment instruction. The submitted payment instruction must conform to the XML Schema and Implementation Guidelines defined by Swiss Payment Standards; see: https://www.six-interbank-clearing.com/en/home/standardization/iso-payments/customer-bank/implementation-guidelines.html 

### Example
```python
from __future__ import print_function
import time
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = swagger_client.Iso20022Api()
authorization = 'authorization_example' # str | Bearer followed by a base64 encoded OAuth access token
x_cor_api_target_id = 'x_cor_api_target_id_example' # str | ID that identifies the provider (e.g., a financial institution). (SCOPE: SIX)
x_cor_api_client_id = 'x_cor_api_client_id_example' # str | ID of the client forwarded to the provider. (SCOPE: FI)
x_correlation_id = 'x_correlation_id_example' # str | Unique ID (defined by the caller) which will be reflected back in the response.
user_agent = 'user_agent_example' # str | Name and version of the of the Client software
x_psu_ip_address = 'x_psu_ip_address_example' # str | IP address of the user initiating the operation
x_psu_user_agent = 'x_psu_user_agent_example' # str | User agent of the user initiating the operation
body = 'body_example' # str | Payment instruction details as defined by data model. 

try:
    # Submit an ISO20022 XML payment instruction (PAIN.001)
    api_instance.submit_iso20022_payment_instruction(authorization, x_cor_api_target_id, x_cor_api_client_id, x_correlation_id, user_agent, x_psu_ip_address, x_psu_user_agent, body)
except ApiException as e:
    print("Exception when calling Iso20022Api->submit_iso20022_payment_instruction: %s\n" % e)
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
 **body** | **str**| Payment instruction details as defined by data model.  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/xml
 - **Accept**: Not defined

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

