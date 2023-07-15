export interface ILoginResponse {
	status: string
	access_token: string
	user: {
		id: number
		fullname: string
		email: string
		phone: string
		image: URL
		manager: string
		position: string
		department: string
		active: number
		created_at: string
		created_by: number
		role: string
		permissions: string[]
		project_permissions: []
	}
	token_type: string
}
