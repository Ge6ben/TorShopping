<template>
	<v-row class="pa-2 text-end" no-gutters>
		<v-col>
			<v-spacer />
		</v-col>
		<v-col class="d-flex justify-end" cols="3" lg="1" md="2">
			<v-img
				alt=""
				src="@/assets/logo.svg"
				style="cursor: pointer"
				width="100"
				@click="$router.push('/')"
			/>
		</v-col>
	</v-row>
</template>

<script lang="ts" setup>
//
</script>
