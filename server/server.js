const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const products = require("./routes/products");
app.use(cors());
const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
require("dotenv").config();

// middleware
app.use(express.json());

// routes
app.use("/api/products", products);

const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to the database!");
    app.listen(PORT, () => {
      console.log(`Server listening on port: ${PORT}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
