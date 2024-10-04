import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod'
import { getAllRegisters } from '../../use-cases/register/get-all-registers'

export const getAllRegistersRoute: FastifyPluginAsyncZod = async app => {
  app.get('/registers', async (register, reply) => {
    const { registers } = await getAllRegisters()

    reply.status(200).send(registers)
  })
}
