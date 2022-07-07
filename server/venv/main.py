from fastapi import FastAPI
import os
import twilio.jwt.access_token
import twilio.jwt.access_tokne.grants
import twilio.rest

# Twilio Credentials
account_sid = os.environ['TWILIO_ACC_SID']
api_secret = os.environ['TWILIO_API_SECRET']
api_key = os.environ['TWILIO_API_KEY']

# Create a FastAPI app
app = FastAPI()


@app.get("/")
def index():
    return {
        "message": "hello",
        "status": 200
    }
