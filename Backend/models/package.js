import { Schema, model } from "mongoose";

const packageSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zip: {
    type: Number,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  images: {
    type: [],
    required: true,
  },
  videos: {
    type: [],
    required: true,
  },
  totalCount: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
  },
});

export const Package = model("package", packageSchema);
