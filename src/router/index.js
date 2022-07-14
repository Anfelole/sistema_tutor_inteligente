import Vue from 'vue'
import VueRouter from 'vue-router'
import pantallaEntrada from '../views/EntradaView.vue'
import cargarData from "@/components/cargarData.vue"
import entrenamiento from "@/components/entrenamiento.vue"
import prediccion from "@/components/prediccion.vue"

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'entrada',
    component: pantallaEntrada,
  },
  {
    path: '/entrenamiento',
    name: 'entrenamiento',
    component: entrenamiento
  },
  {
    path: '/cargarData',
    name: 'cargarData',
    component: cargarData,
    
  },
  {
    path: '/prediccion',
    name: 'prediccion',
    component: prediccion
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
