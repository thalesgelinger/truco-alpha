
# app = Flask(__name__)

from globals import Globals
from python_framework import initialize
from python_helper import log
globals = Globals(__file__,
    debugStatus = True,
    warningStatus = True,
    errorStatus = True,
    successStatus = True,
    failureStatus = True,
    settingStatus = True,
    printRootPathStatus = False)

import TrucoApi
app = TrucoApi.app
api = TrucoApi.api
jwt = TrucoApi.jwt

@initialize(api, defaultUrl = '/swagger', openInBrowser=False)
def runFlaskApplication(app):
    app.run(debug=True)

from flask_cors import CORS
from flask_socketio import SocketIO, send, emit
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app, cors_allowed_origins="*")
CORS(app)

@socketio.on("connect")
def on_connect():
    log.debug(on_connect, 'User Connected')

@socketio.on('leaveCard')
def leave_card(data):
    log.debug(leave_card, data)
    emit('play', data, broadcast=True)

if __name__ == '__main__' :
    runFlaskApplication(app)
