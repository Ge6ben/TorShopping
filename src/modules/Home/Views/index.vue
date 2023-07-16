<script lang="ts" setup>
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { NavigationStore } from '@/stores/navigationStore'
import { INavigationList } from '@/layouts/types/types'

const store = NavigationStore()
const { navigationItems } = storeToRefs(store)

const pages = computed((): INavigationList[] => {
	return navigationItems.value
})
</script>

<template>
	<v-row class="text-center" no-gutters>
		<v-col cols="12">
			<h1 class="text-h4 my-12">Welcome to TorShopping</h1>
		</v-col>
		<v-col cols="12">
			<v-item-group>
				<v-container>
					<v-row class="justify-center">
						<v-col v-for="item in pages" :key="item.id" cols="12" md="4">
							<v-card
								:to="item.path"
								class="pa-4 elevation-3 rounded"
								height="200"
							>
								<div
									class="bg-primary rounded-circle pa-6 ma-auto my-2"
									style="width: 100px; height: 100px"
								>
									<v-icon :size="50" color="white"> {{ item.icon }}</v-icon>
								</div>
								<v-card-title> {{ item.title }}</v-card-title>
							</v-card>
						</v-col>
					</v-row>
				</v-container>
			</v-item-group>
		</v-col>
	</v-row>
</template>
