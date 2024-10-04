import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { z } from 'zod'
import { updateRegisterStatusRequest } from '../../use-cases/register/update-register-status'

export const updateRegisterStatusRoute: FastifyPluginAsyncZod = async app => {
  app.patch(
    '/registers',
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

      const { registered } = await updateRegisterStatusRequest({ id, status })

      return reply.status(200).send(registered)
    }
  )
}
