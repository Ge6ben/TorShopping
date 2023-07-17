<template>
	<v-app>
		<v-main>
			<Notification />

			<router-view v-slot="{ Component, route }">
				<component
					:is="layoutTypeToComponentMapper[route.meta.layout as string]"
				>
					<component :is="Component" :key="route.path" />
				</component>
			</router-view>
		</v-main>
	</v-app>
</template>

<script lang="ts" setup>
import Notification from '@/components/Notification.vue'
import { layoutTypeToComponentMapper } from '@/layouts/types/types'
import { onBeforeMount } from 'vue'
import { authStore } from '@/stores/authStore'
import { NavigationStore } from '@/stores/navigationStore'
import { useRouteInfo } from '@/composables/currentRouterInfo'
import router from '@/router'

const mySelfStore = authStore()
const { updateSelf, getSelf } = mySelfStore
const navigationStore = NavigationStore()
const { getNavigationList } = navigationStore

const { currentRouteFullPath } = useRouteInfo()
// FIXME: temporary we use locale storage for the informations that we need to have after refresh in any other pages Backends should proved refresh endpoint to avoid using local storage!
onBeforeMount(() => {
	let localMe = localStorage.getItem('me') || null

	if (!localMe?.length && !getSelf && currentRouteFullPath.value !== '/login') {
		router.push('/login')
	}
	if (localMe?.length && !getSelf) {
		let retrievedMe = JSON.parse(localMe)
		updateSelf(retrievedMe)
		getNavigationList()
	}
})
</script>
<style>
html {
	overflow-y: auto !important;
}
</style>
