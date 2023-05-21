import { defineConfig, loadEnv } from 'vite'
import { resolve } from 'path'

export default defineConfig({
	envDir: '../',
	envPrefix: ['SERVER_', 'CLIENT_'],

	resolve: {
		alias: {
			'@server': resolve(__dirname),
		},
	},
})
