const unsupported = document.getElementById('unsupported')
unsupported?.remove()

import './assets/base.scss'
import './assets/fonts.scss'
import './assets/ark-ui.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
