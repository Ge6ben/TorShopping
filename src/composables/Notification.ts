import { reactive } from 'vue'

const notification = reactive({
	open: false,
	message: '',
	color: 'success',
	location: undefined,
	time: 5000 // 5 seconds
})

export const useNotification = () => {
	const show = (
		message: string,
		color = 'success',
		location: any = 'top',
		time = 5000
	) => {
		notification.message = message
		notification.color = color
		notification.location = location
		notification.time = time
		notification.open = true
	}

	return {
		notification,
		show
	}
}
