import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Domaine Laluc - Home Page',
        metaTags: [
          {
            name: 'description',
            content: 'The home page of our app.'
          },
          {
            property: 'og:description',
            content: 'The home page of our app.'
          }
        ]
      }
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../pages/ProductsPage.vue')
    },
    {
      path: '/products/:id?',
      name: 'products',
      component: () => import('../pages/ProductsPage.vue')
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: () => import('../pages/AboutPage.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../pages/ContactPage.vue')
    },
    {
      path: '/CGU',
      name: 'CGU',
      component: () => import('../pages/CGUPage.vue')
    },
    {
      path: '/legalNotice',
      name: 'legalNotice',
      component: () => import('../pages/LegalNoticePage.vue')
    },
    {
      path: '/terroir',
      name: 'terroir',
      component: () => import('../pages/TerroirPage.vue')
    },
    {
      path: '/recipes',
      name: 'recipes',
      component: () => import('../pages/RecipesPage.vue')
    }
  ]
})

export default router