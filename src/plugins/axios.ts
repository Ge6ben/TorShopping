import axios from 'axios'

const AxiosInstance = axios.create({
	headers: { Accept: 'application/vnd.api+json' },
	baseURL: 'https://tmaua.tornest.net:1337'
})
export default AxiosInstance
