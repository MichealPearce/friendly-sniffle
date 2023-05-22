import { User } from '@server/database/models/User'
import type { FastifyInstance } from 'fastify'

export async function usersRoute(instance: FastifyInstance) {
	instance.get('/', async () => {
		return User.find()
	})
}
