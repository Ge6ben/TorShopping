<script lang="ts" setup>
import { useField, useForm } from 'vee-validate'
import { ref } from 'vue'
import * as yup from 'yup'
import BaseButton from '@/components/BaseButton.vue'
import { createDepartment } from '@/modules/departments/api/endpoints'
import router from '@/router'
import { useNotification } from '@/composables/Notification'
import { IBreadcrumb } from '@/modules/departments/types/types'

const { show: showSnackbar } = useNotification()

const items: IBreadcrumb[] = [
	{
		title: 'Departments',
		disabled: false,
		to: '/departments'
	},
	{
		title: 'Add department',
		disabled: true,
		to: ''
	}
]
const schema = yup.object({
	name: yup.string().required(),
	code: yup.string().required(),
	description: yup.string().required()
})
const { handleSubmit } = useForm({
	validationSchema: schema
})
const onSubmit = handleSubmit(values => {
	loading.value = true

	createDepartment(values)
		.then(() => {
			router.push('/departments')
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

const nameField = useField('name')
const codeField = useField('code')
const descriptionField = useField('description')
const loading = ref(false)
</script>
<template>
	<v-container>
		<v-row>
			<v-col>
				<h2>Add Department</h2>
			</v-col>
			<v-col cols="12">
				<v-breadcrumbs :items="items" class="pa-0" divider=" > " />
			</v-col>
			<v-col class="mt-8" cols="12">
				<form @submit="onSubmit">
					<v-row>
						<!--    name Field   -->
						<v-col>
							<v-text-field
								v-model="nameField.value.value"
								:error-messages="nameField.errorMessage.value"
								class="mb-2"
								density="compact"
								label="Name *"
								variant="outlined"
							/>
						</v-col>
						<!--    Code Field   -->
						<v-col>
							<v-text-field
								v-model="codeField.value.value"
								:error-messages="codeField.errorMessage.value"
								density="compact"
								label="Code"
								variant="outlined"
							/>
						</v-col>
						<!--    Description Field   -->
						<v-col cols="12">
							<v-textarea
								v-model="descriptionField.value.value"
								:error-messages="descriptionField.errorMessage.value"
								auto-grow
								density="compact"
								label="Description"
								variant="outlined"
							/>
						</v-col>

						<!--    Submit button   -->
						<v-col
							align-self="end"
							class="px-4 text-end align-send d-flex justify-end"
							cols="12"
						>
							<div>
								<v-spacer />
								<BaseButton
									:loading="loading"
									block
									class="my-6"
									color="black"
									size="large"
									type="submit"
									variant="tonal"
									>Add
								</BaseButton>
								<!-- TODO:Add cancel or reset button -->
							</div>
						</v-col>
					</v-row>
				</form>
			</v-col>
		</v-row>
	</v-container>
</template>
