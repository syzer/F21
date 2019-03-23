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

from swagger_client.models.common_clearing_system_member_identification import CommonClearingSystemMemberIdentification  # noqa: F401,E501


class PaymentCreditorAgent(object):
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
        'bic': 'str',
        'clearing_system_member_identification': 'CommonClearingSystemMemberIdentification'
    }

    attribute_map = {
        'bic': 'bic',
        'clearing_system_member_identification': 'clearingSystemMemberIdentification'
    }

    def __init__(self, bic=None, clearing_system_member_identification=None):  # noqa: E501
        """PaymentCreditorAgent - a model defined in Swagger"""  # noqa: E501

        self._bic = None
        self._clearing_system_member_identification = None
        self.discriminator = None

        if bic is not None:
            self.bic = bic
        if clearing_system_member_identification is not None:
            self.clearing_system_member_identification = clearing_system_member_identification

    @property
    def bic(self):
        """Gets the bic of this PaymentCreditorAgent.  # noqa: E501


        :return: The bic of this PaymentCreditorAgent.  # noqa: E501
        :rtype: str
        """
        return self._bic

    @bic.setter
    def bic(self, bic):
        """Sets the bic of this PaymentCreditorAgent.


        :param bic: The bic of this PaymentCreditorAgent.  # noqa: E501
        :type: str
        """

        self._bic = bic

    @property
    def clearing_system_member_identification(self):
        """Gets the clearing_system_member_identification of this PaymentCreditorAgent.  # noqa: E501


        :return: The clearing_system_member_identification of this PaymentCreditorAgent.  # noqa: E501
        :rtype: CommonClearingSystemMemberIdentification
        """
        return self._clearing_system_member_identification

    @clearing_system_member_identification.setter
    def clearing_system_member_identification(self, clearing_system_member_identification):
        """Sets the clearing_system_member_identification of this PaymentCreditorAgent.


        :param clearing_system_member_identification: The clearing_system_member_identification of this PaymentCreditorAgent.  # noqa: E501
        :type: CommonClearingSystemMemberIdentification
        """

        self._clearing_system_member_identification = clearing_system_member_identification

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
        if issubclass(PaymentCreditorAgent, dict):
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
        if not isinstance(other, PaymentCreditorAgent):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
