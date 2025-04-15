const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    profilePicture: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    password: {
      type: String,
      required: true,
      select: false, // hides it from queries unless explicitly selected
    },
  },
  { timestamps: true }
);

// Use existing model if it exists (avoids OverwriteModelError during dev)
module.exports = mongoose.models.User || mongoose.model("User", userSchema);
