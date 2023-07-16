import AxiosInstance from '@/plugins/axios'
import { useNotification } from '@/composables/Notification'
import { authStore } from '@/stores/authStore'
import {
	IDataTableListResponse,
	IDepartment
} from '@/modules/departments/types/types'

const mySelfStore = authStore()
const { getSelfToken } = mySelfStore

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
				Authorization: `Bearer ${getSelfToken}`
			}
		})
			.then(response => {
				resolve(response)
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
 */
export function createDepartment(data = {}): Promise<IDepartment> {
	const url = '/api/department'
	const formData = new FormData()
	Object.entries(data).forEach(([key, value]) => {
		formData.append(key, value as string)
	})

	return AxiosInstance.post(url, formData, {
		headers: {
			Authorization: `Bearer ${getSelfToken}`
		}
	})
}
