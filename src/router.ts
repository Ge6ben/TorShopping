import { createRouter, createWebHistory, type Router, type RouteRecordRaw as Route } from 'vue-router'
import loginRoutes from './modules/login/routes/loginRoutes'

/** Router Rules */
export const routes: Route[] = [...loginRoutes]

/** Vue Router */
const router: Router = createRouter({
	history: createWebHistory(),
	routes
})

export default router
