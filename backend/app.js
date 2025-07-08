const express = require("express");
const cors = require("cors");
const app = express();


app.use(
  cors({
    origin: process.env.CORS,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Import routes
const contactRoutes = require("./src/routes/contact.routes");

app.use("/api/v1", contactRoutes);

module.exports = app;
