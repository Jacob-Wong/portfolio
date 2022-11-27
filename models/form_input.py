from datetime import datetime
import mongoengine as me


class ContactFormInput(me.Document):
    email = me.EmailField(required=True)
    message = me.StringField()
    name = me.StringField()
    phone = me.StringField()
    subject = me.StringField()
    date_time = me.DateTimeField(default=datetime.utcnow)