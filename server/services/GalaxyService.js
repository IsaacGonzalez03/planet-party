import { dbContext } from "../db/DbContext";

class GalaxyService {
  async createGalaxy(galaxyData) {
    return await dbContext.Galaxys.create(galaxyData)
  }
}
export const galaxyService = new GalaxyService()