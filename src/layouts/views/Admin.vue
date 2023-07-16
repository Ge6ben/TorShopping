<template>
	<BaseHeader v-if="!currentRouteMeta.hidePageHeader" />
	<v-navigation-drawer
		v-if="!currentRouteMeta.hideNavigation"
		permanent
		width="150px"
	>
		<template v-slot:prepend>
			<v-list-item
				lines="two"
				prepend-avatar="https://semantic-ui.com/images/avatar2/small/kristy.png"
				subtitle="Logged in"
				title="Jane Smith"
				@click="$router.push('/')"
			/>
		</template>
		<v-divider />
		<v-list density="compact" nav>
			<v-list-item
				v-for="item in getCurrentNavigation"
				:key="item.id"
				:prepend-icon="item.icon"
				:title="item.title"
				:to="item.path"
				:value="item"
				color="primary"
			>
			</v-list-item>
		</v-list>
	</v-navigation-drawer>
	<slot />
</template>

<script lang="ts" setup>
import { useRouteInfo } from '@/composables/currentRouterInfo'
import { defineAsyncComponent } from 'vue'
import { useNavigationItems } from '@/stores/navigationStore'

const { getCurrentNavigation } = useNavigationItems()
const BaseHeader = defineAsyncComponent(
	() => import('../../components/BaseHeader.vue')
)
const { currentRouteMeta } = useRouteInfo()
</script>
