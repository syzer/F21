'use strict';


/**
 * Retrieve account balance information
 * Retrieve account balance information. * Returns the intraday booked balance (ITBD), if called without a date. * Returns the intraday booked balance (ITBD), if called for the current date. * Returns the closing booked balance (CLBD), if called for a past date.
 *
 * authorization String Bearer followed by a base64 encoded OAuth access token
 * accountId String id of account
 * xCorAPITargetID String ID that identifies the provider (e.g., a financial institution). (SCOPE: SIX)
 * xCorAPIClientID String ID of the client forwarded to the provider. (SCOPE: FI)
 * xCorrelationID String Unique ID (defined by the caller) which will be reflected back in the response.
 * userAgent String Name and version of the of the Client software
 * date date The date to query, formatted as yyyy-mm-dd. (optional)
 * returns accountBalanceItem
 **/
exports.requestAccountBalance = function(authorization,accountId,xCorAPITargetID,xCorAPIClientID,xCorrelationID,userAgent,date) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "date" : "2010-02-15",
  "balanceType" : "CLBD",
  "balance" : {
    "amount" : "10.25",
    "currency" : "CHF"
  },
  "_links" : {
    "self" : "/accounts/550e8400-e29b-11d4-a716-446655440000/balance",
    "transactions" : "/accounts/550e8400-e29b-11d4-a716-446655440000/transactions",
    "account" : "/accounts/550e8400-e29b-11d4-a716-446655440000"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve information about a single specific account
 *
 * authorization String Bearer followed by a base64 encoded OAuth access token
 * accountId String id of account
 * xCorAPITargetID String ID that identifies the provider (e.g., a financial institution). (SCOPE: SIX)
 * xCorAPIClientID String ID of the client forwarded to the provider. (SCOPE: FI)
 * xCorrelationID String Unique ID (defined by the caller) which will be reflected back in the response.
 * userAgent String Name and version of the of the Client software
 * returns accountItem
 **/
exports.requestAccountDetails = function(authorization,accountId,xCorAPITargetID,xCorAPIClientID,xCorrelationID,userAgent) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "_links" : {
    "balance" : "/accounts/550e8400-e29b-11d4-a716-446655440000/balance",
    "self" : "/accounts/550e8400-e29b-11d4-a716-446655440000",
    "transactions" : "/accounts/550e8400-e29b-11d4-a716-446655440000/transactions"
  },
  "currency" : "CHF",
  "id" : "550e8400-e29b-11d4-a716-446655440000",
  "designation" : "Firmenkonto",
  "account" : {
    "identification" : "CH9300762011623852957",
    "type" : "IBAN"
  }
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve list of authorized accounts
 *
 * authorization String Bearer followed by a base64 encoded OAuth access token
 * xCorAPITargetID String ID that identifies the provider (e.g., a financial institution). (SCOPE: SIX)
 * xCorAPIClientID String ID of the client forwarded to the provider. (SCOPE: FI)
 * xCorrelationID String Unique ID (defined by the caller) which will be reflected back in the response.
 * userAgent String Name and version of the of the Client software
 * returns List
 **/
exports.requestAccountList = function(authorization,xCorAPITargetID,xCorAPIClientID,xCorrelationID,userAgent) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "_links" : {
    "balance" : "/accounts/550e8400-e29b-11d4-a716-446655440000/balance",
    "self" : "/accounts/550e8400-e29b-11d4-a716-446655440000",
    "transactions" : "/accounts/550e8400-e29b-11d4-a716-446655440000/transactions"
  },
  "currency" : "CHF",
  "id" : "550e8400-e29b-11d4-a716-446655440000",
  "designation" : "Firmenkonto",
  "account" : {
    "identification" : "CH9300762011623852957",
    "type" : "IBAN"
  }
}, {
  "_links" : {
    "balance" : "/accounts/550e8400-e29b-11d4-a716-446655440000/balance",
    "self" : "/accounts/550e8400-e29b-11d4-a716-446655440000",
    "transactions" : "/accounts/550e8400-e29b-11d4-a716-446655440000/transactions"
  },
  "currency" : "CHF",
  "id" : "550e8400-e29b-11d4-a716-446655440000",
  "designation" : "Firmenkonto",
  "account" : {
    "identification" : "CH9300762011623852957",
    "type" : "IBAN"
  }
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve transactions of a specific account
 * * Returns the transaction list of the current day, if called without a date. * Returns the transaction list for a specific day, if called for a past date. In case the specified day has not yet been finalized, the response will be a 404 error. 
 *
 * authorization String Bearer followed by a base64 encoded OAuth access token
 * accountId String id of account
 * xCorAPITargetID String ID that identifies the provider (e.g., a financial institution). (SCOPE: SIX)
 * xCorAPIClientID String ID of the client forwarded to the provider. (SCOPE: FI)
 * xCorrelationID String Unique ID (defined by the caller) which will be reflected back in the response.
 * userAgent String Name and version of the of the Client software
 * date date The date to query, formatted as yyyy-mm-dd. (optional)
 * returns accountTransactionReport
 **/
exports.requestAccountTransactions = function(authorization,accountId,xCorAPITargetID,xCorAPIClientID,xCorrelationID,userAgent,date) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "entries" : [ {
    "reversalIndicator" : true,
    "amount" : {
      "amount" : "10.25",
      "currency" : "CHF"
    },
    "bankTransactionCode" : {
      "domainCode" : "PMNT",
      "familyCode" : "RCDT",
      "subFamilyCode" : "DMCT"
    },
    "valueDate" : "2018-10-29",
    "transactions" : [ {
      "transactionType" : "CRDT",
      "amount" : {
        "amount" : "10.25",
        "currency" : "CHF"
      },
      "remittanceInformation" : "Rechnung Nr. 408",
      "additionalTransactionInformation" : "additionalTransactionInformation",
      "bankTransactionCode" : {
        "domainCode" : "PMNT",
        "familyCode" : "RCDT",
        "subFamilyCode" : "DMCT"
      },
      "totalChargesAmount" : {
        "amount" : "10.25",
        "currency" : "CHF",
        "chargeRecords" : [ {
          "amount" : "10.25",
          "chargesIncludedIndicator" : true,
          "currency" : "CHF",
          "type" : "Some type of charge"
        }, {
          "amount" : "10.25",
          "chargesIncludedIndicator" : true,
          "currency" : "CHF",
          "type" : "Some type of charge"
        } ]
      },
      "counterparty" : {
        "agent" : {
          "clearingSystemMemberIdentification" : {
            "code" : "CHBCC",
            "memberId" : "00230"
          },
          "bic" : "bic"
        },
        "postalAddress" : {
          "unstructured" : {
            "country" : "CH",
            "addressLines" : [ "Robert Schneider SA", "Rue de la gare 24" ]
          },
          "structured" : {
            "country" : "CH",
            "streetName" : "Rue de la gare",
            "townName" : "Biel",
            "buildingNumber" : "24",
            "postCode" : "2501"
          }
        },
        "name" : "Hans Muster",
        "account" : {
          "identification" : "CH9300762011623852957",
          "type" : "IBAN"
        }
      },
      "instructedAmount" : {
        "amount" : "10.25",
        "targetCurrency" : "USD",
        "exchangeRate" : "0.957",
        "sourceCurrency" : "CHF",
        "exchangeIndicator" : "MULT"
      },
      "endToEndId" : "ENDTOENDID-01",
      "transactionId" : "TX12345A987",
      "remittanceReference" : {
        "reference" : "210000000003139471430009017",
        "type" : "SCOR"
      }
    }, {
      "transactionType" : "CRDT",
      "amount" : {
        "amount" : "10.25",
        "currency" : "CHF"
      },
      "remittanceInformation" : "Rechnung Nr. 408",
      "additionalTransactionInformation" : "additionalTransactionInformation",
      "bankTransactionCode" : {
        "domainCode" : "PMNT",
        "familyCode" : "RCDT",
        "subFamilyCode" : "DMCT"
      },
      "totalChargesAmount" : {
        "amount" : "10.25",
        "currency" : "CHF",
        "chargeRecords" : [ {
          "amount" : "10.25",
          "chargesIncludedIndicator" : true,
          "currency" : "CHF",
          "type" : "Some type of charge"
        }, {
          "amount" : "10.25",
          "chargesIncludedIndicator" : true,
          "currency" : "CHF",
          "type" : "Some type of charge"
        } ]
      },
      "counterparty" : {
        "agent" : {
          "clearingSystemMemberIdentification" : {
            "code" : "CHBCC",
            "memberId" : "00230"
          },
          "bic" : "bic"
        },
        "postalAddress" : {
          "unstructured" : {
            "country" : "CH",
            "addressLines" : [ "Robert Schneider SA", "Rue de la gare 24" ]
          },
          "structured" : {
            "country" : "CH",
            "streetName" : "Rue de la gare",
            "townName" : "Biel",
            "buildingNumber" : "24",
            "postCode" : "2501"
          }
        },
        "name" : "Hans Muster",
        "account" : {
          "identification" : "CH9300762011623852957",
          "type" : "IBAN"
        }
      },
      "instructedAmount" : {
        "amount" : "10.25",
        "targetCurrency" : "USD",
        "exchangeRate" : "0.957",
        "sourceCurrency" : "CHF",
        "exchangeIndicator" : "MULT"
      },
      "endToEndId" : "ENDTOENDID-01",
      "transactionId" : "TX12345A987",
      "remittanceReference" : {
        "reference" : "210000000003139471430009017",
        "type" : "SCOR"
      }
    } ],
    "entryId" : "ENTRY123456789",
    "transactionType" : "CRDT",
    "entryReferenceInternalId" : "010001628",
    "totalChargesAmount" : {
      "amount" : "10.25",
      "currency" : "CHF",
      "chargeRecords" : [ {
        "amount" : "10.25",
        "chargesIncludedIndicator" : true,
        "currency" : "CHF",
        "type" : "Some type of charge"
      }, {
        "amount" : "10.25",
        "chargesIncludedIndicator" : true,
        "currency" : "CHF",
        "type" : "Some type of charge"
      } ]
    },
    "additionalEntryInformation" : "additionalEntryInformation",
    "bookingDate" : "2018-10-29",
    "instructedAmount" : {
      "amount" : "10.25",
      "targetCurrency" : "USD",
      "exchangeRate" : "0.957",
      "sourceCurrency" : "CHF",
      "exchangeIndicator" : "MULT"
    },
    "entryReference" : "10001628"
  }, {
    "reversalIndicator" : true,
    "amount" : {
      "amount" : "10.25",
      "currency" : "CHF"
    },
    "bankTransactionCode" : {
      "domainCode" : "PMNT",
      "familyCode" : "RCDT",
      "subFamilyCode" : "DMCT"
    },
    "valueDate" : "2018-10-29",
    "transactions" : [ {
      "transactionType" : "CRDT",
      "amount" : {
        "amount" : "10.25",
        "currency" : "CHF"
      },
      "remittanceInformation" : "Rechnung Nr. 408",
      "additionalTransactionInformation" : "additionalTransactionInformation",
      "bankTransactionCode" : {
        "domainCode" : "PMNT",
        "familyCode" : "RCDT",
        "subFamilyCode" : "DMCT"
      },
      "totalChargesAmount" : {
        "amount" : "10.25",
        "currency" : "CHF",
        "chargeRecords" : [ {
          "amount" : "10.25",
          "chargesIncludedIndicator" : true,
          "currency" : "CHF",
          "type" : "Some type of charge"
        }, {
          "amount" : "10.25",
          "chargesIncludedIndicator" : true,
          "currency" : "CHF",
          "type" : "Some type of charge"
        } ]
      },
      "counterparty" : {
        "agent" : {
          "clearingSystemMemberIdentification" : {
            "code" : "CHBCC",
            "memberId" : "00230"
          },
          "bic" : "bic"
        },
        "postalAddress" : {
          "unstructured" : {
            "country" : "CH",
            "addressLines" : [ "Robert Schneider SA", "Rue de la gare 24" ]
          },
          "structured" : {
            "country" : "CH",
            "streetName" : "Rue de la gare",
            "townName" : "Biel",
            "buildingNumber" : "24",
            "postCode" : "2501"
          }
        },
        "name" : "Hans Muster",
        "account" : {
          "identification" : "CH9300762011623852957",
          "type" : "IBAN"
        }
      },
      "instructedAmount" : {
        "amount" : "10.25",
        "targetCurrency" : "USD",
        "exchangeRate" : "0.957",
        "sourceCurrency" : "CHF",
        "exchangeIndicator" : "MULT"
      },
      "endToEndId" : "ENDTOENDID-01",
      "transactionId" : "TX12345A987",
      "remittanceReference" : {
        "reference" : "210000000003139471430009017",
        "type" : "SCOR"
      }
    }, {
      "transactionType" : "CRDT",
      "amount" : {
        "amount" : "10.25",
        "currency" : "CHF"
      },
      "remittanceInformation" : "Rechnung Nr. 408",
      "additionalTransactionInformation" : "additionalTransactionInformation",
      "bankTransactionCode" : {
        "domainCode" : "PMNT",
        "familyCode" : "RCDT",
        "subFamilyCode" : "DMCT"
      },
      "totalChargesAmount" : {
        "amount" : "10.25",
        "currency" : "CHF",
        "chargeRecords" : [ {
          "amount" : "10.25",
          "chargesIncludedIndicator" : true,
          "currency" : "CHF",
          "type" : "Some type of charge"
        }, {
          "amount" : "10.25",
          "chargesIncludedIndicator" : true,
          "currency" : "CHF",
          "type" : "Some type of charge"
        } ]
      },
      "counterparty" : {
        "agent" : {
          "clearingSystemMemberIdentification" : {
            "code" : "CHBCC",
            "memberId" : "00230"
          },
          "bic" : "bic"
        },
        "postalAddress" : {
          "unstructured" : {
            "country" : "CH",
            "addressLines" : [ "Robert Schneider SA", "Rue de la gare 24" ]
          },
          "structured" : {
            "country" : "CH",
            "streetName" : "Rue de la gare",
            "townName" : "Biel",
            "buildingNumber" : "24",
            "postCode" : "2501"
          }
        },
        "name" : "Hans Muster",
        "account" : {
          "identification" : "CH9300762011623852957",
          "type" : "IBAN"
        }
      },
      "instructedAmount" : {
        "amount" : "10.25",
        "targetCurrency" : "USD",
        "exchangeRate" : "0.957",
        "sourceCurrency" : "CHF",
        "exchangeIndicator" : "MULT"
      },
      "endToEndId" : "ENDTOENDID-01",
      "transactionId" : "TX12345A987",
      "remittanceReference" : {
        "reference" : "210000000003139471430009017",
        "type" : "SCOR"
      }
    } ],
    "entryId" : "ENTRY123456789",
    "transactionType" : "CRDT",
    "entryReferenceInternalId" : "010001628",
    "totalChargesAmount" : {
      "amount" : "10.25",
      "currency" : "CHF",
      "chargeRecords" : [ {
        "amount" : "10.25",
        "chargesIncludedIndicator" : true,
        "currency" : "CHF",
        "type" : "Some type of charge"
      }, {
        "amount" : "10.25",
        "chargesIncludedIndicator" : true,
        "currency" : "CHF",
        "type" : "Some type of charge"
      } ]
    },
    "additionalEntryInformation" : "additionalEntryInformation",
    "bookingDate" : "2018-10-29",
    "instructedAmount" : {
      "amount" : "10.25",
      "targetCurrency" : "USD",
      "exchangeRate" : "0.957",
      "sourceCurrency" : "CHF",
      "exchangeIndicator" : "MULT"
    },
    "entryReference" : "10001628"
  } ],
  "_links" : {
    "balance" : "/accounts/550e8400e29b11d4a716446655440000/balance",
    "self" : "/accounts/550e8400e29b11d4a716446655440000/statements",
    "account" : "/accounts/550e8400e29b11d4a716446655440000"
  },
  "iban" : "CH5481230000001998736",
  "designation" : "Checking Account"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

