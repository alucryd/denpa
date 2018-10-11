from flask import Flask
from denpa.transmission import Transmission

app = Flask(__name__, instance_relative_config=True)
app.config.from_object('config')
app.config.from_pyfile('config.py')

t = Transmission(
    app.config['TRANSMISSION_URL'],
    app.config.get('TRANSMISSION_USER', ''),
    app.config.get('TRANSMISSION_PASSWORD', '')
)

import denpa.views
