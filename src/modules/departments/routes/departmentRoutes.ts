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
	},
	{
		path: '/departments/:action/:id?',
		name: 'department-record',
		component: () =>
			import(
				/* webpackChunkName: "DepartmentsRecordsChunk" */ '@/modules/departments/views/ViewAndUpsertRecord.vue'
			),
		meta: {
			layout: Layout.BLANK,
			title: 'Department Record'
		}
	}
]

export default departmentRoutes
