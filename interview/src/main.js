import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import jaysUi from "../modules/jays-ui"
const app = createApp(App)

app.use(router).use(jaysUi)

app.mount('#app')
