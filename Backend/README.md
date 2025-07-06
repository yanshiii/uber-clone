# Backend API Documentation

This API handles user registration, login, profile access, and logout using **Node.js**, **Express**, **MongoDB**, **JWT**, and **bcrypt**.

---

## Technologies Used

- **Express.js**
- **MongoDB**
- **Mongoose**
- **JWT**
- **bcrypt**
- **Express Validator**
- **Postman** (for testing)

---

## Register User

**POST** `/users/register`

Registers a new user by storing their name, email, and password in the database.

#### Request Body

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

#### Success Response (201 Created)

```json
{
  "token": "<jwt_token>",
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  }
}
```

#### Validation Error (400)

```json
{
  "errors": [
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    }
  ]
}
```

---

## Login User

**POST** `/users/login`

Authenticates a user using email and password and returns a JWT token.

#### Request Body

```json
{
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
```

#### Success Response (200 OK)

```json
{
  "token": "<jwt_token>",
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "socketId": null
  }
}
```

#### Unauthorized (401)

```json
{
  "message": "Invalid email or password"
}
```

#### Validation Error (400)

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

---

## Get User Profile

**GET** `/users/profile`

Returns the authenticated user's profile.

#### Authorization Required

Send token via:

- **Cookie**: `token=<jwt>`
- **Header**: `Authorization: Bearer <jwt>`

#### Success Response (200 OK)

```json
{
  "_id": "user_id",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "socketId": null
}
```

#### Unauthorized (401)

```json
{
  "message": "Unauthorized"
}
```

---

## Logout User

**GET** `/users/logout`

Logs out the user by clearing their auth cookie and blacklisting the JWT.

#### Authorization Required

Same as `/users/profile`.

#### Success Response (200 OK)

```json
{
  "message": "Logged out"
}
```

#### Unauthorized (401)

```json
{
  "message": "Unauthorized"
}
```

---





## Register Captain

**POST** `/captains/register`

Registers a new captain with personal and vehicle details.

#### Request Body

