import { type RouteRecordRaw as Route } from 'vue-router'
import { Layout } from '@/layouts/types/types'

export const landingPageRoutes: Route[] = [
	{
		path: '/landing-page',
		name: 'landingPage',
		component: () =>
			import(
				/* webpackChunkName: "LandingPageChunk" */ '../views/LandingPage.vue'
			),
		meta: {
			layout: Layout.BLANK,
			title: 'Landing Page'
		}
	}
]

export default landingPageRoutes
