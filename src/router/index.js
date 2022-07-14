import Vue from 'vue'
import VueRouter from 'vue-router'
import pantallaEntrada from '../views/EntradaView.vue'
import cargarData from "@/components/cargarData.vue"
import Contenidos from "@/components/Contenidos.vue"
import Evaluacion from "@/components/Evaluacion.vue"

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'entrada',
    component: pantallaEntrada,
  },
  {
    path: '/contenidos',
    name: 'contenidos',
    component: Contenidos
  },
  {
    path: '/cargarData',
    name: 'cargarData',
    component: cargarData,
    
  },
  {
    path: '/evaluacion',
    name: 'evaluacion',
    component: Evaluacion
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
