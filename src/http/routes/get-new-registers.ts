import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { getNewRegisters } from '../../use-cases/get-new-registers'

export const getNewRegistersRoute: FastifyPluginAsyncZod = async app => {
  app.get('/registers', async (register, reply) => {
    const { newRegisters } = await getNewRegisters()

    reply.status(200).send(newRegisters)
  })
}
