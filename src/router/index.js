import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from "../views/Dashboard";
import Login from "../views/Login";
import UserProfile from "../views/UserProfile";
import ContactForm from "../views/ContactForm";
import Admin from "../views/Admin";
import Test from "../views/Testing";

Vue.use(VueRouter);

const routes = [
  {
    path: '/dashboard',
    name: 'Home',
    component: Dashboard
  },
  {
    path: '/account',
    name: 'user',
    component: UserProfile
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactForm
  },
  {
    path: '/admins',
    name: 'admins',
    component: Admin
  },
  {
    path: '/',
    name: 'dashRedirect',
    redirect: "/dashboard"
  },
  {
    path: '/test',
    name: 'test',
    component: Test
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router


/*{
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" / '../views/About.vue')
}*/