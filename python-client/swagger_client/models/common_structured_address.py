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


class CommonStructuredAddress(object):
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
        'street_name': 'str',
        'building_number': 'str',
        'post_code': 'str',
        'town_name': 'str',
        'country': 'str'
    }

    attribute_map = {
        'street_name': 'streetName',
        'building_number': 'buildingNumber',
        'post_code': 'postCode',
        'town_name': 'townName',
        'country': 'country'
    }

    def __init__(self, street_name=None, building_number=None, post_code=None, town_name=None, country=None):  # noqa: E501
        """CommonStructuredAddress - a model defined in Swagger"""  # noqa: E501

        self._street_name = None
        self._building_number = None
        self._post_code = None
        self._town_name = None
        self._country = None
        self.discriminator = None

        self.street_name = street_name
        if building_number is not None:
            self.building_number = building_number
        self.post_code = post_code
        self.town_name = town_name
        self.country = country

    @property
    def street_name(self):
        """Gets the street_name of this CommonStructuredAddress.  # noqa: E501


        :return: The street_name of this CommonStructuredAddress.  # noqa: E501
        :rtype: str
        """
        return self._street_name

    @street_name.setter
    def street_name(self, street_name):
        """Sets the street_name of this CommonStructuredAddress.


        :param street_name: The street_name of this CommonStructuredAddress.  # noqa: E501
        :type: str
        """
        if street_name is None:
            raise ValueError("Invalid value for `street_name`, must not be `None`")  # noqa: E501
        if street_name is not None and len(street_name) > 70:
            raise ValueError("Invalid value for `street_name`, length must be less than or equal to `70`")  # noqa: E501

        self._street_name = street_name

    @property
    def building_number(self):
        """Gets the building_number of this CommonStructuredAddress.  # noqa: E501


        :return: The building_number of this CommonStructuredAddress.  # noqa: E501
        :rtype: str
        """
        return self._building_number

    @building_number.setter
    def building_number(self, building_number):
        """Sets the building_number of this CommonStructuredAddress.


        :param building_number: The building_number of this CommonStructuredAddress.  # noqa: E501
        :type: str
        """
        if building_number is not None and len(building_number) > 16:
            raise ValueError("Invalid value for `building_number`, length must be less than or equal to `16`")  # noqa: E501

        self._building_number = building_number

    @property
    def post_code(self):
        """Gets the post_code of this CommonStructuredAddress.  # noqa: E501


        :return: The post_code of this CommonStructuredAddress.  # noqa: E501
        :rtype: str
        """
        return self._post_code

    @post_code.setter
    def post_code(self, post_code):
        """Sets the post_code of this CommonStructuredAddress.


        :param post_code: The post_code of this CommonStructuredAddress.  # noqa: E501
        :type: str
        """
        if post_code is None:
            raise ValueError("Invalid value for `post_code`, must not be `None`")  # noqa: E501
        if post_code is not None and len(post_code) > 16:
            raise ValueError("Invalid value for `post_code`, length must be less than or equal to `16`")  # noqa: E501

        self._post_code = post_code

    @property
    def town_name(self):
        """Gets the town_name of this CommonStructuredAddress.  # noqa: E501


        :return: The town_name of this CommonStructuredAddress.  # noqa: E501
        :rtype: str
        """
        return self._town_name

    @town_name.setter
    def town_name(self, town_name):
        """Sets the town_name of this CommonStructuredAddress.


        :param town_name: The town_name of this CommonStructuredAddress.  # noqa: E501
        :type: str
        """
        if town_name is None:
            raise ValueError("Invalid value for `town_name`, must not be `None`")  # noqa: E501
        if town_name is not None and len(town_name) > 35:
            raise ValueError("Invalid value for `town_name`, length must be less than or equal to `35`")  # noqa: E501

        self._town_name = town_name

    @property
    def country(self):
        """Gets the country of this CommonStructuredAddress.  # noqa: E501


        :return: The country of this CommonStructuredAddress.  # noqa: E501
        :rtype: str
        """
        return self._country

    @country.setter
    def country(self, country):
        """Sets the country of this CommonStructuredAddress.


        :param country: The country of this CommonStructuredAddress.  # noqa: E501
        :type: str
        """
        if country is None:
            raise ValueError("Invalid value for `country`, must not be `None`")  # noqa: E501
        if country is not None and len(country) > 2:
            raise ValueError("Invalid value for `country`, length must be less than or equal to `2`")  # noqa: E501

        self._country = country

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
        if issubclass(CommonStructuredAddress, dict):
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
        if not isinstance(other, CommonStructuredAddress):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
