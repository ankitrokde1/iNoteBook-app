const mongoose = require("mongoose");
const DATABASE = "notes-app";
const mongoURI = `mongodb://127.0.0.1:27017/${DATABASE}`;

const connectMongo = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error(err);
  }
};

module.exports = connectMongo;
