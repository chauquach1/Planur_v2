import {mongoose, Schema} from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    UUID: String
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", UserSchema);

export default User;