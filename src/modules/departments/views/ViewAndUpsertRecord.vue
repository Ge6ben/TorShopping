<script lang="ts" setup>
import { useField, useForm } from 'vee-validate'
import { computed, onMounted, ref } from 'vue'
import * as yup from 'yup'
import BaseButton from '@/components/BaseButton.vue'
import {
	Actions,
	getDepartment,
	upsertDepartment
} from '@/modules/departments/api/endpoints'
import router from '@/router'
import { useNotification } from '@/composables/Notification'
import { IBreadcrumb, IDepartment } from '@/modules/departments/types/types'

const { show: showSnackbar } = useNotification()
const data = ref<IDepartment>()

const getTitle = computed(() => {
	return router.currentRoute.value.params.action
})
// TODO: Get breadcrumb from routes
const items: IBreadcrumb[] = [
	{
		title: 'Departments',
		disabled: false,
		to: '/departments'
	},
	{
		title: `${getTitle.value} department`,
		disabled: true,
		to: ''
	}
]
const schema = yup.object({
	name: yup.string().required(),
	code: yup.string().required(),
	description: yup.string().required()
})
const getData = computed((): IDepartment | undefined => data.value)

const { handleSubmit } = useForm<IDepartment>({
	validationSchema: schema,
	initialValues: getData
})
const getId = computed((): string | null =>
	router.currentRoute.value.params.action === Actions.Add
		? null
		: (router.currentRoute.value.params?.id as string)
)
const onSubmit = handleSubmit(values => {
	loading.value = true

	upsertDepartment(values, getId.value)
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
const isInEditMode = computed(
	() => router.currentRoute.value.params.action == Actions.Edit
)

onMounted(() => {
	if (isInEditMode.value || isInViewMode.value) {
		fieldsLoading.value = true
		getDepartment(getId.value)
			.then((res: { data: IDepartment }) => {
				data.value = res.data
			})
			.finally(() => {
				fieldsLoading.value = false
			})
	}
})
const isInViewMode = computed(
	() => router.currentRoute.value.params.action === Actions.View
)
const nameField = useField('name')
const codeField = useField('code')
const descriptionField = useField('description')
const loading = ref(false)
const fieldsLoading = ref(false)

const getUsers = computed(
	() => getData.value?.users.map(i => i.fullname).join(' ,')
)
const getProjects = computed(
	() => getData.value?.projects.map(i => i.title).join(' ,')
)
</script>
<template>
	<v-container>
		<v-row>
			<v-col>
				<h2>{{ getTitle }} Department</h2>
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
								:loading="fieldsLoading"
								:readonly="isInViewMode"
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
								:loading="fieldsLoading"
								:readonly="isInViewMode"
								density="compact"
								label="Code"
								name="code"
								variant="outlined"
							/>
						</v-col>
						<!--    Users Field   -->
						<v-col v-if="isInViewMode">
							<v-text-field
								v-model="getUsers"
								:loading="fieldsLoading"
								density="compact"
								label="Users Names"
								readonly
								variant="outlined"
							/>
						</v-col>
						<!--    Projects Field   -->
						<v-col v-if="isInViewMode">
							<v-text-field
								v-model="getProjects"
								:loading="fieldsLoading"
								density="compact"
								label="Project titles"
								readonly
								variant="outlined"
							/>
						</v-col>
						<!--    Description Field   -->
						<v-col cols="12">
							<v-textarea
								v-model="descriptionField.value.value"
								:error-messages="descriptionField.errorMessage.value"
								:loading="fieldsLoading"
								:readonly="isInViewMode"
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
									v-if="!isInViewMode"
									:loading="loading"
									block
									class="my-6"
									color="black"
									size="large"
									type="submit"
									variant="tonal"
									>Submit
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
