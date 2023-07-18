/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { VDataTableServer } from 'vuetify/labs/VDataTable'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
	components: {
		...components,
		// TODO: When they become stable remove @component VDataTable
		VDataTableServer
	},
	directives,
	theme: {
		themes: {
			light: {
				colors: {
					primary: '#EBD96B',
					secondary: '#5CBBF6',
					navColor: '#242323',
					navBtnTextColor: '#FEFEFE',
					newArrivalTitle: '#191919',
					newArrivalSubTitle: '#7F7F7F'
				}
			}
		}
	}
})
