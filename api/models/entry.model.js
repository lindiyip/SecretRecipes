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
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },
});

module.exports = mongoose.model("Entry", EntrySchema);
