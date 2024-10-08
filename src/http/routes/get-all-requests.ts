import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { getAllRequests } from '../../use-cases/request/get-all-requests'

export const getAllRequestsRoute: FastifyPluginAsyncZod = async app => {
  app.get('/requests', async (request, reply) => {
    const { requests } = await getAllRequests()

    return reply.status(200).send(requests)
  })
}
