import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/sass/style.scss'
import '@/assets/js/jquery-3.6.0.min.js'
import '@/assets/js/dropdown.js'
import VueApexCharts from 'vue3-apexcharts';
// import ApexCharts from 'apexcharts'
import './assets/js/charts.min.js'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueApexCharts);
app.mount('#app')
