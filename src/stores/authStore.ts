import { defineStore } from 'pinia'
import { ref } from 'vue'
import { ILoginResponse } from '@/modules/login/types/types'

export const authStore = defineStore('authStore', () => {
	const getSelf = ref<ILoginResponse>()

	function updateSelf(newSelf: ILoginResponse) {
		getSelf.value = newSelf
		console.log(newSelf, getSelf.value)
	}

	return { getSelf, updateSelf }
})
