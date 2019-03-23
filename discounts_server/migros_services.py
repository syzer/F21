import json
import requests


def get_products(limit=20):
    """
    Retrieves the products using Migros API
    :param limit: Max number of products
    :return: The products information in JSON
    """
    headers = {
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Origin': 'https://produkte.migros.ch',
        'Accept-Language': 'en',
    }

    params = (
        ('region', 'national'),
        ('is_variant', '0'),
        ('sort', 'score'),
        ('order', 'desc'),
        ('facet_size', '0'),
        ('extra_facets[]', ['category', 'm_check_enabled']),
        ('limit', limit),
        ('offset', '0'),
        ('key', 'jutu7razu3uyuxUc'),
        ('lang', 'de'),
    )

    response = requests.get('https://web-api.migros.ch/widgets/product_fragments_json', headers=headers, params=params)
    json_response = json.loads(response.text)
    return json_response


def get_ratings(item_ids):
    """
    Returns the ratings for the given products
    :param item_ids: The item ids to receive rating of
    :return: Returns the rating values for items in JSON
    """

    assert(item_ids is not None)

    headers = {
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Origin': 'https://produkte.migros.ch',
        'Accept-Language': 'de'
    }

    params = (
        ('key', 'jutu7razu3uyuxUc'),
        ('lang', 'de'),
        ('item_ids', item_ids))

    response = requests.get('https://web-api.migros.ch/widgets/ratings/product/items', headers=headers, params=params)
    json_response = json.loads(response.text)
    return json_response

