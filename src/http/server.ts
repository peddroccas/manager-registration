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
import { requestRoutes } from './controllers/request'
import { registerRoutes } from './controllers/register'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.register(fastifyCors, {
  origin: '*',
})

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(requestRoutes)
app.register(registerRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server Running!')
  })
