import { createRouter, createWebHistory, type Router, type RouteRecordRaw as Route } from 'vue-router'

/** Router Rules */
export const routes: Route[] = []

/** Vue Router */
const router: Router = createRouter({
	history: createWebHistory(),
	routes
})

export default router
