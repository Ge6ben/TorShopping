import { computed } from 'vue'

import { RouteMeta, useRouter } from 'vue-router'

export const useRouteInfo = () => {
	// FIXME: this line cause a warning `inject() can only be used inside setup() `
	const router = useRouter()

	const currentRouteMeta = computed(() => router.currentRoute.value.meta)
	const currentRouteFullPath = computed(
		() => router.currentRoute.value.fullPath
	)
	const currentRoutes = computed(() => router.options.routes)
	const currentRouteParams = computed(() => router.currentRoute.value.params)

	const currentRouteBreadcrumb = computed(() =>
		currentRoutes.value
			// Map the route params to the actual route path
			.map(route => ({
				...route,
				path: Object.keys(currentRouteParams.value).reduce(
					(path, param) =>
						path.replace(`:${param}`, (currentRouteParams.value as any)[param]),
					route.path
				)
			}))

			// Filter out routes that are not in the current route path
			.filter(
				route =>
					currentRouteFullPath.value.includes(route.path) && route.path !== '/'
			)

			// Map the routes to breadcrumb items
			.map(route => ({
				title: (route.meta as RouteMeta).title,
				to: route.path
			}))
	)

	return {
		currentRouteMeta,
		currentRouteFullPath,
		currentRouteBreadcrumb,
		currentRoutes
	}
}
