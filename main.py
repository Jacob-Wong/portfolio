from flask import Flask, url_for, render_template

app = Flask(__name__)


@app.get('/')
def index():
    return render_template('index.html')


@app.get('/about')
def about():
    return render_template('about.html')


@app.get('/components')
def components():
    return render_template('components.html')


@app.get('/contact')
def contact():
    return render_template('contact.html')


@app.get('/work')
def work():
    return render_template('work.html')


@app.get('/works')
def works():
    return render_template('works.html')