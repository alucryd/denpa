from flask import Flask
from transmission import Transmission

app = Flask(__name__, instance_relative_config=True)
app.config.from_object('config')
app.config.from_pyfile('config.py')

t = Transmission(
    app.config['TRANSMISSION_URL'],
    app.config.get('TRANSMISSION_USER', ''),
    app.config.get('TRANSMISSION_PASSWORD', '')
)

import denpa.views

# from logicalhrm.blueprints import auth, leave_quotas, leave_types, leaves, users

# app.register_blueprint(auth.bp)
# app.register_blueprint(leave_quotas.bp)
# app.register_blueprint(leave_types.bp)
# app.register_blueprint(leaves.bp)
# app.register_blueprint(users.bp)
