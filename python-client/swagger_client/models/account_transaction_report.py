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

from swagger_client.models.account_transaction_entry import AccountTransactionEntry  # noqa: F401,E501
from swagger_client.models.account_transaction_report_links import AccountTransactionReportLinks  # noqa: F401,E501


class AccountTransactionReport(object):
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
        'iban': 'str',
        'designation': 'str',
        'entries': 'list[AccountTransactionEntry]',
        'links': 'AccountTransactionReportLinks'
    }

    attribute_map = {
        'iban': 'iban',
        'designation': 'designation',
        'entries': 'entries',
        'links': '_links'
    }

    def __init__(self, iban=None, designation=None, entries=None, links=None):  # noqa: E501
        """AccountTransactionReport - a model defined in Swagger"""  # noqa: E501

        self._iban = None
        self._designation = None
        self._entries = None
        self._links = None
        self.discriminator = None

        self.iban = iban
        if designation is not None:
            self.designation = designation
        self.entries = entries
        if links is not None:
            self.links = links

    @property
    def iban(self):
        """Gets the iban of this AccountTransactionReport.  # noqa: E501


        :return: The iban of this AccountTransactionReport.  # noqa: E501
        :rtype: str
        """
        return self._iban

    @iban.setter
    def iban(self, iban):
        """Sets the iban of this AccountTransactionReport.


        :param iban: The iban of this AccountTransactionReport.  # noqa: E501
        :type: str
        """
        if iban is None:
            raise ValueError("Invalid value for `iban`, must not be `None`")  # noqa: E501

        self._iban = iban

    @property
    def designation(self):
        """Gets the designation of this AccountTransactionReport.  # noqa: E501


        :return: The designation of this AccountTransactionReport.  # noqa: E501
        :rtype: str
        """
        return self._designation

    @designation.setter
    def designation(self, designation):
        """Sets the designation of this AccountTransactionReport.


        :param designation: The designation of this AccountTransactionReport.  # noqa: E501
        :type: str
        """

        self._designation = designation

    @property
    def entries(self):
        """Gets the entries of this AccountTransactionReport.  # noqa: E501


        :return: The entries of this AccountTransactionReport.  # noqa: E501
        :rtype: list[AccountTransactionEntry]
        """
        return self._entries

    @entries.setter
    def entries(self, entries):
        """Sets the entries of this AccountTransactionReport.


        :param entries: The entries of this AccountTransactionReport.  # noqa: E501
        :type: list[AccountTransactionEntry]
        """
        if entries is None:
            raise ValueError("Invalid value for `entries`, must not be `None`")  # noqa: E501

        self._entries = entries

    @property
    def links(self):
        """Gets the links of this AccountTransactionReport.  # noqa: E501


        :return: The links of this AccountTransactionReport.  # noqa: E501
        :rtype: AccountTransactionReportLinks
        """
        return self._links

    @links.setter
    def links(self, links):
        """Sets the links of this AccountTransactionReport.


        :param links: The links of this AccountTransactionReport.  # noqa: E501
        :type: AccountTransactionReportLinks
        """

        self._links = links

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
        if issubclass(AccountTransactionReport, dict):
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
        if not isinstance(other, AccountTransactionReport):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
