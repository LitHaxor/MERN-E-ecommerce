# Node JS Projects

## REST API for NODE JS

Building a rest api using node JS, a course from [Pirple.com](pirple.com).

This app used no packages from NPM.

### Uptime Monitor APP

An "uptime monitor" allows users to enter URLs they want monitored, and receive alerts wen those resources go "down " or "up".

*Features:*


- Uptime Checks
- SMS uptime alerts
- Signin
- Signout


*Requirements:*

1. The API listens on a PORT and accepts incoming HTTP request for POST, GET, PUT, DELETE and HEAD.
2. The API allows a client to connect, then create a new user, then edit and delete that user.
3. The API allows a user to "sign in" which gives them a token that they can use for subsequent autheticated request.
4. The API allows the the user to "Sign Out" which invalidates their token.
5. The API allows a signed-in user to use their token to create a new "check".
6. The API allows a signed-in user to edit or delete any of their checks.
7. In the background, workers perform all the "checks" at the appropiate times, and send alerts to the users when a check changes it state from "up" to "down", or vice versa.
