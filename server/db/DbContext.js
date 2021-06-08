import ValueSchema from '../models/Value'
import mongoose from 'mongoose'
import { GalaxySchema } from "../models/Galaxy";
import { PlanetSchema } from "../models/Planet";
import { MoonSchema } from "../models/Moon";

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Galaxys = mongoose.model('Galaxy', GalaxySchema)
  Planets = mongoose.model('Planet', PlanetSchema)
  Moons = mongoose.model('Moons', MoonSchema)
}

export const dbContext = new DbContext()
