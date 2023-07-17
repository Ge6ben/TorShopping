/**
 * ts type for dynamic objects which is key is a string and value is unknown
 */
export type AnyObject = Record<string, unknown>

/**
 * Item Per Page Options type
 * */
export type itemsPerPageOptionsTypes = {
	value: number
	title: string
}
// TODO:Crete file that export all types
// TODO:Crete file that export all components

export interface IDepartment {
	id: number
	name: string
	code: string
	description: string
	projects_count: number
	users_count: number
	creator: string
	updater: string
	projects: {
		id: number
		title: string
		description: string
	}[]
	users: {
		id: number
		fullname: string
		email: string
		phone: string
	}[]
	// Front end keys
	actions?: Actions
}

export interface IDataTableLink {
	url: URL
	label: string
	active: boolean
}

export interface IDataTableListResponse {
	data: IDepartment
	links: {
		first: URL
		last: URL
		prev: URL
		next: URL
	}
	meta: {
		current_page: number
		from: number
		last_page: number
		links: IDataTableLink[]
		path: URL
		per_page: number
		to: number
		total: number
	}
}

export interface IDepartmentRecordResponse {
	data: IDepartment
}

export interface IBreadcrumb {
	title: string
	disabled: boolean
	to: string
}

export enum Actions {
	View = 'View',
	Delete = 'Delete',
	Add = 'Add',
	Edit = 'Edit'
}
