import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { getRequestsByStatus } from '../../use-cases/request/get-requests-by-status'
import { z } from 'zod'

export const getRequestsByStatusRoute: FastifyPluginAsyncZod = async app => {
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

      return reply.status(200).send(requests)
    }
  )
}
