import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../pages/Home.vue'),
    },
  { 
    path: '/about-us',
    name: 'AboutUs',
    component: () => import('../pages/additional/AboutUs.vue'),
  },
  {
    path: '/contact-us',
    name: 'ContactUs',
    component: () => import('../pages/additional/ContactUs.vue'),
  },
  {
    path: '/payment-us',
    name: 'PaymentUS',
    component: () => import('../pages/additional/PaymentUs.vue'),
  },
  {
    path: '/store-location',
    name: 'StoreLocation',
    component: () => import('../pages/additional/StoreLocation.vue'),
  },
  {
     path: '/terms-of-service',
     name: 'TermsOfService',
     component: () => import('../pages/additional/TermsOfService.vue'),
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: () => import('../pages/additional/PrivacyPolicy.vue'),
  },
  {
    path: '/refund-policy',
    name: 'RefundPolicy',
    component: () => import('../pages/additional/RefundPolicy.vue'),
  },
  // {
  //   path: "/products/:category?/:sub?/:child?",
  //   name: "products",
  //   component: () => import('../pages/product/Products.vue'),
  // },
  {
    path: "/products/:category?/:sub?/:child?",
    name: "products",
    component: () => import('../pages/Products.vue'),
  },
 {
    path: "/product/:id",
    name: "product-details",
    component: () => import("../pages/ProductDetails.vue"),
  },
  {
  path: "/cart",
  name: "cart",
  component: () => import("../pages/Cart.vue"),
},

  // {
  //   path: '/products/:id',
  //   name: 'ProductDetails',
  //   component: () => import('../pages/ProductDetails.vue'),
  // },

  {
    path: '/:pathMatch(.*)*', 
    name: 'NotFound',
    component: () => import('../pages/additional/NotFound.vue'),
  }

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
export default router
