import { defineStore } from 'pinia'
import { ref } from 'vue'
import permissions from '@/permissions/permissions.json'
import { INavigationList } from '@/types/coreType'
import { hasPermission } from '@/composables/hasPermission'

export const NavigationStore = defineStore('navigation', () => {
	const navigationItems = ref<INavigationList[]>([
		{
			id: 1,
			title: 'Departments',
			icon: 'mdi-family-tree',
			path: '/departments',
			codename: permissions.DEPARTMENT_VIEW
		},
		// TODO: Just for showing we put here
		{
			id: 2,
			title: 'Landing Page',
			icon: 'mdi-monitor',
			path: '/landing-page',
			codename: permissions.DEPARTMENT_VIEW
		}
	])

	function getNavigationList() {
		const permittedMenu = []

		filterMenu(navigationItems.value, permittedMenu)
		navigationItems.value = permittedMenu
	}

	return { navigationItems, getNavigationList }
})

function filterMenu(
	menuItems: INavigationList[],
	filteredMenu: INavigationList[]
) {
	menuItems.forEach(menuItem => {
		if (checkPermission(menuItem)) {
			filteredMenu.push(menuItem)
		}
	})
}

function checkPermission(menuItem: INavigationList): boolean {
	return (
		!menuItem.codename ||
		hasPermission(
			Array.isArray(menuItem.codename) ? menuItem.codename : [menuItem.codename]
		)
	)
}
