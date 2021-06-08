import { Schema } from "mongoose";

export const MoonSchema = Schema({
  name: {
    type: String, required: true
  }
})