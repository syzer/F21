from flask import Flask, request
import json
from discounts_server.migros_services import get_ratings, get_products

app = Flask(__name__)


@app.route('/')
def hello_world():
    return "Welcome to F21"

@app.route('/products')
def products():

    try:
        limit = request.args.get('limit')
    except Exception as inst:
        print(type(inst))  # the exception instance
        print(inst.args)  # arguments stored in .args
        print(inst)
        limit = 20

    products_response = get_products(limit)
    json_response = json.loads(products_response.text)
    return json.dumps(json_response)
