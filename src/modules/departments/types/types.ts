/**
 * vuetify data table header
 * */
export type DataTableHeaderOpt<T> = {
	key: keyof T
	title: string
	value: keyof T | string | ((item: T) => unknown)

	colspan?: number
	rowspan?: number

	fixed?: boolean
	align?: 'start' | 'end' | 'center'

	width?: number | string
	minWidth?: string
	maxWidth?: string

	sortable?: boolean
	sort?: unknown
	sortKey?: keyof T
}

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
