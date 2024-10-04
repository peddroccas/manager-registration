import type { FastifyInstance } from 'fastify'
import { getAllRegistersRoute } from '../routes/get-all-registers'
import { getRegistersByStatusRoute } from '../routes/get-registers-by-status'
import { updateRegisterStatusRoute } from '../routes/update-register-status'

export async function registerRoutes(app: FastifyInstance) {
  app.register(getAllRegistersRoute)
  app.register(getRegistersByStatusRoute)
  app.register(updateRegisterStatusRoute)
}
