const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  email: {
    required: true,
    type: String,
  },
  username: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("users_db", UsersSchema);
