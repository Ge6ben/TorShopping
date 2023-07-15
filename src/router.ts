import { createRouter, createWebHistory, type Router, type RouteRecordRaw as Route } from 'vue-router'
import loginRoutes from './modules/login/routes/loginRoutes'
import homeRoutes from '@/modules/Home/routes/routes'

/** Router Rules */
export const routes: Route[] = [...homeRoutes, ...loginRoutes]

/** Vue Router */
const router: Router = createRouter({
	history: createWebHistory(),
	routes
})

export default router
