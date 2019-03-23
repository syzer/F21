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


class PaymentIsrRemittanceReference(object):
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
        'type': 'str',
        'reference': 'str'
    }

    attribute_map = {
        'type': 'type',
        'reference': 'reference'
    }

    def __init__(self, type=None, reference=None):  # noqa: E501
        """PaymentIsrRemittanceReference - a model defined in Swagger"""  # noqa: E501

        self._type = None
        self._reference = None
        self.discriminator = None

        if type is not None:
            self.type = type
        if reference is not None:
            self.reference = reference

    @property
    def type(self):
        """Gets the type of this PaymentIsrRemittanceReference.  # noqa: E501


        :return: The type of this PaymentIsrRemittanceReference.  # noqa: E501
        :rtype: str
        """
        return self._type

    @type.setter
    def type(self, type):
        """Sets the type of this PaymentIsrRemittanceReference.


        :param type: The type of this PaymentIsrRemittanceReference.  # noqa: E501
        :type: str
        """
        allowed_values = ["ISR"]  # noqa: E501
        if type not in allowed_values:
            raise ValueError(
                "Invalid value for `type` ({0}), must be one of {1}"  # noqa: E501
                .format(type, allowed_values)
            )

        self._type = type

    @property
    def reference(self):
        """Gets the reference of this PaymentIsrRemittanceReference.  # noqa: E501


        :return: The reference of this PaymentIsrRemittanceReference.  # noqa: E501
        :rtype: str
        """
        return self._reference

    @reference.setter
    def reference(self, reference):
        """Sets the reference of this PaymentIsrRemittanceReference.


        :param reference: The reference of this PaymentIsrRemittanceReference.  # noqa: E501
        :type: str
        """
        if reference is not None and len(reference) > 35:
            raise ValueError("Invalid value for `reference`, length must be less than or equal to `35`")  # noqa: E501

        self._reference = reference

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
        if issubclass(PaymentIsrRemittanceReference, dict):
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
        if not isinstance(other, PaymentIsrRemittanceReference):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
