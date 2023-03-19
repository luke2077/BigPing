import { createApp } from 'vue'
import App from './App.vue'
//清除浏览器默认样式
import 'reset-css'
//全局样式
import './assets/style/global.scss'

//引入rem
import 'amfe-flexible'
//import './rem.js'

createApp(App).mount('#app')
