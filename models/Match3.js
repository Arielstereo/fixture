import { Schema, model, models } from "mongoose";

const ResultMatch3Schema = new Schema({
  name: {
    type: String,
    required: true
  },
  surname: {
    type: String,
    required: true
  },
  password: {
    type: Number,
    required: true,
    unique: true
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
  checked9: {
    type: String,
    required: true,
  },
  checked10: {
    type: String,
    required: true,
  },
  checked11: {
    type: String,
    required: true,
  },
  checked12: {
    type: String,
    required: true,
  },
  checked13: {
    type: String,
    required: true,
  },
  checked14: {
    type: String,
    required: true,
  },
  checked15: {
    type: String,
    required: true,
  },
  checked16: {
    type: String,
    required: true,
  },
});

export default models.Match3 || model("Match3", ResultMatch3Schema);

