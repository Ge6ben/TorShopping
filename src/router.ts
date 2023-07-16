import { createRouter, createWebHistory, type Router, type RouteRecordRaw as Route } from 'vue-router'
import loginRoutes from './modules/login/routes/loginRoutes'
import homeRoutes from '@/modules/Home/routes/routes'
import departmentRoutes from '@/modules/departments/routes/departmentRoutes'
import landingPageRoutes from '@/modules/landingPage/routes/landingPageRoutes'
import { Layout } from '@/layouts/types/types'

/** Router Rules */
export const routes: Route[] = [
	...landingPageRoutes,
	...departmentRoutes,
	...homeRoutes,
	...loginRoutes,
	// Not Found Page
	{
		path: '/:catchAll(.*)',
		name: 'notFound',
		component: () => import('@/layouts/views/errorPage.vue'),
		meta: {
			layout: Layout.BLANK,
			title: ''
		}
	}
]

/** Vue Router */
const router: Router = createRouter({
	history: createWebHistory(),
	routes
})

// FIXME:handle authentication before change to any route
// FIXME:Show offline page when user disconnect

export default router
