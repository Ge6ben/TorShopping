import { type RouteRecordRaw as Route } from 'vue-router'

export const loginRoutes: Route[] = [
	{
		path: '/login',
		name: 'login',
		component: () =>
			import(/* webpackChunkName: "TheLoginChunk" */ '../views/TheLogin.vue'),
		meta: {
			title: 'Login'
		}
	}
]

export default loginRoutes