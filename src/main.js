import { createApp } from 'vue'
import ElementPlus from "element-plus"
import { ElMessage } from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import { createPinia } from "pinia";

createApp(App)
  .use(createPinia())
  .use(ElementPlus)
  .mount('#app');