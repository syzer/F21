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

from swagger_client.models.common_error_type import CommonErrorType  # noqa: F401,E501


class CommonErrorResponse(object):
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
        'type': 'CommonErrorType',
        'title': 'str',
        'detail': 'str',
        'instance': 'str'
    }

    attribute_map = {
        'type': 'type',
        'title': 'title',
        'detail': 'detail',
        'instance': 'instance'
    }

    def __init__(self, type=None, title=None, detail=None, instance=None):  # noqa: E501
        """CommonErrorResponse - a model defined in Swagger"""  # noqa: E501

        self._type = None
        self._title = None
        self._detail = None
        self._instance = None
        self.discriminator = None

        if type is not None:
            self.type = type
        if title is not None:
            self.title = title
        if detail is not None:
            self.detail = detail
        if instance is not None:
            self.instance = instance

    @property
    def type(self):
        """Gets the type of this CommonErrorResponse.  # noqa: E501


        :return: The type of this CommonErrorResponse.  # noqa: E501
        :rtype: CommonErrorType
        """
        return self._type

    @type.setter
    def type(self, type):
        """Sets the type of this CommonErrorResponse.


        :param type: The type of this CommonErrorResponse.  # noqa: E501
        :type: CommonErrorType
        """

        self._type = type

    @property
    def title(self):
        """Gets the title of this CommonErrorResponse.  # noqa: E501


        :return: The title of this CommonErrorResponse.  # noqa: E501
        :rtype: str
        """
        return self._title

    @title.setter
    def title(self, title):
        """Sets the title of this CommonErrorResponse.


        :param title: The title of this CommonErrorResponse.  # noqa: E501
        :type: str
        """

        self._title = title

    @property
    def detail(self):
        """Gets the detail of this CommonErrorResponse.  # noqa: E501


        :return: The detail of this CommonErrorResponse.  # noqa: E501
        :rtype: str
        """
        return self._detail

    @detail.setter
    def detail(self, detail):
        """Sets the detail of this CommonErrorResponse.


        :param detail: The detail of this CommonErrorResponse.  # noqa: E501
        :type: str
        """

        self._detail = detail

    @property
    def instance(self):
        """Gets the instance of this CommonErrorResponse.  # noqa: E501


        :return: The instance of this CommonErrorResponse.  # noqa: E501
        :rtype: str
        """
        return self._instance

    @instance.setter
    def instance(self, instance):
        """Sets the instance of this CommonErrorResponse.


        :param instance: The instance of this CommonErrorResponse.  # noqa: E501
        :type: str
        """

        self._instance = instance

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
        if issubclass(CommonErrorResponse, dict):
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
        if not isinstance(other, CommonErrorResponse):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
