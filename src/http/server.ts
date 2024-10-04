import fastifyCors from '@fastify/cors'
import fastify from 'fastify'
import { getNewRequestsRoute } from './routes/get-new-requests'
import { getNewRegistersRoute } from './routes/get-new-registers'
import { getAllRegistersRoute } from './routes/get-all-registers'
import { getAllRequestsRoute } from './routes/get-all-requests'

export const app = fastify()
app.register(fastifyCors, {
  origin: '*',
})

app.register(getNewRequestsRoute)
app.register(getNewRegistersRoute)
app.register(getAllRegistersRoute)
app.register(getAllRequestsRoute)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('HTTP Server Running!')
  })
