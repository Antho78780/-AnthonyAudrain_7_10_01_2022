import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
 
  {
    path: "/",
    name: "Login",
    component: () => import("../views/LoginView.vue")
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/RegisterView.vue")
  },
    {
      path: "/accueil",
      name: "Accueil",
      component: () => import("../views/AccueilView.vue")
    }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
