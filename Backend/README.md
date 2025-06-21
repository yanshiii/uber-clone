# User Authentication API

This API handles user registration and login using Node.js, Express, MongoDB, JWT, and bcrypt.

---

## POST `/user/register`

Registers a new user by storing their details (name, email, and password) in the database.

### Description

This endpoint creates a new user by:

- Validating the incoming request.
- Hashing the password using `bcrypt`.
- Saving the user to MongoDB.
- Returning a signed JWT token and user data.

---

### Request Body

Send a JSON object with the following structure:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

---

### Example Response

#### Success (201 Created)

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "60c72b2f9b1e8b001c8e4b8a",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  }
}
```

#### Validation Error (400 Bad Request)

```json
{
  "errors": [
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    }
    // ...other errors
  ]
}
```

## POST `/user/login`

Authenticates an existing user and returns a JWT token.

### Description

This endpoint:

- Validates the email and password.
- Verifies the user's credentials using `bcrypt`.
- Returns a JWT token on successful login.


---

### Request Body

Send a JSON object with the following structure:

```json
{
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

---

### Example Response

#### Success (200 OK)

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "60c72b2f9b1e8b001c8e4b8a",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  }
}
```

#### Error Response (401 Unauthorized)

```json
{
  "message": "Invalid email or password"
}
```

#### Validation Error (400 Bad Request)

```json
{
  "errors": [
    {
      "msg": "Please enter a valid email address",
      "param": "email",
      "location": "body"
    }
  ]
}
```