from flask import Flask, render_template, redirect, request
from flask_mongoengine import MongoEngine
from pprint import pprint

from models.form_input import FormInput
from utils.email_sender import send_email

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
    raw_data = request.form.to_dict()
    data = FormInput(**raw_data)
    data.save(data)
    send_email(data.email)
    return redirect('/contact_success')