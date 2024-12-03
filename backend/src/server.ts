import Fastify from 'fastify'
import { db } from './config/db'

const fastify = Fastify({})

fastify.get('/', async function (request, reply) {
  reply.send(await db.user.findMany())
})

fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})
