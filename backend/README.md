# 📦 Contact Form Backend API

This is the **Node.js + Express backend** for handling form submissions from the frontend [Contact Form](../frontend/README.md). It receives user input via a POST request and can save or process it (e.g., store in MongoDB).

---

## 🚀 Features

- Built with **Express.js**
- Accepts POST requests to `/api/v1/createContact`
- Parses JSON body using `express.json()`
- Validates and processes contact form submissions
- Modular file structure for routes and controllers
- Easy to integrate with MongoDB, PostgreSQL, or other databases

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- (Optional: MongoDB + Mongoose)
- (Optional: dotenv for config management)

---

## 📂 Folder Structure

backend/src
├── controllers/
│ └── contact.controller.js
├── routes/
│ └── contact.routes.js
├── models/
│ └── contact.model.js
├── app.js
├── index.js
└── .env



---

## ⚙️ Setup Instructions

1. **Install dependencies:**

```bash
cd backend
npm install

📬 API Endpoint
POST /api/v1/createContact
Request Body (JSON):

{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 25,
  "gender": "Male",
  "address": "Delhi, India",
  "mobileNumber": "9876543210",
  "adharNumber": "123412341234"
}

{
  "success": true,
  "message": "Contact saved successfully"
}

