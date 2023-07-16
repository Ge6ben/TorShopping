import { type RouteRecordRaw as Route } from 'vue-router'
import { Layout } from '@/layouts/types/types'

export const loginRoutes: Route[] = [
	{
		path: '/login',
		name: 'login',
		component: () =>
			import(
				/* webpackChunkName: "TheLoginChunk" */ '@/modules/login/views/TheLogin.vue'
			),
		meta: {
			layout: Layout.BLANK,
			title: 'Login',
			class: 'bg-primary fill-height'
		}
	}
]

export default loginRoutes
