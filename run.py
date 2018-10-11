import subprocess

from denpa import app

subprocess.run(['npx', 'webpack', '-d'])
app.run(host='0.0.0.0', port=5000)
