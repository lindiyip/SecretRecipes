// Import mongoose
const mongoose = require("mongoose");

// Import Models
const Entry = require("./entry.model");

// Config
const mongoURI = process.env.MONGO_URL;
const db = mongoose.connection;

// Connect
(async () => {
  await mongoose.connect(mongoURI);
})().catch((err) => console.log(err));

// Asynchronous event handlers fired on respective status
db.on("error", (err) => console.log(err.message + " is Mongod not running?"));
db.on("connected", () => console.log("mongo connected: ", mongoURI));
db.on("disconnected", () => console.log("mongo disconnected"));

// Export models
module.exports = {
  Entry,
};
