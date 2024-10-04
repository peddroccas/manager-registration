import fastifyCors from '@fastify/cors'
import fastify from 'fastify'
import { getRequestsByStatusRoute } from './routes/get-requests-by-status'
import { getRegistersByStatusRoute } from './routes/get-registers-by-status'
import { getAllRegistersRoute } from './routes/get-all-registers'
import { getAllRequestsRoute } from './routes/get-all-requests'
import {
  validatorCompiler,
  serializerCompiler,
  type ZodTypeProvider,
} from 'fastify-type-provider-zod'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.register(fastifyCors, {
  origin: '*',
})

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

// Register
app.register(getAllRegistersRoute)
app.register(getRegistersByStatusRoute)

// Request
app.register(getAllRequestsRoute)
app.register(getRequestsByStatusRoute)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server Running!')
  })
