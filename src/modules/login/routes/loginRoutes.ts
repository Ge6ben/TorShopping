import { type RouteRecordRaw as Route } from 'vue-router'
import { Layout } from '@/layouts/types/types'

export const loginRoutes: Route[] = [
	{
		path: '/login',
		name: 'login',
		component: () =>
			import(/* webpackChunkName: "TheLoginChunk" */ '../views/TheLogin.vue'),
		meta: {
			layout: Layout.BLANK,
			title: 'Login'
		}
	}
]

export default loginRoutes