```json
{
  "fullname": {
    "firstname": "Raj",
    "lastname": "Singh"
  },
  "email": "raj.singh@example.com",
  "password": "strongPassword123",
  "vehicle": {
    "color": "Red",
    "plate": "DL 04 XY 6021",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

#### Success Response 

```json
{
  "message": "Captain registered successfully",
  "token": "<jwt_token>",
  "captain": {
    "_id": "captain_id",
    "fullname": {
      "firstname": "Raj",
      "lastname": "Singh"
    },
    "email": "raj.singh@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "DL04XY6021",
      "capacity": 4,
      "vehicleType": "car"
    },
    "status": "inactive"
  }
}
```

#### Validation Error (400)

```json
{
  "errors": [
    {
      "msg": "Please enter a valid vehicle plate number",
      "param": "vehicle.plate",
      "location": "body"
    }
  ]
}
```

---

## Login Captain

**POST** `/captains/login`

Authenticates a captain using email and password and returns a JWT token.

#### Request Body

```json
{
  "email": "raj.singh@example.com",     // must be a valid email
  "password": "strongPassword123"       // must be at least 6 characters
}
```

#### Success Response (200 OK)

```json
{
  "message": "Captain logged in successfully",
  "token": "<jwt_token>",
  "captain": {
    "_id": "captain_id",
    "fullname": {
      "firstname": "Raj",
      "lastname": "Singh"
    },
    "email": "raj.singh@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "DL04XY6021",
      "capacity": 4,
      "vehicleType": "car"
    },
    "status": "inactive"
  }
}
```

#### Unauthorized (401)

```json
{
  "message": "Invalid email or password"
}
```
#### Validation Error (400)

```json
{
  "errors": [
    {
      "msg": "Please enter a valid email address",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Password is required",
      "param": "password",
      "location": "body"
    }
  ]
}
```

---

## Get Captain Profile

**POST** `/captains/profile`

Returns the authenticated captain's profile.

#### Authorization Required

Send token via:
- Cookie: 
``` token=<jwt> ```
- Header: 
``` Authorization: Bearer <jwt> ```


#### Success Response (200 OK)

```json
{
  "_id": "captain_id",
  "fullname": {
    "firstname": "Raj",
    "lastname": "Singh"
  },
  "email": "raj.singh@example.com",
  "vehicle": {
    "color": "Red",
    "plate": "DL04XY6021",
    "capacity": 4,
    "vehicleType": "car"
  },
  "status": "inactive"
}
```

#### Unauthorized (401)

```json
{
  "message": "Unauthorized"
}
```

---

## Logout Captain

**POST** `/captains/logout`

Logs out the captain by blacklisting the JWT and clearing the auth cookie.

#### Authorization Required

Send token via:
- Cookie: 
``` token=<jwt> ```
- Header: 
``` Authorization: Bearer <jwt> ```


#### Success Response (200 OK)

```json
{
  "message": "Captain logged out successfully"
}
```

#### Unauthorized (401)

```json
{
  "message": "Unauthorized"
}
```

---






## GET `/maps/get-coordinates`

Retrieves the latitude and longitude for a given address.

### Query Parameters

- `address` (string, required): The address to geocode.

#### Example Request

```
GET /maps/get-coordinates?address=Ahmedabad%20Station
```

### Success Response (200 OK)

```json
{
  "latitude": 23.0262,
  "longitude": 72.5896
}
```

### Validation Error (400)

```json
{
  "message": "Address is required"
}
```

### Not Found (404)

```json
{
  "message": "Coordinates not found for the given address"
}
```

---

**Note:**  
This endpoint uses a geocoding service to convert an address into geographic coordinates.


## GET `/maps/get-distance-time`

Returns the distance and estimated travel time between two locations.

### Query Parameters

- `origin` (string, required): The starting address or coordinates.
- `destination` (string, required): The destination address or coordinates.

#### Example Request

```
GET /maps/get-distance-time?origin=Ahmedabad%20Station&destination=Kankariya%20Talab
```

### Success Response (200 OK)

```json
{
  "distance": {
    "text": "5.2 km",
    "value": 5200
  },
  "duration": {
    "text": "15 mins",
    "value": 900
  }
}
```

- `distance.text`: Human-readable distance.
- `distance.value`: Distance in meters.
- `duration.text`: Human-readable duration.
- `duration.value`: Duration in seconds.

### Validation Error (400)

```json
{
  "message": "Origin and destination are required"
}
```

### Not Found (404)

```json
{
  "message": "Could not calculate distance or duration for the given locations"
}
```

---

**Note:**  
This endpoint uses a mapping service to calculate the distance and estimated travel time between two locations.


## GET `/maps/get-suggestions`

Returns a list of address or place suggestions based on a partial input string.

### Query Parameters

- `input` (string, required): The partial address or place name to search for suggestions.

#### Example Request

```
GET /maps/get-suggestions?input=Ahmedabad
```

### Success Response (200 OK)

```json
[
  "Ahmedabad Station, Gujarat, India",
  "Ahmedabad Airport, Gujarat, India",
  "Ahmedabad University, Gujarat, India"
]
```

- The response is an array of suggestion strings matching the input.

### Validation Error (400)

```json
{
  "message": "Input is required"
}
```

---

**Note:**  
This endpoint uses a places or autocomplete service to provide location suggestions for user input.


## POST `/rides/create`

Creates a new ride request with pickup, destination, and vehicle type.

### Request Body

Send a JSON object with the following structure:

```json
{
  "user": "<user_id>",
  "pickup": "Ahmedabad Station",
  "destination": "Kankariya Talab",
  "vehicleType": "car"
}
```

#### Field Requirements

- `user` (string, required): The user ID requesting the ride.
- `pickup` (string, required): Pickup address or coordinates.
- `destination` (string, required): Destination address or coordinates.
- `vehicleType` (string, required): Type of vehicle (`auto`, `car`, or `moto`).

### Success Response (201 Created)

```json
{
  "_id": "<ride_id>",
  "user": "<user_id>",
  "pickup": "Ahmedabad Station",
  "destination": "Kankariya Talab",
  "vehicleType": "car",
  "fare": 120,
  "otp": "123456",
  "status": "pending"
}
```

- The `fare` and `otp` are generated by the backend.
- The `status` field may vary depending on your implementation.

### Validation Error (400)

```json
{
  "message": "All fields are required"
}
```

---

**Note:**  
This endpoint calculates the fare based on the provided pickup, destination, and vehicle type, and generates a secure OTP for the ride.


## GET `/rides/get-fare`

Calculates the estimated fare for a ride based on pickup and destination locations and vehicle type.

### Query Parameters

- `pickup` (string, required): Pickup address or coordinates.
- `destination` (string, required): Destination address or coordinates.
- `vehicleType` (string, required): Type of vehicle (`auto`, `car`, or `moto`).

#### Example Request

```
GET /rides/get-fare?pickup=Ahmedabad%20Station&destination=Kankariya%20Talab&vehicleType=car
```

### Success Response (200 OK)

```json
{
  "fare": 120
}
```

- The `fare` value will depend on the calculated distance, duration, and selected vehicle type.

### Validation Error (400)

```json
{
  "message": "Pickup and destination are required"
}
```

or

```json
{
  "message": "All fields are required"
}
```

---

**Note:**  
The endpoint uses Google Maps API (or similar) to calculate distance and duration, and applies different base fares and per-km/minute rates for each vehicle type.

