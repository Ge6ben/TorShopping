export enum Layout {
	BLANK = 'Blank',
	ADMIN = 'Admin'
}

export const layoutTypeToComponentMapper: Record<string, string> = {
	Admin: 'admin',
	Blank: 'blank'
}

export interface INavigationList {
	id: number
	title: string
	icon: string
	path: string
	codename?: string | string[]
}
