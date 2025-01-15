import fastify from 'fastify'

import putDataRoutes from './routes/put_data'
import formDataRoutes from './routes/form_data'
import errorHandler from './errors'

function build(opts = {}) {
  const app = fastify(opts)

  app.register(formDataRoutes, { prefix: '/form-data' })
  app.register(putDataRoutes, { prefix: '/put-data' })

  app.setErrorHandler(errorHandler)

  return app
}
export default build
