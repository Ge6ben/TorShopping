<template>
	<!--  Page Header   -->
	<BaseHeader v-if="!currentRouteMeta.hidePageHeader" />
	<!--  Side Bar   -->
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

		<template v-slot:append>
			<BaseButton
				append-icon="mdi-logout-variant"
				block
				color="black"
				size="large"
				variant="text"
				@click="canOpenDialog = true"
				>Log Out
			</BaseButton>
		</template>
	</v-navigation-drawer>

	<!-- Logout Dialog   -->
	<BaseDialog
		v-model="canOpenDialog"
		:ok-button-props="{ loading }"
		content="Are you sure do you want to logout?"
		title="Logout"
		@submit="handleLogout"
	></BaseDialog>
	<!-- @slot for Rest Content   -->
	<slot />
</template>

<script lang="ts" setup>
import { useRouteInfo } from '@/composables/currentRouterInfo'
import { defineAsyncComponent, ref } from 'vue'
import { useNavigationItems } from '@/stores/navigationStore'
import BaseButton from '@/components/BaseButton.vue'
import BaseDialog from '@/components/BaseDialog.vue'

import AxiosInstance from '@/plugins/axios'
import router from '@/router'
import { useNotification } from '@/composables/Notification'

const { show: showSnackbar } = useNotification()

const { getCurrentNavigation } = useNavigationItems()
const BaseHeader = defineAsyncComponent(
	() => import('../../components/BaseHeader.vue')
)
const { currentRouteMeta } = useRouteInfo()

const loading = ref(false)
const canOpenDialog = ref(false)

/**
 * The Logout allows users to securely log out of the application
 */
function handleLogout() {
	loading.value = true
	AxiosInstance.post(
		'/api/auth/logout',
		{},
		{
			headers: {
				Authorization: 'Bearer 233|2gIxNsm3m89x00J2J64mCeCaTIu629XC06SA4dJz'
			}
		}
	)
		.then(() => {
			showSnackbar('Logout successfully')
			router.push('/login')
		})
		.catch(err => {
			// TODO: Show backend error msg
			showSnackbar(err.response.message, 'error')
		})

		.finally(() => {
			loading.value = false
		})
}
</script>
