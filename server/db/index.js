const mongoose = require("mongoose");

const mongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error(`Failed to connect to MongoDB: ${err}`);
    process.exit(1);
  }
};

module.exports = mongoDB;
