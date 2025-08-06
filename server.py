from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3
from datetime import datetime


app = Flask(__name__)
CORS(app)
DB_PATH = 'messages.db'

@app.route('/submit-message', methods=['POST'])
def submit_message():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')
    timestamp = datetime.now().isoformat()
    if not name or not email or not message:
        return jsonify({'success': False, 'error': 'Missing fields'}), 400
    try:
        conn = sqlite3.connect(DB_PATH)
        cursor = conn.cursor()
        cursor.execute(
            'INSERT INTO messages (name, email, message, timestamp) VALUES (?, ?, ?, ?)',
            (name, email, message, timestamp)
        )
        conn.commit()
        conn.close()
        return jsonify({'success': True})
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
