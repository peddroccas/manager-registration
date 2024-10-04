import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { getRequestsByStatus } from '../../use-cases/get-requests-by-status'
import { z } from 'zod'

export const getNewRequestsRoute: FastifyPluginAsyncZod = async app => {
  app.get(
    '/requests/:status',
    {
      schema: {
        params: z.object({
          status: z.enum(['NEW', 'DENIED', 'ACCEPTED']),
        }),
      },
    },
    async (request, reply) => {
      const { status } = request.params
      const { requests } = await getRequestsByStatus({ status })

      reply.status(200).send(requests)
    }
  )
}
