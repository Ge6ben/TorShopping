<script lang="ts" setup>
import { Ref, ref } from 'vue'
import { AnyObject } from 'yup'
import {
	Actions,
	IDataTableListResponse,
	IDepartment,
	itemsPerPageOptionsTypes
} from '@/modules/departments/types/types'
import {
	dataTable,
	deleteDepartment
} from '@/modules/departments/api/endpoints'
import BaseButton from '@/components/BaseButton.vue'
import router from '@/router'
import BaseDialog from '@/components/BaseDialog.vue'
import { useNotification } from '@/composables/Notification'
import permissions from '@/permissions/permissions.json'
import { hasPermission } from '@/composables/hasPermission'

const tableItemPerPage: Ref<number> = ref(3)
const headers: {
	key: keyof IDepartment
	title: string
	sortable: boolean
}[] = [
	{
		title: 'Name',
		key: 'name',
		sortable: false
	},
	{
		title: 'Code',
		key: 'code',
		sortable: false
	},
	// {
	// 	title: 'Description',
	// 	key: 'description',
	// 	sortable: false
	// },
	{
		title: 'Projects count',
		key: 'projects_count',
		sortable: false
	},
	{
		title: 'Users count',
		key: 'users_count',
		sortable: false
	},
	{
		title: 'Creator',
		key: 'creator',
		sortable: false
	},
	{
		title: 'Updater',
		key: 'updater',
		sortable: false
	},
	{ title: 'Actions', key: 'actions', sortable: false }
]
const { show: showSnackbar } = useNotification()
const data = ref<IDepartment>()
const deleteLoading = ref(false)
const selectedIdToDelete = ref()
const loading = ref(false)
const tableCount = ref(0)
const canOpenDialog = ref(false)
const itemsPerPageOptions: itemsPerPageOptionsTypes[] = [
	{ value: 1, title: '1' },
	{ value: 2, title: '2' },
	{ value: 4, title: '4' },
	{ value: 8, title: '8' },
	{ value: 16, title: '16' },
	{ value: 32, title: '32' }
	//   TODO:Handle option that request for all items
]

/**
 * load data table items
 * @param event
 * */
function fetchData(event: AnyObject) {
	const { itemsPerPage } = event
	tableItemPerPage.value = itemsPerPage
	loading.value = true
	dataTable(itemsPerPage)
		.then((res: IDataTableListResponse) => {
			data.value = res.data
			tableCount.value = res.meta.total
		})
		.catch(() => {
			// TODO: Show backend error msg
			showSnackbar('An error occurred', 'error')
		})
		.finally(() => (loading.value = false))
}

function handleActions(action: Actions, id?: number) {
	router.push({
		name: 'department-record',
		params: {
			action: action,
			id: id
		}
	})
}

function handleDeleteRecord() {
	deleteLoading.value = true
	deleteDepartment(selectedIdToDelete.value)
		.then(() => {
			canOpenDialog.value = false
			selectedIdToDelete.value = null
			fetchData({ itemsPerPage: tableItemPerPage.value })
		})
		.catch(() => {
			// TODO: Show backend error msg
			showSnackbar('An error occurred', 'error')
		})
		.finally(() => (deleteLoading.value = false))
}

function openDeleteDialog(id: number) {
	selectedIdToDelete.value = id
	canOpenDialog.value = true
}

function hasPermissionToSeeBtn(permCode: string) {
	return hasPermission([permCode])
}
</script>
<template>
	<v-container>
		<v-row no-gutters>
			<v-col class="align-center">
				<h1>Departments</h1>
			</v-col>
			<v-col
				v-if="hasPermissionToSeeBtn(permissions.DEPARTMENT_CREATE)"
				class="text-end"
			>
				<BaseButton @click="handleActions(Actions.Add)">Add</BaseButton>
			</v-col>
			<v-col class="mt-8" cols="12">
				<v-data-table-server
					v-model:items-per-page="tableItemPerPage"
					:headers="headers as any"
					:items="data as any"
					:items-length="tableCount"
					:items-per-page-options="itemsPerPageOptions ?? []"
					:loading="loading"
					class="elevation-1 text-no-wrap"
					fixed-header
					height="400px"
					@update:options="fetchData($event)"
				>
					<template v-slot:bottom>
						<v-row>
							<v-col class="d-flex align-center pb-0" cols="10">
								<span class="px-4 text-caption">Total: {{ tableCount }}</span>
							</v-col>
							<v-col class="pb-0 mt-4" cols="2">
								<v-autocomplete
									:items="itemsPerPageOptions"
									:model-value="tableItemPerPage"
									density="compact"
									hide-details
									item-title="title"
									item-value="value"
									label="Items per page"
									@update:model-value="fetchData({ itemsPerPage: $event })"
								/>
							</v-col>
						</v-row>
					</template>

					<template v-slot:[`item.actions`]="{ item }">
						<v-icon
							v-if="hasPermissionToSeeBtn(permissions.DEPARTMENT_VIEW)"
							class="me-2"
							size="small"
							@click="handleActions(Actions.View, item.raw.id)"
						>
							mdi-account-eye
						</v-icon>
						<v-icon
							v-if="hasPermissionToSeeBtn(permissions.DEPARTMENT_EDIT)"
							size="small"
							@click="handleActions(Actions.Edit, item.raw.id)"
						>
							mdi-pencil
						</v-icon>
						<v-icon
							v-if="hasPermissionToSeeBtn(permissions.DEPARTMENT_DELETE)"
							size="small"
							@click="openDeleteDialog(item.raw.id)"
						>
							mdi-delete
						</v-icon>
					</template>
					<!--          TODO: Add reset button-->
				</v-data-table-server>
				<!--          FixME:handle text-wrap , fixed header and  fixed actions-->
			</v-col>
		</v-row>

		<BaseDialog
			v-model="canOpenDialog"
			:ok-button-props="{ loading: deleteLoading }"
			content="Deleting the record will remove it from the system permanently, Are you sure you want to delete it?"
			title="Delete Record"
			@submit="handleDeleteRecord"
		></BaseDialog>
	</v-container>
</template>
