// Components
import { type RouteRecordRaw as Route } from 'vue-router'
import { Layout } from '@/layouts/types/types'

/** Router Rules */
const homeRoutes: Route[] = [
	{
		path: '/',
		name: 'Home',
		component: () => import('../Views/index.vue'),
		meta: {
			layout: Layout.ADMIN,
			title: 'Home',
			hidePageHeader: true,
			hideNavigation: true
		}
	}
]
export default homeRoutes
