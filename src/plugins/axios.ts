import axios, { AxiosError, AxiosResponse } from 'axios'
import router from '@/router'
import { useRouteInfo } from '@/composables/currentRouterInfo'

const { currentRouteFullPath } = useRouteInfo()

const AxiosInstance = axios.create({
	headers: { Accept: 'application/vnd.api+json' },
	baseURL: 'https://tmaua.tornest.net:1337',
	timeout: 100000
})
/*
 * Add a response Interceptor
 */
AxiosInstance.interceptors.response.use(
	async function (response: AxiosResponse) {
		return response.data ? { ...response.data } : response
	},
	function (error: AxiosError) {
		// Any status codes that falls outside the range of 2xx cause this function
		// to trigger.
		if (
			error.response &&
			error.response.status === 401 &&
			currentRouteFullPath.value !== '/login'
		) {
			router.push('/login').finally()
		}
		const parseError = {
			...error,
			response: error.response?.data
		}
		return Promise.reject(parseError)
	}
)

export default AxiosInstance
