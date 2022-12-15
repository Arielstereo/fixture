import { Schema, model, models } from "mongoose";

const finalsSchema = new Schema({
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
  }
  
});

export default models.Finals || model("Finals", finalsSchema);

