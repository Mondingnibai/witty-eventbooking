import { createApp } from 'vue'
import App from './App.vue'

// Router
import routes from './routes/index.js'

//Boostrap CSS and JS/
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'

createApp(App)
.use(bootstrap)
.use(routes)
.mount('#app')