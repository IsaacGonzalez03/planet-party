import { Schema } from "mongoose";
const Schema = mongoose.Schema
export const PlanetSchema = Schema({
  name: {
    type: String, required: true
  }
})