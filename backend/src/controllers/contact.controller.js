const Contact = require("../models/contact.model");

const createContact = async (req, res) => {
  try {
    const {
      name,
      email,
      age,
      gender,
      address,
      mobileNumber,
      adharNumber,
    } = req.body;

    // Check if any required field is missing
    if (
      !name ||
      !email ||
      age === undefined || // because age might be 0
      !gender ||
      !address ||
      !mobileNumber ||
      !adharNumber
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required: name, email, age, gender, address, mobileNumber, adharNumber",
      });
    }

    // Optional: check for duplicates
    const existing = await Contact.findOne({
      $or: [
        { mobileNumber },
        { adharNumber },
        { email }
      ]
    });
    if (existing) {
      return res.status(400).json({
        success: false,
        message: "Contact already exists with this mobile number, Aadhaar number, or email.",
      });
    }

    const contact = new Contact({
      name,
      email,
      age,
      gender,
      address,
      mobileNumber,
      adharNumber,
    });
    await contact.save();
    res.status(201).json({ success: true, message: "Contact saved!", data: contact });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

module.exports = createContact;