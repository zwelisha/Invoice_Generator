from flask import Flask, render_template, request, jsonify
app = Flask(__name__)
@app.route('/')
def home():
    return render_template('index.html')

@app.route('/invoice')
def invoice():
    return render_template('invoice.html')

#  API endpoint for geeting data to send email
@app.route('/api/send_email', methods=['POST'])
def api_send_email():
    response = request.get_json()
    print(response)
    return jsonify(response)

if __name__ == '__main__':
    # Threaded option to enable multiple instances for multiple user access support
    app.run()