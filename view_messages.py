import sqlite3

DB_PATH = 'messages.db'

conn = sqlite3.connect(DB_PATH)
cursor = conn.cursor()
cursor.execute('SELECT id, name, email, message, timestamp FROM messages')
rows = cursor.fetchall()
conn.close()

for row in rows:
    print(f"ID: {row[0]} | Name: {row[1]} | Email: {row[2]} | Message: {row[3]} | Timestamp: {row[4]}")
