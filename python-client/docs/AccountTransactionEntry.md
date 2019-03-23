# AccountTransactionEntry

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entry_id** | **str** |  | 
**transaction_type** | [**AccountTransactionTransactionType**](AccountTransactionTransactionType.md) |  | 
**entry_reference** | **str** |  | [optional] 
**entry_reference_internal_id** | **str** |  | [optional] 
**reversal_indicator** | **bool** |  | [optional] 
**booking_date** | **date** |  | 
**value_date** | **date** |  | 
**amount** | [**PaymentCurrencyAmount**](PaymentCurrencyAmount.md) |  | 
**instructed_amount** | [**AccountTransactionInstructedAmount**](AccountTransactionInstructedAmount.md) |  | [optional] 
**total_charges_amount** | [**AccountTransactionItemCharges**](AccountTransactionItemCharges.md) |  | [optional] 
**bank_transaction_code** | [**AccountTransactionBankTransactionCode**](AccountTransactionBankTransactionCode.md) |  | 
**additional_entry_information** | **str** |  | [optional] 
**transactions** | [**list[AccountTransactionItem]**](AccountTransactionItem.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


