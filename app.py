from flask import Flask, render_template
app = Flask(__name__)
@app.router('/')
def home():
    return render_template('index.html')
