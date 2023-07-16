import { type RouteRecordRaw as Route } from 'vue-router'
import { Layout } from '@/layouts/types/types'

export const departmentRoutes: Route[] = [
	{
		path: '/departments',
		name: 'departments',
		component: () =>
			import(
				/* webpackChunkName: "DepartmentsChunk" */ '@/modules/departments/views/Departments.vue'
			),
		meta: {
			layout: Layout.ADMIN,
			title: 'Departments'
		}
	}
]

export default departmentRoutes
