import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { getAllRequests } from '../../use-cases/get-all-requests'

export const getAllRequestsRoute: FastifyPluginAsyncZod = async app => {
  app.get('/requests', async (request, reply) => {
    const { requests } = await getAllRequests()

    reply.status(200).send(requests)
  })
}
