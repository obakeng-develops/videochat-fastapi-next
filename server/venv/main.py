from dotenv import load_dotenv
import os
import uuid

# FastAPI
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

# Twilio
import twilio.jwt.access_token
import twilio.jwt.access_token.grants
import twilio.rest

load_dotenv()

# Twilio Credentials
account_sid = os.environ['TWILIO_ACC_SID']
api_secret = os.environ['TWILIO_API_SECRET']
api_sid = os.environ['TWILIO_API_SID']
client = twilio.rest.Client(api_sid, api_secret, account_sid)


class Room(BaseModel):
    room_name: str


# Create a FastAPI app
app = FastAPI()

origins = [
    "http://127.0.0.1:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


def create_room(room_name: str):
    """
    Create or find a room.
    """
    try:
        client.video.rooms(room_name).fetch()
    except twilio.base.exceptions.TwilioRestException:
        client.video.rooms.create(unique_name=room_name, type='go')


def create_access_token(room_name: str):
    """
    Create an access token for a participant.
    """
    token = twilio.jwt.access_token.AccessToken(
        account_sid, api_sid, api_secret, identity=uuid.uuid4().int
    )

    # create video grant
    video_grant = twilio.jwt.access_token.grants.VideoGrant(room=room_name)

    # add video grant to access token
    token.add_grant(video_grant)
    return token


@app.post("/join")
def join(room: Room):
    """
    Join a room - http://127.0.0.1:8000/join
    """
    create_room(room.room_name)

    token = create_access_token(room.room_name)

    return {
        "token": token.to_jwt()
    }


@app.get("/")
def index():
    """
    Home page - http://127.0.0.1:8000/
    """
    return {
        "message": "hello",
        "status": 200
    }
