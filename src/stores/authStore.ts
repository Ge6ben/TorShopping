import { defineStore } from 'pinia'
import { ref } from 'vue'
import { ILoginResponse } from '@/modules/login/types/types'

export const authStore = defineStore('authStore', () => {
	const getSelf = ref<ILoginResponse>()
	const getSelfToken = ref<string>()

	function updateSelf(newSelf: ILoginResponse) {
		getSelf.value = newSelf
		getSelfToken.value = newSelf.access_token
	}

	return { getSelf, updateSelf, getSelfToken }
})
