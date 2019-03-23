# coding: utf-8

"""
    Swiss Corporate API

    This is the release candidate version of the \"Swiss Corporate API\" specification.   # noqa: E501

    OpenAPI spec version: 1.0.0.2-SNAPSHOT
    Contact: swisscorpapi@six-group.com
    Generated by: https://github.com/swagger-api/swagger-codegen.git
"""


import pprint
import re  # noqa: F401

import six


class AccountTransactionInstructedAmount(object):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """

    """
    Attributes:
      swagger_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    swagger_types = {
        'amount': 'str',
        'source_currency': 'str',
        'target_currency': 'str',
        'exchange_rate': 'str',
        'exchange_indicator': 'str'
    }

    attribute_map = {
        'amount': 'amount',
        'source_currency': 'sourceCurrency',
        'target_currency': 'targetCurrency',
        'exchange_rate': 'exchangeRate',
        'exchange_indicator': 'exchangeIndicator'
    }

    def __init__(self, amount=None, source_currency=None, target_currency=None, exchange_rate=None, exchange_indicator=None):  # noqa: E501
        """AccountTransactionInstructedAmount - a model defined in Swagger"""  # noqa: E501

        self._amount = None
        self._source_currency = None
        self._target_currency = None
        self._exchange_rate = None
        self._exchange_indicator = None
        self.discriminator = None

        self.amount = amount
        self.source_currency = source_currency
        self.target_currency = target_currency
        if exchange_rate is not None:
            self.exchange_rate = exchange_rate
        if exchange_indicator is not None:
            self.exchange_indicator = exchange_indicator

    @property
    def amount(self):
        """Gets the amount of this AccountTransactionInstructedAmount.  # noqa: E501


        :return: The amount of this AccountTransactionInstructedAmount.  # noqa: E501
        :rtype: str
        """
        return self._amount

    @amount.setter
    def amount(self, amount):
        """Sets the amount of this AccountTransactionInstructedAmount.


        :param amount: The amount of this AccountTransactionInstructedAmount.  # noqa: E501
        :type: str
        """
        if amount is None:
            raise ValueError("Invalid value for `amount`, must not be `None`")  # noqa: E501
        if amount is not None and len(amount) > 18:
            raise ValueError("Invalid value for `amount`, length must be less than or equal to `18`")  # noqa: E501
        if amount is not None and not re.search(r'[0-9]{1,12}([.][0-9]{1,5})?', amount):  # noqa: E501
            raise ValueError(r"Invalid value for `amount`, must be a follow pattern or equal to `/[0-9]{1,12}([.][0-9]{1,5})?/`")  # noqa: E501

        self._amount = amount

    @property
    def source_currency(self):
        """Gets the source_currency of this AccountTransactionInstructedAmount.  # noqa: E501


        :return: The source_currency of this AccountTransactionInstructedAmount.  # noqa: E501
        :rtype: str
        """
        return self._source_currency

    @source_currency.setter
    def source_currency(self, source_currency):
        """Sets the source_currency of this AccountTransactionInstructedAmount.


        :param source_currency: The source_currency of this AccountTransactionInstructedAmount.  # noqa: E501
        :type: str
        """
        if source_currency is None:
            raise ValueError("Invalid value for `source_currency`, must not be `None`")  # noqa: E501

        self._source_currency = source_currency

    @property
    def target_currency(self):
        """Gets the target_currency of this AccountTransactionInstructedAmount.  # noqa: E501


        :return: The target_currency of this AccountTransactionInstructedAmount.  # noqa: E501
        :rtype: str
        """
        return self._target_currency

    @target_currency.setter
    def target_currency(self, target_currency):
        """Sets the target_currency of this AccountTransactionInstructedAmount.


        :param target_currency: The target_currency of this AccountTransactionInstructedAmount.  # noqa: E501
        :type: str
        """
        if target_currency is None:
            raise ValueError("Invalid value for `target_currency`, must not be `None`")  # noqa: E501

        self._target_currency = target_currency

    @property
    def exchange_rate(self):
        """Gets the exchange_rate of this AccountTransactionInstructedAmount.  # noqa: E501


        :return: The exchange_rate of this AccountTransactionInstructedAmount.  # noqa: E501
        :rtype: str
        """
        return self._exchange_rate

    @exchange_rate.setter
    def exchange_rate(self, exchange_rate):
        """Sets the exchange_rate of this AccountTransactionInstructedAmount.


        :param exchange_rate: The exchange_rate of this AccountTransactionInstructedAmount.  # noqa: E501
        :type: str
        """

        self._exchange_rate = exchange_rate

    @property
    def exchange_indicator(self):
        """Gets the exchange_indicator of this AccountTransactionInstructedAmount.  # noqa: E501


        :return: The exchange_indicator of this AccountTransactionInstructedAmount.  # noqa: E501
        :rtype: str
        """
        return self._exchange_indicator

    @exchange_indicator.setter
    def exchange_indicator(self, exchange_indicator):
        """Sets the exchange_indicator of this AccountTransactionInstructedAmount.


        :param exchange_indicator: The exchange_indicator of this AccountTransactionInstructedAmount.  # noqa: E501
        :type: str
        """

        self._exchange_indicator = exchange_indicator

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.swagger_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value
        if issubclass(AccountTransactionInstructedAmount, dict):
            for key, value in self.items():
                result[key] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, AccountTransactionInstructedAmount):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
