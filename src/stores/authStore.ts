import { defineStore } from 'pinia'
import { ref } from 'vue'
import { ILoginResponse } from '@/modules/login/types/types'

export const authStore = defineStore('authStore', () => {
	const getSelf = ref<ILoginResponse>()
	const getSelfToken = ref<string>()
	const getAllowedRoles = ref<string[]>()

	function updateSelf(newSelf: ILoginResponse) {
		getSelf.value = newSelf
		getSelfToken.value = newSelf.access_token
		getAllowedRoles.value = newSelf.user.permissions
	}

	function resetSelf() {
		getSelf.value = undefined
		getSelfToken.value = undefined
		getAllowedRoles.value = undefined
	}

	return { getSelf, updateSelf, getSelfToken, getAllowedRoles, resetSelf }
})
