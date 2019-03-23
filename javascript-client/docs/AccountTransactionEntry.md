# SwissCorporateApi.AccountTransactionEntry

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entryId** | **String** |  | 
**transactionType** | [**AccountTransactionTransactionType**](AccountTransactionTransactionType.md) |  | 
**entryReference** | **String** |  | [optional] 
**entryReferenceInternalId** | **String** |  | [optional] 
**reversalIndicator** | **Boolean** |  | [optional] 
**bookingDate** | **Date** |  | 
**valueDate** | **Date** |  | 
**amount** | [**PaymentCurrencyAmount**](PaymentCurrencyAmount.md) |  | 
**instructedAmount** | [**AccountTransactionInstructedAmount**](AccountTransactionInstructedAmount.md) |  | [optional] 
**totalChargesAmount** | [**AccountTransactionItemCharges**](AccountTransactionItemCharges.md) |  | [optional] 
**bankTransactionCode** | [**AccountTransactionBankTransactionCode**](AccountTransactionBankTransactionCode.md) |  | 
**additionalEntryInformation** | **String** |  | [optional] 
**transactions** | [**[AccountTransactionItem]**](AccountTransactionItem.md) |  | [optional] 


