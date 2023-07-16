<template>
	<v-app>
		<v-main>
			<Notification />

			<router-view v-slot="{ Component, route }">
				<component :is="layoutTypeToComponentMapper[route.meta.layout]">
					<component :is="Component" :key="route.path" />
				</component>
			</router-view>
		</v-main>
	</v-app>
</template>

<script lang="ts" setup>
import Notification from '@/components/Notification.vue'
import { layoutTypeToComponentMapper } from '@/layouts/types/types'
</script>
<style>
html {
	overflow-y: auto !important;
}
</style>
