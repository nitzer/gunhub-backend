# Gunhub

## Description
Gunhub is a personal API project for my hobby : Gunpla Building!
This is an API made in `nestjs` that serves the purpose to feed the vue.js frontend (and keep learning about node and Nestjs).

This api does 3 things:

- Manages users
- Authentication
- Manages Posts

### User Management:
this is a simple module that contains controllers for the api endpoitns, a service that manages the CRUD for them and set up some middleware (and interceptors, another flavor of middleware :) to validate the requests into it's endpoints. has some events for when a user is registered (does nothing, I'm not going to send emails yet)

### Authentication:
Authentication handles it's own controller that validates the user's credentials and generates a JWT token to be used by the client to continue it's usage (the JWT expires after 24 hours) and allows the user to maintain a session while this token is fresh

### Post management:
This is a CRUD for posts, allows a user to upload a single post every 24 hours to maintain some quality over the amount of images users can post. this also handles the likes of the posts for the users (soon, with mongoose). emits an event when a user creates a new post, (does nothing, no emails yet).


## Project setup

```bash
$ npm install
```

### create the .env file
```bash
$ cp .env-example .env
```
update the configuration files and update the jwt_secret `bro`

### Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

```

## TODO
here's a list of features that may be added in the future:
- Disallow any other content-type that's not application/json
- Implement the config module and remove hardcoded variables form within the project.
- Add a related list of tools/assets used for the picture, like paints, nippers, sanding tools, etc
- notify users when a like happened
- Allow following users and only get notifications of them (and learn websockets ;p )
