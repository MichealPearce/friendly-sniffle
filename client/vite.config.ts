import { defineConfig, loadEnv } from 'vite'

import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig(env => {
	const envDir = '../'
	const envPrefix = 'CLIENT_'

	const envars = loadEnv(env.mode, envDir, [envPrefix, 'SERVER_'])

	const clientURL = new URL(envars.CLIENT_URL ?? 'http://localhost:3000')
	const clientPort = Number(clientURL.port)

	const serverURL = new URL(envars.SERVER_URL ?? 'http://localhost:3001')

	return {
		envDir,
		envPrefix,

		resolve: {
			alias: {
				'@client': resolve(__dirname),
			},
		},

		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@import "sassy";',
					includePaths: ['styles'],
				},
			},
		},

		server: {
			port: clientPort,

			proxy: {
				'/api': {
					target: serverURL.origin,
					changeOrigin: true,
				},
			},
		},

		plugins: [vue()],
	}
})
