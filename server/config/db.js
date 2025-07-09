const mongoose = require("mongoose");
require("dotenv").config();

const mongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected ");
  } catch (error) {
    console.error("MongoDB connection error :", error.message);
  }
};

module.exports = mongoDB;
