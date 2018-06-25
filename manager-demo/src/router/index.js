import Login from '../views/login/Login'
import Layout from '../views/layout/Layout.vue'

export default {
  routes : [
    {path : '/', component : Login},
    {path : '/login',component : Login},
    {path : '/layout', component : Layout}
  ]
}
