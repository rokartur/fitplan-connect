import { Elysia } from 'elysia'
import { cors } from '@elysiajs/cors'
import { Logestic } from 'logestic'
import { compression } from 'elysia-compression'
import { autoload } from 'elysia-autoload'

const app = new Elysia()
	.use(Logestic.preset('common'))
	.use(cors())
	// .use(swagger({
	// 	documentation: {
	// 		info: {
	// 			title: 'FitPlan Connect API Documentation',
	// 			version: '1.0.0'
	// 		},
	// 	}
	// }))
	.use(compression())
	.use(
		autoload({
			prefix: '/api',
			dir: __dirname + '/routes',
		}),
	)
	.listen({ port: 7702, hostname: '0.0.0.0' })

console.log(`http://${app.server?.hostname}:${app.server?.port}`)

export type ElysiaApp = typeof app
