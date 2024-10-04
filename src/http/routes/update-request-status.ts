import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { updateRequestStatusRequest } from '../../use-cases/request/update-request-status'

export const updateRequestStatusRoute: FastifyPluginAsyncZod = async app => {
  app.patch(
    '/requests',
    {
      schema: {
        body: z.object({
          id: z.string().uuid(),
          status: z.enum(['NEW', 'DENIED', 'ACCEPTED']),
        }),
      },
    },
    async (request, reply) => {
      const { status, id } = request.body

      const { requester } = await updateRequestStatusRequest({ id, status })

      return reply.status(200).send(requester)
    }
  )
}
