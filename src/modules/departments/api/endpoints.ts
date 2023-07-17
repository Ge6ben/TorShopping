import AxiosInstance from '@/plugins/axios'
import { useNotification } from '@/composables/Notification'
import { authStore } from '@/stores/authStore'
import {
	IDataTableListResponse,
	IDepartment,
	IDepartmentRecordResponse
} from '@/modules/departments/types/types'
import { storeToRefs } from 'pinia'

const mySelfStore = authStore()
const { getSelfToken } = storeToRefs(mySelfStore)

/**
 * Data table method that gets data list with pagination that is suitable for
 * Vue data table.
 * @param perPage
 */
export function dataTable(perPage: number): Promise<IDataTableListResponse> {
	const { show: showSnackbar } = useNotification()

	return new Promise((resolve, reject) => {
		AxiosInstance.get('/api/department/list', {
			params: { perPage },
			headers: {
				Authorization: `Bearer ${getSelfToken.value}`
			}
		})
			.then((response: unknown) => {
				resolve(response as IDataTableListResponse)
			})
			.catch(error => {
				showSnackbar('An error occurred', 'error')
				reject(error.response.data)
			})
	})
}

/**
 * Create a new record in the backend via post method
 * @param data Post body data.
 * @param id
 */
export function upsertDepartment(
	data: IDepartment = {} as IDepartment,
	id?: string | null
): Promise<IDepartment> {
	const url = id ? `/api/department/update/${id}` : '/api/department'
	const formData = new FormData()
	Object.entries(data).forEach(([key, value]) => {
		formData.append(key, value as string)
	})
	if (!id) {
		return AxiosInstance.post(url, formData, {
			headers: {
				Authorization: `Bearer ${getSelfToken.value}`
			}
		})
	} else {
		return AxiosInstance.put(url, data, {
			headers: {
				Authorization: `Bearer ${getSelfToken.value}`
			}
		})
	}
}

/**
 * Get a  record in the backend
 * @param id
 */
export function getDepartment(
	id: string | null
): Promise<IDepartmentRecordResponse> {
	const url = `/api/department/single/${id}`

	return AxiosInstance.get(url, {
		headers: {
			Authorization: `Bearer ${getSelfToken.value}`
		}
	})
}

/**
 * Delete a  record in the backend
 * @param id
 */
export function deleteDepartment(id: string) {
	const url = `/api/department/${id}/`

	return AxiosInstance.delete(url, {
		headers: {
			Authorization: `Bearer ${getSelfToken.value}`
		}
	})
}
