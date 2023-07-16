// Components
import { type RouteRecordRaw as Route } from 'vue-router'
import { Layout } from '@/layouts/types/types'

/** Router Rules */
const homeRoutes: Route[] = [
	{
		path: '/',
		name: 'Home',
		component: () => import('@/modules/Home/Views/index.vue'),
		meta: {
			layout: Layout.ADMIN,
			title: 'Home',
			hideNavigation: true
		}
	}
]
export default homeRoutes
