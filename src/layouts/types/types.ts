export enum Layout {
	BLANK = 'Blank',
	ADMIN = 'Admin'
}

export const layoutTypeToComponentMapper: Record<string, string> = {
	Admin: 'admin',
	Blank: 'blank'
}
