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

from swagger_client.models.health_check_response_received_headers import HealthCheckResponseReceivedHeaders  # noqa: F401,E501


class HealthCheckResponse(object):
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
        'request_date_time': 'datetime',
        'received_headers': 'list[HealthCheckResponseReceivedHeaders]',
        'received_payload': 'str'
    }

    attribute_map = {
        'request_date_time': 'requestDateTime',
        'received_headers': 'receivedHeaders',
        'received_payload': 'receivedPayload'
    }

    def __init__(self, request_date_time=None, received_headers=None, received_payload=None):  # noqa: E501
        """HealthCheckResponse - a model defined in Swagger"""  # noqa: E501

        self._request_date_time = None
        self._received_headers = None
        self._received_payload = None
        self.discriminator = None

        if request_date_time is not None:
            self.request_date_time = request_date_time
        if received_headers is not None:
            self.received_headers = received_headers
        if received_payload is not None:
            self.received_payload = received_payload

    @property
    def request_date_time(self):
        """Gets the request_date_time of this HealthCheckResponse.  # noqa: E501


        :return: The request_date_time of this HealthCheckResponse.  # noqa: E501
        :rtype: datetime
        """
        return self._request_date_time

    @request_date_time.setter
    def request_date_time(self, request_date_time):
        """Sets the request_date_time of this HealthCheckResponse.


        :param request_date_time: The request_date_time of this HealthCheckResponse.  # noqa: E501
        :type: datetime
        """

        self._request_date_time = request_date_time

    @property
    def received_headers(self):
        """Gets the received_headers of this HealthCheckResponse.  # noqa: E501


        :return: The received_headers of this HealthCheckResponse.  # noqa: E501
        :rtype: list[HealthCheckResponseReceivedHeaders]
        """
        return self._received_headers

    @received_headers.setter
    def received_headers(self, received_headers):
        """Sets the received_headers of this HealthCheckResponse.


        :param received_headers: The received_headers of this HealthCheckResponse.  # noqa: E501
        :type: list[HealthCheckResponseReceivedHeaders]
        """

        self._received_headers = received_headers

    @property
    def received_payload(self):
        """Gets the received_payload of this HealthCheckResponse.  # noqa: E501


        :return: The received_payload of this HealthCheckResponse.  # noqa: E501
        :rtype: str
        """
        return self._received_payload

    @received_payload.setter
    def received_payload(self, received_payload):
        """Sets the received_payload of this HealthCheckResponse.


        :param received_payload: The received_payload of this HealthCheckResponse.  # noqa: E501
        :type: str
        """

        self._received_payload = received_payload

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
        if issubclass(HealthCheckResponse, dict):
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
        if not isinstance(other, HealthCheckResponse):
            return False

        return self.__dict__ == other.__dict__

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        return not self == other
