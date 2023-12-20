const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  subDomain: {
    type: String,
  },
});
userSchema.pre("save", function (next) {
  const user = this;
  user.subDomain = user._id;
  next();
});
const User = model("User", userSchema);
module.exports = User;
