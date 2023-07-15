<script lang="ts" setup>
import { ref } from 'vue'
import { useField, useForm } from 'vee-validate'
import * as yup from 'yup'
import { login } from '@/modules/login/api/endpoints'

const visible = ref(false)
const schema = yup.object({
	email: yup.string().email().required().label('E-mail'),
	password: yup.string().min(8).required()
})
const { handleSubmit } = useForm({ validationSchema: schema })
const onSubmit = handleSubmit(values => {
	loading.value = true
	login('api/auth/login', values).finally(() => {
		loading.value = false
	})
})

const emailField = useField('email')
const passwordField = useField('password')
const loading = ref(false)
</script>

<template>
	<v-container class="mt-8">
		<v-card class="mx-auto pa-12" elevation="8" max-width="448" rounded="lg">
			<!--      Logo     -->
			<v-img class="ma-12" max-width="350" src="/src/assets/logo.png" />

			<form @submit="onSubmit">
				<!--    Email Field   -->
				<v-text-field
					v-model="emailField.value.value"
					:error-messages="emailField.errorMessage.value"
					class="mb-2"
					density="compact"
					label="Email *"
					placeholder="Email address"
					prepend-inner-icon="mdi-email-outline"
					type="email"
					variant="outlined"
				/>

				<!--    Password Field   -->
				<v-text-field
					v-model="passwordField.value.value"
					:error-messages="passwordField.errorMessage.value"
					:type="visible ? 'text' : 'password'"
					density="compact"
					label="Name"
					placeholder="Enter your password"
					prepend-inner-icon="mdi-lock-outline"
					variant="outlined"
					@click:append-inner="visible = !visible"
				/>

				<!--    Submit button   -->
				<v-btn
					:loading="loading"
					block
					class="my-6"
					color="primary"
					size="large"
					type="submit"
					variant="tonal"
				>
					Log In
				</v-btn>
			</form>

			<div class="text-caption">* Required</div>
		</v-card>
	</v-container>
</template>
