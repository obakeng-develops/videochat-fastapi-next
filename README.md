# Demo Video Chat with FastAPI :rocket:, Next :sunny: & Twilio :movie_camera:

This application is part of a tutorial to teach how to integrate Twilio (video service provider) with FastAPI (for processing backend) and NextJS (for displaying to the client).

![Toogle Meet](https://user-images.githubusercontent.com/60041842/179915182-20a1b950-112e-4fdc-83f9-a70ff5e1a9a5.jpg)


## Yet To Complete

- [ ] Fetch Access Token from backend
- [ ] Retrieve user tracks (camera and audio)
- [ ] Join the user to a room on the client

## Usage

To clone the project, run this command:

- `git clone https://github.com/obakeng-develops/videochat-fastapi-next.git`

The project still has to make a connection between backend and frontend.

FastAPI in the background takes care of creating a room, creating an access token for the user and joining them to a room.

NextJS takes care of serving the home page as well as the room that the user joins.
