from flask import Flask, render_template, redirect, request, send_file
# from flask_mongoengine import MongoEngine

# from models.form_input import ContactFormInput
from utils.email_sender import send_email

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = './jacob_resume.pdf'
# Disable due to pythonanywhere free account dones't support
# app.config['MONGODB_SETTINGS'] = {
#     'db':
#         'portfolio',
#     'host':
#         'mongodb+srv://dbUser:dbUserPassword@webapi.fxspe.mongodb.net/portfolio'
# }
# db = MongoEngine(app)


@app.get('/')
@app.get('/<page>')
def get_page(page='index'):
    return render_template(f'{page}.html')


@app.get('/projects/<project_id>')
def get_project(project_id):
    return render_template(f'projects/{project_id}.html')


@app.get('/attachment/resume')
def get_resume():
    print('hi there')
    return send_file('jacob_resume.pdf')



@app.post('/submit_form')
def submit_form():
    raw_data = request.form.to_dict()
    # disable due to pythonanywhere free account doesn't support
    # data = ContactFormInput(**raw_data)
    # data.save(data)
    send_email(raw_data)
    return redirect('/contact_success')