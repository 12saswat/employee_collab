# 🛡️ User Authentication API

A Node.js + Express.js based REST API for user registration, email OTP verification, login, and protected dashboard access. Uses MongoDB for data storage.

---

## 🚀 Technologies Used

- Node.js  
- Express.js  
- MongoDB + Mongoose  
- bcrypt  
- jsonwebtoken  
- nodemailer  
- dotenv  

---

## 📦 Installation

1. Clone the repository:
   git clone https://github.com/your-username/your-repo-name.git  
   cd your-repo-name

2. Install dependencies:
   npm install

3. Create a `.env` file in the root and add:

   PORT=5000  
   MONGO_URI=your_mongo_connection_string  
   JWT_SECRET=your_jwt_secret  
   EMAIL=your_gmail_address  
   PASSWORD=your_gmail_app_password

4. Start the server:
   

---

## 📮 API Endpoints

Base URL:  
http://localhost:5000/api/users

---

### ✅ Register User

POST /register

Request Body:
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}

---

### 🔐 Verify OTP

POST /verify-otp

Request Body:
{
  "email": "john@example.com",
  "otp": "123456"
}

---

### 🔁 Resend OTP

POST /resend-otp

Request Body:
{
  "email": "john@example.com"
}

---

### 🔓 Login

POST /login

Request Body:
{
  "email": "john@example.com",
  "password": "password123"
}

Response:
{
  "message": "Login successful",
  "user": { ... },
  "token": "jwt_token_here"
}

---

### 🧑‍💼 Dashboard (Protected)

GET /dashboard

Headers:  
Authorization: Bearer <your_token>

Response:
{
  "message": "Dashboard",
  "user": { ... }
}

---

## 📧 Email Setup

- This app uses Gmail for sending OTPs.
- If you have 2-Step Verification enabled, generate an App Password from:  
  https://myaccount.google.com/apppasswords
- Use that app password in your `.env` file under `PASSWORD`.

---


## ✅ Features

- Register with OTP email verification  
- Resend OTP  
- Login with JWT  
- Protected route access  
- Password hashing and email sending

