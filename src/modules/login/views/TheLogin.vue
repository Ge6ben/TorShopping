<template>
	<v-container>
		<v-card
			class="mx-auto pa-12 mt-12"
			elevation="8"
			max-width="448"
			rounded="lg"
		>
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
					label="Password *"
					placeholder="Enter your password"
					prepend-inner-icon="mdi-lock-outline"
					variant="outlined"
					@click:append-inner="visible = !visible"
				/>

				<!--    Submit button   -->
				<BaseButton
					:loading="loading"
					block
					class="my-6"
					color="black"
					size="large"
					type="submit"
					variant="tonal"
					>Log In
				</BaseButton>
			</form>

			<div class="text-caption">* Required</div>
		</v-card>
	</v-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useField, useForm } from 'vee-validate'
import * as yup from 'yup'
import { login } from '@/modules/login/api/endpoints'
import { useNotification } from '@/composables/Notification'
import router from '@/router'
import BaseButton from '@/components/BaseButton.vue'
import { authStore } from '@/stores/authStore'
import { ILoginResponse } from '@/modules/login/types/types'
import { NavigationStore } from '@/stores/navigationStore'

const { show: showSnackbar } = useNotification()

const visible = ref(false)
const schema = yup.object({
	email: yup.string().email().required().label('E-mail'),
	password: yup.string().min(8).required()
})
const { handleSubmit } = useForm({
	validationSchema: schema,
	initialValues: {
		// TODO: use NODE-ENV-FILE package to save these critical information
		// Just show in development environment
		email: process.env.NODE_ENV === 'production' ? '' : 'manager@tornet.co',
		password: process.env.NODE_ENV === 'production' ? '' : 'password'
	}
})

const mySelfStore = authStore()
const { updateSelf } = mySelfStore
const navigationStore = NavigationStore()
const { getNavigationList } = navigationStore

const onSubmit = handleSubmit(values => {
	loading.value = true

	login('api/auth/login', values)
		.then((res: ILoginResponse) => {
			updateSelf(res)
			// FIXME: temporary we use locale storage for the informations that we need to have after refresh in any other pages Backends should proved refresh endpoint to avoid using local storage!
			localStorage.setItem('me', JSON.stringify(res))

			getNavigationList()
			router.push('/')
		})
		.catch(() => {
			// TODO: Show backend error msg
			// TODO:Connect backend validation to front end when have 422 (Field errors)
			showSnackbar('An error occurred', 'error')
		})
		.finally(() => {
			loading.value = false
		})
})

const emailField = useField('email')
const passwordField = useField('password')
const loading = ref(false)
</script>
