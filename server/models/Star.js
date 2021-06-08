import { Schema } from "mongoose";
const Schema = mongoose.Schema
export const StarSchema = Schema({
  name: {
    type: String, required: true
  }
})