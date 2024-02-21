import { createRouter } from 'vue-router'
import CatalogStore from '../components/CatalogStore.vue'
import CatalogStoreCart from '../components/CatalogStoreCart.vue'

const routes = [
  { path: '/', name: 'catalog', component: CatalogStore },
  { path: '/cart', name: 'cart', component: CatalogStoreCart },
]

export default function (history) {
  return createRouter({
    history,
    routes
  })
}