const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const EntrySchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  ingredients: {
    type: String,
    required: true,
  },
  currentDate: {
    type: Date,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  difficulty: {
    type: Number,
    required: false,
  },
  duration: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Entry", EntrySchema);
