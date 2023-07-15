/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'
import Blank from '@/layouts/views/Blank.vue'
import Admin from '@/layouts/views/Admin.vue'

const app = createApp(App)

app.component('Admin', Admin)
app.component('Blank', Blank)
registerPlugins(app)
app.mount('#app')
