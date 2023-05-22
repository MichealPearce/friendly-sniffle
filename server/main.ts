import fastify from 'fastify'
import { databasePlugin } from './plugins/database'
import { usersRoute } from './api/users.route'

async function main() {
	const app = fastify({
		logger: true,
	})

	await databasePlugin(app)
	await app.register(usersRoute, {
		prefix: '/users',
	})

	try {
		await app.listen({
			port: 4000,
		})
	} catch (error) {
		app.log.error(error, 'Failed to start server')
		process.exit(1)
	}

	// Current implementation of construct cli does fully stop the process due to hmr being enabled so need to close the server manually on full reload
	import.meta.hot?.on('vite:beforeFullReload', () => app.close())
}

main()
