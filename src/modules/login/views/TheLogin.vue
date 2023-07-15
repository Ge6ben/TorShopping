<script lang="ts" setup>
import { ref } from 'vue'

const visible = ref(false)
</script>

<template>
	<v-container class="mt-8 align-center" fill-height fluid="true">
		<v-card
			class="mx-auto pa-12 pb-8 align-center"
			elevation="8"
			max-width="448"
			rounded="lg"
		>
			<v-img
				class="mx-auto my-6"
				max-width="300"
				src="/src/assets/logo.png"
			></v-img>

			<div class="text-subtitle-1 text-medium-emphasis">Email</div>

			<v-text-field
				density="compact"
				placeholder="Email address"
				prepend-inner-icon="mdi-email-outline"
				variant="outlined"
			></v-text-field>

			<div
				class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
			>
				Password
			</div>

			<v-text-field
				:append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
				:type="visible ? 'text' : 'password'"
				density="compact"
				placeholder="Enter your password"
				prepend-inner-icon="mdi-lock-outline"
				variant="outlined"
				@click:append-inner="visible = !visible"
			></v-text-field>

			<v-btn block class="mb-8" color="blue" size="large" variant="tonal">
				Log In
			</v-btn>
		</v-card>
	</v-container>
</template>
