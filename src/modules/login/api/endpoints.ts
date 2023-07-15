import AxiosInstance from '@/plugins/axios'
import { ILoginResponse } from '@/modules/login/types/types'

/**
 * Create a new record in the backend via post method
 * @param url
 * @param data Post body data.
 */
export function login(url: string, data = {}): Promise<ILoginResponse> {
	const formData = new FormData()
	Object.entries(data).forEach(([key, value]) => {
		formData.append(key, value as string)
	})

	return AxiosInstance.post(url, formData)
}
