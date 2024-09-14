import { FastifyInstance } from 'fastify'
import { knex } from '../database'
import { z } from 'zod'
import { randomUUID } from 'crypto'

export async function songsRoutes(app: FastifyInstance) {
  app.post('/', async (request, reply) => {
    const createUserBodySchema = z.object({
      title: z.string(),
      artist: z.string(),
    })

    const { title, artist } = createUserBodySchema.parse(request.body)

    const userTitleChecks = await knex('songs').where({ title }).first()

    if (userTitleChecks) {
      return reply.status(409).send({ message: 'Title already used' })
    }

    await knex('songs').insert({
      id: randomUUID(),
      title,
      artist,
    })

    return reply.status(201).send()
  })

  app.get('/', async (request, reply) => {
    const songs = await knex('songs').select('*')

    return reply.status(200).send({ songs })
  })

  app.get('/:title', async (request, reply) => {
    const paramsSchema = z.object({
      title: z.string(),
    })

    const { title } = paramsSchema.parse(request.params)

    const song = await knex('songs').where({ title }).first()

    if (!song) {
      return reply.status(404).send({ message: 'not found' })
    }

    return reply.status(200).send({ song })
  })
}
