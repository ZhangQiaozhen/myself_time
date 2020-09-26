import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 导入全局样式表
import './assets/css/global.css'
//导入组件库
import './plugins/element.js';
// 导入组件相关样式
import '../node_modules/element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')