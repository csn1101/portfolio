import sqlite3

# Create/connect to the SQLite database
conn = sqlite3.connect('messages.db')
c = conn.cursor()

# Create a table for storing messages
c.execute('''
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    message TEXT,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
)
''')

conn.commit()
conn.close()
