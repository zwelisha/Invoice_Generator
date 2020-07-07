from flask import Flask, render_template
app = Flask(__name__)
@app.route('/')
def home():
    return render_template('index.html')

@app.route('/invoice')
def invoice():
    return render_template('invoice.html')

if __name__ == '__main__':
    # Threaded option to enable multiple instances for multiple user access support
    app.run()