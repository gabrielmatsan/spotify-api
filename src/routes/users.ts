import { FastifyInstance } from 'fastify'
import { knex } from '../database'
import { z } from 'zod'
import { randomUUID } from 'crypto'
import { compare, hash } from 'bcryptjs'
import { verifyPassword } from '../utils/verify-password'

export async function usersRoutes(app: FastifyInstance) {
  // Rota de registro (criação de usuário)
  app.post('/', async (request, reply) => {
    const createUserBodySchema = z.object({
      name: z.string(),
      email: z.string().email(),
      password: z.string(),
    })

    const { name, email, password } = createUserBodySchema.parse(request.body)

    const userEmailChecks = await knex('users').where({ email }).first()

    if (userEmailChecks) {
      return reply.status(404).send({ message: 'Email already used' })
    }

    const isPasswordStrong = verifyPassword(password)

    if (!isPasswordStrong) {
      throw new Error('Senha fraca')
    }

    const passwordHash = await hash(password, 2)

    let sessionId = request.cookies.sessionId

    if (!sessionId) {
      sessionId = randomUUID()
    }

    reply.cookie('sessionId', sessionId, {
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    })

    await knex('users').insert({
      name,
      email,
      password: passwordHash,
      session_id: sessionId,
    })

    return reply.status(201).send()
  })

  // Rota de login
  app.post('/login', async (request, reply) => {
    const loginBodySchema = z.object({
      email: z.string().email(),
      password: z.string(),
    })

    const { email, password } = loginBodySchema.parse(request.body)

    // Verifique se o usuário existe no banco de dados
    const user = await knex('users').where({ email }).first()

    if (!user) {
      return reply.status(404).send({ message: 'Invalid email or password' })
    }

    // Verifique se a senha fornecida corresponde à senha armazenada
    const isPasswordValid = await compare(password, user.password) // Compara a senha em texto simples com o hash

    if (!isPasswordValid) {
      return reply.status(404).send({ message: 'Invalid email or password' })
    }

    // Crie ou recupere o sessionId
    let sessionId = request.cookies.sessionId

    if (!sessionId) {
      sessionId = randomUUID()
    }

    reply.cookie('sessionId', sessionId, {
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    })

    return reply.status(200).send({ message: 'Login successful' })
  })
}
