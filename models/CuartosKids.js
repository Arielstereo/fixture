import { Schema, model, models } from "mongoose";

const cuartosKidsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  password: {
    type: Number,
    required: true,
    unique: true,
  },
  checked: {
    type: String,
    required: true,
  },
  checked2: {
    type: String,
    required: true,
  },
  checked3: {
    type: String,
    required: true,
  },
  checked4: {
    type: String,
    required: true,
  }
  
});

export default models.CuartosKids || model("CuartosKids", cuartosKidsSchema);

