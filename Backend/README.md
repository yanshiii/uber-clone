# User Authentication API

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

## API Endpoints

### Register User

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

### Login User

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

### Get User Profile

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

### Logout User

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

# 🚖 Captain Authentication API

## API Endpoints

### Register Captain

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

## Setup & Run

1. Clone the repo:

   ```bash
   git clone https://github.com/yanshiii/uber-clone.git
   cd your-repo-name
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Add `.env` file:

   ```env
   PORT=4000
   MONGO_URI=mongodb://localhost:27017/your-db-name
   JWT_SECRET=your_jwt_secret
   ```

4. Run server:

   ```bash
   npm run dev
   ```

---

