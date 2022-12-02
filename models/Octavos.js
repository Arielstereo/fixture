import { Schema, model, models } from "mongoose";

const octavosSchema = new Schema({
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
  },
  checked5: {
    type: String,
    required: true,
  },
  checked6: {
    type: String,
    required: true,
  },
  checked7: {
    type: String,
    required: true,
  },
  checked8: {
    type: String,
    required: true,
  },
});

export default models.Octavos || model("Octavos", octavosSchema);

