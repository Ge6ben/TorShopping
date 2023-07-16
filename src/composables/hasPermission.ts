import { storeToRefs } from 'pinia'
import { authStore } from '@/stores/authStore'

export function hasPermission(actions: string | unknown[]) {
	const store = authStore()
	const { getAllowedRoles } = storeToRefs(store)

	return getAllowedRoles.value?.some(item => actions.includes(item))
}
