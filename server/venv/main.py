from fastapi import FastAPI, Request
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
        account_sid, api_key, api_secret, identity=uuid.uuid4().int
    )

    # create video grant
    video_grant = twilio.jwt.access_token.grants.VideoGrant(room=room_name)

    # add video grant to access token
    token.add_grant(video_grant)
    return token


@app.post("/join")
def join(request: Request):
    """
    Join a room
    """
    room_name = request.json.get("room_name")

    create_room(room_name)

    token = create_access_token(room_name)

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
