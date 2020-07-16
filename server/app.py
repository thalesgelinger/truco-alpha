from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_socketio import SocketIO, send, emit

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app, cors_allowed_origins="*")
CORS(app)

@app.route("/user", methods=['POST'])
def add_user():
    data = request.json
    return data["username"]

@app.route("/cards")
def give_cards():
    return jsonify([
        "trucoBasto1",
        "trucoEspada1",
        "trucoBasto3"
    ])

@socketio.on('join')
def join_room(data):
    print(data)
    emit('play', data)
    
@socketio.on('leaveCard')
def leave_card(card):
    print(card)
    emit('play', card)

if __name__ == '__main__':
    socketio.run(app)