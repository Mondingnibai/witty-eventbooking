import { createApp } from 'vue'
import App from './App.vue'

// Router
import routes from './routes/index.js'

//Boostrap CSS and JS/
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js'
import qalendarCss from 'qalendar/dist/style.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'

// Vue3 Datatable
import Vue3Datatable from '@bhplugin/vue3-datatable'
import '@bhplugin/vue3-datatable/dist/style.css'

createApp(App)
.use(qalendarCss)
.use(bootstrap)
.use(Vue3Datatable)
.use(routes)
.mount('#app')