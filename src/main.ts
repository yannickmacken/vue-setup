import { createApp } from "vue"
import { createPinia } from "pinia"

import App from "./App.vue"
import router from "./router"
import "./assets/main.css"
import PrimeVue from "primevue/config"
import Dialog from "primevue/dialog"

const app = createApp(App)

app.use(PrimeVue)
app.use(createPinia())
app.use(router)
app.component("Dialog", Dialog)

app.mount("#app")
