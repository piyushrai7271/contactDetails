# Contact Form Component (React + Tailwind)

This is a simple and responsive Contact Form built with **React** and **Tailwind CSS**. It captures user details like name, email, age, gender, address, mobile number, and Aadhaar number, and submits the data to a backend API.

---

## 📁 File Location

src/
components/
Contact.jsx



---

## ✅ Features

- Built with React functional component and hooks (`useState`)
- Tailwind CSS for responsive styling
- Client-side validation:
  - Mobile Number: 10-digit Indian format (starts with 6-9)
  - Aadhaar Number: 12-digit numeric
  - Age: Numeric with limits
- Hover effects and loading state on submit
- Basic success/error messaging

---

## 🚀 Getting Started

### 1. Clone & Install

```bash
npm install
npm run dev

The form submits to the following endpoint:
POST http://localhost:9000/api/v1/createContact

Expected payload:
{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 25,
  "gender": "Male",
  "address": "Delhi, India",
  "mobileNumber": "9876543210",
  "adharNumber": "123412341234"
}

| Field          | Validation                    |
| -------------- | ----------------------------- |
| Name           | Required                      |
| Email          | Required, must be valid email |
| Age            | Required, number only         |
| Gender         | Required, from dropdown       |
| Address        | Required                      |
| Mobile Number  | Starts with 6-9, 10 digits    |
| Aadhaar Number | Exactly 12 numeric digits     |

