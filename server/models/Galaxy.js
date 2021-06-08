import { Schema } from "mongoose";
const Schema = mongoose.Schema
export const GalaxySchema = Schema({
  name: {
    type: String, required: true
  }
}, { timestamps: true, toJSON: { virtuals: true } })


