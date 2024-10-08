import type { FastifyInstance } from 'fastify'
import { getAllRequestsRoute } from '../routes/get-all-requests'
import { getRequestsByStatusRoute } from '../routes/get-requests-by-status'
import { updateRequestStatusRoute } from '../routes/update-request-status'

export async function requestRoutes(app: FastifyInstance) {
  app.register(getAllRequestsRoute)
  app.register(getRequestsByStatusRoute)
  app.register(updateRequestStatusRoute)
}
