<script lang="ts" setup>
const homeOpts = [
	{
		id: 1,
		title: 'Landing Page',
		icon: 'mdi-file-document-plus',
		path: '/landing-page',
		// FIXME: Handle permissionCond
		permissionCode: ''
	},
	{
		id: 2,
		title: 'Admin Dashboard',
		icon: 'mdi-file-document-plus',
		path: '/departments',
		permissionCode: ''
	}
]
</script>

<template>
	<v-row class="text-center" no-gutters>
		<v-col class="mt-12" cols="12"
			><img alt="" src="@/assets/logo.png"
		/></v-col>
		<v-col cols="12">
			<h1 class="text-h4 my-12">Welcome to TorShopping</h1>
		</v-col>
		<v-col cols="12">
			<v-item-group>
				<v-container>
					<v-row class="justify-center">
						<v-col v-for="item in homeOpts" :key="item.id" cols="12" md="4">
							<v-card
								class="pa-4 elevation-3 rounded"
								height="200"
								@click="() => {}"
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
