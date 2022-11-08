import { createApp } from 'vue'
import App from './App.vue'
import { router } from '@/router'
import { createPinia } from 'pinia'
import '@/store'

import '@/styles/index.scss'
import 'uno.css'

// If you want to use ElMessage, import it.
import 'element-plus/theme-chalk/src/message.scss'

// import 'element-plus/theme-chalk/el-loading.css'
// import 'element-plus/theme-chalk/el-message.css'
// import 'element-plus/theme-chalk/el-notification.css'
// import 'element-plus/theme-chalk/el-message-box.css'

const app = createApp(App)
app.use(router).use(createPinia()).mount('#app')
