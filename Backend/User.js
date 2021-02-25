const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  Firstname: String,
  Lastname: String,
  Email: String,
  Username: String,
  Password: Number,
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
