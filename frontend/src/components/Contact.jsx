import React, { useState } from "react";
import axios from "axios"; // Import Axios for making HTTP requests

// Initial form field values
const initialState = {
  name: "",
  email: "",
  age: "",
  gender: "",
  address: "",
  mobileNumber: "",
  adharNumber: "",
};

const Contact = () => {
  // State to hold form input values
  const [form, setForm] = useState(initialState);

  // State to manage submission loading state
  const [loading, setLoading] = useState(false);

  // State to show success or error message
  const [msg, setMsg] = useState("");

  // Handle input change for all form fields
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update only the specific field that changed
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
    setMsg(""); // Reset message
    setLoading(true); // Show loading indicator

    try {
      // Make POST request to backend API using Axios
      const response = await axios.post("http://localhost:9000/api/v1/createContact", {
        ...form,
        age: Number(form.age), // Ensure age is sent as a number
      });
       console.log(`Response: ${response}`)
      // If successful, show success message and reset form
      setMsg("✅ Form submitted successfully!");
      setForm(initialState);
    } catch (error) {
      // Show error message from server or a default message
      const message =
        error.response?.data?.message || "❌ Error submitting form.";
      setMsg(message);
    } finally {
      setLoading(false); // Stop loading indicator
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      {/* Card container for the form */}
      <div className="bg-white w-full max-w-xl p-8 rounded-2xl shadow-lg">
        {/* Heading */}
        <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          Contact Form
        </h2>

        {/* Message display (success or error) */}
        {msg && (
          <div className="mb-4 text-center text-sm font-medium text-green-600">
            {msg}
          </div>
        )}

        {/* Form starts here */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-5">

          {/* Dynamically render input fields */}
          {[
            { label: "Full Name", name: "name", type: "text" },
            { label: "Email Address", name: "email", type: "email" },
            { label: "Age", name: "age", type: "number" },
            { label: "Address", name: "address", type: "text" },
            {
              label: "Mobile Number",
              name: "mobileNumber",
              type: "text",
              pattern: "^[6-9]\\d{9}$",
              title: "Enter a valid 10-digit Indian mobile number",
            },
            {
              label: "Aadhaar Number",
              name: "adharNumber",
              type: "text",
              pattern: "^\\d{12}$",
              title: "Enter a valid 12-digit Aadhaar number",
            },
          ].map(({ label, name, type, pattern, title }) => (
            <div key={name}>
              {/* Label */}
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {label}
              </label>

              {/* Input field */}
              <input
                type={type}
                name={name}
                value={form[name]}
                onChange={handleChange}
                required
                pattern={pattern}
                title={title}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
              />
            </div>
          ))}

          {/* Gender dropdown */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Gender
            </label>
            <select
              name="gender"
              value={form.gender}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition duration-200 disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

