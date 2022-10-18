import {Schema, model, models} from "mongoose";

const UserSchema = new Schema({
  name: {
    type: "string",
  },
  surname: {
    type: "string",
  },
  first: {
    type: "string",
  },
  second: {
    type: "string",
  },
  third: {
    type: "string",
  }
});

export default models.User || model("User", UserSchema);

