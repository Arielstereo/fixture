import {Schema, model, models} from "mongoose";

const KidSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  family: {
    type: String,
    required: true,
  },
  password: {
    type: Number,
    required: true,
    unique: true,
  },
  first: {
    type: String,
    required: true,
  },
  second: {
    type: String,
    required: true,
  },
  third: {
    type: String,
    required: true,
  }
});

export default models.Kid || model("Kid", KidSchema);

