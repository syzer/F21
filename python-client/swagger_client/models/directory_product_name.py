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


class DirectoryProductName(object):
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
        'de': 'str',
        'en': 'str',
        'fr': 'str',
        'it': 'str'
    }

    attribute_map = {
        'de': 'de',
        'en': 'en',
        'fr': 'fr',
        'it': 'it'
    }

    def __init__(self, de=None, en=None, fr=None, it=None):  # noqa: E501
        """DirectoryProductName - a model defined in Swagger"""  # noqa: E501

        self._de = None
        self._en = None
        self._fr = None
        self._it = None
        self.discriminator = None

        self.de = de
        self.en = en
        self.fr = fr
        self.it = it

    @property
    def de(self):
        """Gets the de of this DirectoryProductName.  # noqa: E501


        :return: The de of this DirectoryProductName.  # noqa: E501
        :rtype: str
        """
        return self._de

    @de.setter
    def de(self, de):
        """Sets the de of this DirectoryProductName.


        :param de: The de of this DirectoryProductName.  # noqa: E501
        :type: str
        """
        if de is None:
            raise ValueError("Invalid value for `de`, must not be `None`")  # noqa: E501
        if de is not None and len(de) > 50:
            raise ValueError("Invalid value for `de`, length must be less than or equal to `50`")  # noqa: E501

        self._de = de

    @property
    def en(self):
        """Gets the en of this DirectoryProductName.  # noqa: E501


        :return: The en of this DirectoryProductName.  # noqa: E501
        :rtype: str
        """
        return self._en

    @en.setter
    def en(self, en):
        """Sets the en of this DirectoryProductName.


        :param en: The en of this DirectoryProductName.  # noqa: E501
        :type: str
        """
        if en is None:
            raise ValueError("Invalid value for `en`, must not be `None`")  # noqa: E501
        if en is not None and len(en) > 50:
            raise ValueError("Invalid value for `en`, length must be less than or equal to `50`")  # noqa: E501

        self._en = en

    @property
    def fr(self):
        """Gets the fr of this DirectoryProductName.  # noqa: E501


        :return: The fr of this DirectoryProductName.  # noqa: E501
        :rtype: str
        """
        return self._fr

    @fr.setter
    def fr(self, fr):
        """Sets the fr of this DirectoryProductName.


        :param fr: The fr of this DirectoryProductName.  # noqa: E501
        :type: str
        """
        if fr is None:
            raise ValueError("Invalid value for `fr`, must not be `None`")  # noqa: E501
        if fr is not None and len(fr) > 50:
            raise ValueError("Invalid value for `fr`, length must be less than or equal to `50`")  # noqa: E501

        self._fr = fr

    @property
    def it(self):
        """Gets the it of this DirectoryProductName.  # noqa: E501


        :return: The it of this DirectoryProductName.  # noqa: E501
        :rtype: str
        """
        return self._it

    @it.setter
    def it(self, it):
        """Sets the it of this DirectoryProductName.


        :param it: The it of this DirectoryProductName.  # noqa: E501
        :type: str
        """
        if it is None:
            raise ValueError("Invalid value for `it`, must not be `None`")  # noqa: E501
        if it is not None and len(it) > 50:
            raise ValueError("Invalid value for `it`, length must be less than or equal to `50`")  # noqa: E501

        self._it = it

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
        if issubclass(DirectoryProductName, dict):
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
        if not isinstance(other, DirectoryProductName):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
