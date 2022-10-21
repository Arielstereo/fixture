import {Schema, model, models} from "mongoose";

const ResultMatch3Schema = new Schema({
  name: {
    type: "string",
    unique: true,
  },
  surname: {
    type: "string",
    unique: true,
  },
  checked: {
    type: "string",
  },
  checked2: {
    type: "string",
  },
  checked3: {
    type: "string",
  },
  checked4: {
    type: "string",
  },
  checked5: {
    type: "string",
  },
  checked6: {
    type: "string",
  },
  checked7: {
    type: "string",
  },
  checked8: {
    type: "string",
  },
  checked9: {
    type: "string",
  },
  checked10: {
    type: "string",
  },
  checked11: {
    type: "string",
  },
  checked12: {
    type: "string",
  },
  checked13: {
    type: "string",
  },
  checked14: {
    type: "string",
  },
  checked15: {
    type: "string",
  },
  checked16: {
    type: "string",
  },
});

export default models.Match3 || model("Match3", ResultMatch3Schema);

