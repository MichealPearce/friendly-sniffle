import { User } from '@server/database/models/User'
import type { FastifyInstance } from 'fastify'
import { DataSource } from 'typeorm'

export async function databasePlugin(instance: FastifyInstance) {
	const source = new DataSource({
		type: 'sqlite',
		database: './bin/database.sqlite',
		entities: [User],
		synchronize: import.meta.env.DEV,
	})

	try {
		instance.log.info('Initializing database')
		await source.initialize()
		instance.log.info('Database initialized')
	} catch (error) {
		instance.log.error(error, 'Failed to initialize database')
		throw error
	}
}
