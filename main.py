from flask import Flask, render_template, redirect, request
from flask_mongoengine import MongoEngine
from pprint import pprint

from model.form_input import FormInput

app = Flask(__name__)
app.config['MONGODB_SETTINGS'] = {
    'db': 'test_portfolio',
    'host': 'localhost',
    'port': 27017
}
db = MongoEngine(app)


@app.get('/')
@app.get('/<page>')
def get_page(page='index'):
    return render_template(f'{page}.html')


@app.route('/projects/<project_id>')
def get_project(project_id):
    print(project_id)
    return render_template(f'projects/{project_id}.html')


@app.post('/submit_form')
def submit_form():
    data = FormInput(**request.form.to_dict())
    data.save(data)
    return redirect('/contact_success')


@app.get('/test_db')
def test_db():

    ...