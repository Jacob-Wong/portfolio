from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)


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
    return redirect('/contact_success')