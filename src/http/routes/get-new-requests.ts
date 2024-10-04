import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { getNewRequests } from '../../use-cases/get-new-requests'

export const getNewRequestsRoute: FastifyPluginAsyncZod = async app => {
  app.get('/new-requests', async (request, reply) => {
    const { newRequests } = await getNewRequests()

    reply.status(200).send(newRequests)
  })
}
