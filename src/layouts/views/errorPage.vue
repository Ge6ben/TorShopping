<script lang="ts" setup>
import router from '@/router'
import BaseButton from '@/components/BaseButton.vue'

function goBack() {
	router.back()
}
</script>

<template>
	<v-row
		align="center"
		class="d-flex flex-column text-center my-16"
		justify="center"
		no-gutters
	>
		<v-col cols="5" sm="6">
			<!--      FIXME: Handle other errors    -->
			<img
				alt="Page Not Found"
				class="mx-5"
				height="208"
				src="../../assets/errorPage404.svg"
		/></v-col>

		<v-col>
			<h1
				class="text-h5 text-error-code mt-5"
				style="font-weight: 500 !important"
			>
				Page Not Found
			</h1>
		</v-col>
		<v-col class="pa-0">
			<h1 class="text-subtitle-1 my-5">
				The page you are looking for doesn’t exist or an other error occurred
			</h1>
		</v-col>

		<v-col class="text-center" cols="3">
			<BaseButton
				block
				class="text-error-code"
				style="text-decoration: underline"
				tile
				variant="text"
				@click="goBack"
			>
				Go BACK
			</BaseButton>
		</v-col>
	</v-row>
</template>
