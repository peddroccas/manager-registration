import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { getRegistersByStatus } from '../../use-cases/get-registers-by-status'
import { z } from 'zod'

export const getRegistersByStatusRoute: FastifyPluginAsyncZod = async app => {
  app.get(
    '/registers/:status',
    {
      schema: {
        params: z.object({
          status: z.enum(['NEW', 'DENIED', 'ACCEPTED']),
        }),
      },
    },
    async (request, reply) => {
      const { status } = request.params

      const { registers } = await getRegistersByStatus({ status })

      reply.status(200).send(registers)
    }
  )
}
