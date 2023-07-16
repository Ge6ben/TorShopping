import { computed, reactive } from 'vue'
import { navigationList } from '@/layouts/types/types'

export const useNavigationItems = () => {
	const navigationItems = reactive<navigationList[]>([
		{
			id: 1,
			title: 'Departments',
			icon: 'mdi-family-tree',
			path: '/departments',
			codename: ''
		},
		{
			id: 2,
			title: 'Landing Page',
			icon: 'mdi-monitor',
			path: '/landing-page',
			codename: ''
		}
	])

	const getCurrentNavigation = computed(() => navigationItems)
	return {
		getCurrentNavigation
	}
}
