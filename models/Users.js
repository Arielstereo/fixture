import {Schema, model, models} from "mongoose";

const UserSchema = new Schema({
  name: {
    type: "string",
    required: true,
    unique: true,
  },
  surname: {
    type: "string",
    required: true,
    unique: true,
  },
  first: {
    type: "string",
    required: true,
  },
  second: {
    type: "string",
    required: true,
  },
  third: {
    type: "string",
    required: true,
  }
});

export default models.User || model("User", UserSchema);

