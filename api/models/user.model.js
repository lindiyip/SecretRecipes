const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    // uid: {
    //   type: String,
    //   required: true,
    // },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    lastLogin: {
      type: Date,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    profilePicture: {
      type: String,
      default: "",
    },
    coverPicture: {
      type: String,
      default: "",
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    desc: {
      type: String,
    },
    // city: {
    //   type: String,
    // },
    // from: {
    //   type: String,
    // },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
