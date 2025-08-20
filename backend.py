from flask import *

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/form')
def form():
    return render_template('form.html')


@app.route('/planA')
def planA():
    return render_template('planA.html')


if __name__ == '__main__':
    app.run(debug=True)