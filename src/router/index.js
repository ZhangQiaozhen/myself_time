import Vue from 'vue'
import VueRouter from 'vue-router'
// import { component } from 'vue/types/umd'
import Cover from '../components/Cover.vue'
import Home from '../components/Home.vue'
import Time from '../components/Time.vue'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Cover',
    component: Cover
}, {
    path: '/home',
    name: 'Home',
    component: Home
}, {
    path: '/time',
    name: 'Time',
    component: Time
}]

const router = new VueRouter({
    routes
})
export default router