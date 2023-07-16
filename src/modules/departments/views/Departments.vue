<script lang="ts" setup>
import { Ref, ref } from 'vue'
import { AnyObject } from 'yup'
import {
	DataTableHeaderOpt,
	IDataTableListResponse,
	IDepartment,
	itemsPerPageOptionsTypes
} from '@/modules/departments/types/types'
import { dataTable } from '@/modules/departments/api/endpoints'
import BaseButton from '@/components/BaseButton.vue'
import router from '@/router'

const tableItemPerPage: Ref<number> = ref(3)
const headers: DataTableHeaderOpt<IDepartment> = [
	{
		title: 'Name',
		key: 'name'
	},
	{
		title: 'Code',
		key: 'code'
	},
	{
		title: 'Description',
		key: 'description'
	},
	{
		title: 'Projects count',
		key: 'projects_count'
	},
	{
		title: 'Users count',
		key: 'users_count'
	},
	{
		title: 'Creator',
		key: 'creator'
	},
	{
		title: 'Updater',
		key: 'updater'
	}
]

const data = ref<IDataTableListResponse>()

const loading = ref(false)
const tableCount = ref(0)

const itemsPerPageOptions: itemsPerPageOptionsTypes[] = [
	{ value: 1, title: '1' },
	{ value: 3, title: '3' },
	{ value: 7, title: '7' },
	{ value: 9, title: '9' }
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
		.finally(() => (loading.value = false))
}

function handleActions() {
	router.push({
		name: 'department-record',
		params: {
			action: 'add'
		}
	})
}
</script>
<template>
	<v-container>
		<v-row no-gutters>
			<v-col class="my-8 text-end" cols="12">
				<BaseButton @click="handleActions">Add</BaseButton>
			</v-col>
			<v-col>
				<v-data-table-server
					v-model:items-per-page="tableItemPerPage"
					:headers="headers"
					:items="data"
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
							<v-col cols="10"></v-col>
							<v-col class="pb-0 mt-4" cols="2">
								<v-autocomplete
									:items="itemsPerPageOptions"
									:model-value="tableItemPerPage"
									density="compact"
									hide-details
									item-title="title"
									item-value="value"
									label="Items per page"
									variant="solo"
									@update:model-value="fetchData({ itemsPerPage: $event })"
								/>
								<!-- TODO:Show total number-->
							</v-col>
						</v-row>
					</template>
				</v-data-table-server>
				<!--          FixME:handle text-wrap , fixed header and  fixed actions-->
			</v-col>
		</v-row>
	</v-container>
</template>
