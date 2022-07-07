from fastapi import FastAPI
import os
import uuid
import twilio.jwt.access_token
import twilio.jwt.access_tokne.grants
import twilio.rest

# Twilio Credentials
account_sid = os.environ['TWILIO_ACC_SID']
api_secret = os.environ['TWILIO_API_SECRET']
api_key = os.environ['TWILIO_API_KEY']
client = twilio.rest.Client(api_key, api_secret, account_sid)

# Create a FastAPI app
app = FastAPI()


def create_room(room_name: str):
    try:
        client.video.rooms(room_name).fetch()
    except twilio.base.exceptions.TwilioRestException:
        client.video.rooms.create(unique_name=room_name, type='go')


@app.get("/")
def index():
    return {
        "message": "hello",
        "status": 200
    }
