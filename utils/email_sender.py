import smtplib
from email.mime.text import MIMEText
import json

temp_string = '''
    Hi there 👋!

    Thanks for your interest on me. I will get in touch to you soon!

    Kind regards,
    Jacob
'''


def send_email(data: dict, receiver_email='jacobwfk@gmail.com'):
    port = 465  # For SSL
    password = 'qvbcqjbkdjoypqbr'
    sender_email = 'jacobwfk.notification.service@gmail.com'
    message_to_people = MIMEText(temp_string)
    message_to_people[
        'Subject'] = '<no-reply> Thanks for reaching out to Jacob Wong!'
    message_to_people['From'] = sender_email
    message_to_people['To'] = receiver_email = data.get('email')
    message_to_self = MIMEText(json.dumps(data))
    message_to_self['Subject'] = 'Someone just find you from you website'
    message_to_self['From'] = sender_email
    message_to_self['To'] = 'jacobwfk@gmail.com'

    server = smtplib.SMTP_SSL('smtp.gmail.com', port)
    server.login(sender_email, password)
    server.sendmail(sender_email, [receiver_email],
                    message_to_people.as_string())
    server.sendmail(sender_email, ['jacobwfk@gmail.com'],
                    message_to_self.as_string())

    server.quit()


if __name__ == '__main__':
    send_email(
        {
            "name": "Heidi",
            "email": "gamiklg624@gmail.com",
            "phone": "",
            "subject": "hello",
            "message": "message body"
        }, 'gamiklg624@gmail.com')
