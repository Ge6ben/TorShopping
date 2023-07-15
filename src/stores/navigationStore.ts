import { computed, reactive } from 'vue'
import { navigationList } from '@/layouts/types/types'

export const useNavigationItems = () => {
	const navigationItems: ref<navigationList[]> = reactive([
		{
			id: 1,
			title: 'Departments',
			icon: 'mdi-family-tree',
			path: '/departments',
			codename: ''
		},
		{
			id: 2,
			title: 'Departments1',
			icon: 'mdi-family-tree',
			path: '/departments1',
			codename: ''
		}
	])

	const getCurrentNavigation = computed(() => navigationItems)
	return {
		getCurrentNavigation
	}
}
