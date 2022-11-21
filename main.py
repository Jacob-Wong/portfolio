from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)


@app.get('/')
@app.get('/<page>')
def get_page(page='index'):
    return render_template(f'{page}.html')

@app.post('/submit_form')
def submit_form():
    return redirect('/contact_success')