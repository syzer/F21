'use strict';


/**
 * Retrieve a payment submission
 *
 * authorization String Bearer followed by a base64 encoded OAuth access token
 * submissionId String id of payment submission
 * xCorAPITargetID String ID that identifies the provider (e.g., a financial institution). (SCOPE: SIX)
 * xCorAPIClientID String ID of the client forwarded to the provider. (SCOPE: FI)
 * xCorrelationID String Unique ID (defined by the caller) which will be reflected back in the response.
 * userAgent String Name and version of the of the Client software
 * returns paymentSubmissionRequest
 **/
exports.retrievePaymentSubmission = function(authorization,submissionId,xCorAPITargetID,xCorAPIClientID,xCorrelationID,userAgent) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "initiatingPartyId" : "TPP01746",
  "bookingInstruction" : "BATCHBOOKING_SALA_CND",
  "debtorAccount" : {
    "identification" : "CH9300762011623852957",
    "type" : "IBAN"
  },
  "requestedExecutionDate" : "2018-04-07",
  "messageId" : "eb6305c91f7f49deaed016487c27b42d",
  "transactions" : [ {
    "otherDetails" : {
      "chargeBearer" : "SHAR",
      "creditorAgent" : {
        "clearingSystemMemberIdentification" : {
          "code" : "CHBCC",
          "memberId" : "00230"
        },
        "bic" : "BDEMMXMM"
      },
      "creditorAccount" : {
        "identification" : "762011623852957",
        "type" : "OTHER"
      },
      "creditor" : {
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
        "name" : "name"
      },
      "remittanceReference" : {
        "reference" : "210000000003139471430009017",
        "type" : "SCOR"
      }
    },
    "ibanDetails" : {
      "chargeBearer" : "SHAR",
      "creditorAgent" : {
        "clearingSystemMemberIdentification" : {
          "code" : "CHBCC",
          "memberId" : "00230"
        },
        "bic" : "BDEMMXMM"
      },
      "remittanceInformation" : "Verguetung Juli",
      "creditorAccount" : {
        "identification" : "CH9300762011623852957",
        "type" : "IBAN"
      },
      "sepaIndicator" : true,
      "creditor" : {
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
        "name" : "name"
      },
      "remittanceReference" : {
        "reference" : "210000000003139471430009017",
        "type" : "SCOR"
      }
    },
    "instructionId" : "INSTR-001",
    "instructedAmount" : {
      "amount" : "10.25",
      "currency" : "CHF"
    },
    "endToEndId" : "ENDTOENDID-001",
    "isrDetails" : {
      "creditorAccount" : {
        "identification" : "762011623852957",
        "type" : "OTHER"
      },
      "creditor" : {
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
        "name" : "name"
      },
      "remittanceReference" : {
        "reference" : "210000000003139471430009017",
        "type" : "ISR"
      }
    }
  }, {
    "otherDetails" : {
      "chargeBearer" : "SHAR",
      "creditorAgent" : {
        "clearingSystemMemberIdentification" : {
          "code" : "CHBCC",
          "memberId" : "00230"
        },
        "bic" : "BDEMMXMM"
      },
      "creditorAccount" : {
        "identification" : "762011623852957",
        "type" : "OTHER"
      },
      "creditor" : {
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
        "name" : "name"
      },
      "remittanceReference" : {
        "reference" : "210000000003139471430009017",
        "type" : "SCOR"
      }
    },
    "ibanDetails" : {
      "chargeBearer" : "SHAR",
      "creditorAgent" : {
        "clearingSystemMemberIdentification" : {
          "code" : "CHBCC",
          "memberId" : "00230"
        },
        "bic" : "BDEMMXMM"
      },
      "remittanceInformation" : "Verguetung Juli",
      "creditorAccount" : {
        "identification" : "CH9300762011623852957",
        "type" : "IBAN"
      },
      "sepaIndicator" : true,
      "creditor" : {
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
        "name" : "name"
      },
      "remittanceReference" : {
        "reference" : "210000000003139471430009017",
        "type" : "SCOR"
      }
    },
    "instructionId" : "INSTR-001",
    "instructedAmount" : {
      "amount" : "10.25",
      "currency" : "CHF"
    },
    "endToEndId" : "ENDTOENDID-001",
    "isrDetails" : {
      "creditorAccount" : {
        "identification" : "762011623852957",
        "type" : "OTHER"
      },
      "creditor" : {
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
        "name" : "name"
      },
      "remittanceReference" : {
        "reference" : "210000000003139471430009017",
        "type" : "ISR"
      }
    }
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve payment submission status information
 *
 * authorization String Bearer followed by a base64 encoded OAuth access token
 * submissionId String id of payment submission
 * xCorAPITargetID String ID that identifies the provider (e.g., a financial institution). (SCOPE: SIX)
 * xCorAPIClientID String ID of the client forwarded to the provider. (SCOPE: FI)
 * xCorrelationID String Unique ID (defined by the caller) which will be reflected back in the response.
 * userAgent String Name and version of the of the Client software
 * returns paymentSubmissionStatus
 **/
exports.retrievePaymentSubmissionStatus = function(authorization,submissionId,xCorAPITargetID,xCorAPIClientID,xCorrelationID,userAgent) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "messageId" : "eb6305c91f7f49deaed016487c27b42d",
  "transactions" : [ {
    "reasonInformation" : "currency USD not allowed for payment type ISR",
    "instructionId" : "DNCS-20180322-IXN0-TXN0",
    "reasonCode" : "CURR",
    "statusCode" : "RJCT"
  }, {
    "reasonInformation" : "currency USD not allowed for payment type ISR",
    "instructionId" : "DNCS-20180322-IXN0-TXN0",
    "reasonCode" : "CURR",
    "statusCode" : "RJCT"
  } ],
  "statusCode" : "PART"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Submit payment instructions
 *
 * authorization String Bearer followed by a base64 encoded OAuth access token
 * xCorAPITargetID String ID that identifies the provider (e.g., a financial institution). (SCOPE: SIX)
 * xCorAPIClientID String ID of the client forwarded to the provider. (SCOPE: FI)
 * xCorrelationID String Unique ID (defined by the caller) which will be reflected back in the response.
 * userAgent String Name and version of the of the Client software
 * xPSUIPAddress String IP address of the user initiating the operation
 * xPSUUserAgent String User agent of the user initiating the operation
 * body PaymentSubmissionRequest Payment instruction details as defined by data model. 
 * no response value expected for this operation
 **/
exports.submitPaymentInstructions = function(authorization,xCorAPITargetID,xCorAPIClientID,xCorrelationID,userAgent,xPSUIPAddress,xPSUUserAgent,body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

