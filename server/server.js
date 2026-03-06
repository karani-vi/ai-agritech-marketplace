const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Simple Test Route
app.get("/", (req, res) => {
    res.send("AI Agritech Marketplace Server is Running 🚀");
});

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/ai_agritech")
.then(() => console.log("MongoDB Connected Successfully"))
.catch((err) => console.log(err));

// Start Server
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
const mongoose = require('mongoose');

const mongoURI = process.env.MONGODB_URI;

mongoose.connect(mongoURI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch(err => console.error("Could not connect to MongoDB", err));