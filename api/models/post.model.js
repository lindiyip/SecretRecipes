const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PostSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
    },
    currentDate: {
      type: String,
    },
    ingredients: {
      type: String,
    },
    desc: {
      type: String,
    },
    difficulty: {
      type: Number,
    },
    duration: {
      type: String,
    },
    img: {
      type: String,
    },
    likes: {
      type: Array,
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Posts", PostSchema);
