here's a summary of all the endpoints available in  backend, organized by their purpose:

### User Authentication Endpoints

- *POST /users/signup*: Allows new users to sign up. Requires a username, email, and password in the request body.
- *POST /users/signin*: Allows existing users to sign in. Requires an email and password in the request body.

### Victim Reporting Endpoints

- *POST /victim/critical*: Allows the submission of critical victim reports. Requires details such as phone number, location, emergency type, and optionally a photo in the request body.
- *POST /victim/non-critical*: Allows the submission of non-critical victim reports. Requires details such as name, contact, location, description, number of people impacted, critical medical status, urgency level, and optionally a photo in the request body.

### Victim Fetching Endpoints

- *GET /victim/critical*: Fetches a list of all critical victim reports.
- *GET /victim/non-critical*: Fetches a list of all non-critical victim reports.

### General Endpoints

- *GET /*: A simple endpoint that returns "API" to indicate the server is running.

### Note on Authentication

For the endpoints that require authentication (e.g., submitting victim reports), you should include an Authorization header with a valid JWT token in the request. The token is obtained upon successful signup or signin. The auth middleware checks for this token and verifies it before allowing access to the protected endpoints.

### Example Request for Submitting a Critical Victim Report

http
POST /victim/critical HTTP/1.1
Host: your-backend-host.com
Content-Type: application/json
Authorization: Bearer your_jwt_token_here

{
    "phone": "1234567890",
    "location": "123 Main St",
    "EmergencyType": "Fire",
    "photo": "http://example.com/photo.jpg"
}


### Example Request for Fetching Non-Critical Victim Reports

http
GET /victim/non-critical HTTP/1.1
Host: your-backend-host.com
Authorization: Bearer your_jwt_token_here


This summary provides an overview of the endpoints available in your backend. Ensure that your frontend correctly implements these endpoints, including handling authentication tokens and structuring request bodies as required.