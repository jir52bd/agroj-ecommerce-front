import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../store/useAuthStore'

const routes = [
  /* =======================
     PUBLIC PAGES
  ======================== */

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
    name: 'PaymentUs',
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

  /* =======================
     PRODUCT ROUTES
  ======================== */

  {
    path: '/products/:category?/:sub?/:child?',
    name: 'Products',
    component: () => import('../pages/Products.vue'),
  },

  {
    path: '/product/:id',
    name: 'ProductDetails',
    component: () => import('../pages/ProductDetails.vue'),
  },

  /* =======================
     AUTH REQUIRED ROUTES
  ======================== */

  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../pages/Cart.vue'),
    meta: { requiresAuth: true },
  },

  {
    path: '/checkout',
    name: 'Checkout',
    component: () => import('../pages/Checkout.vue'),
    meta: { requiresAuth: true },
  },

  // {
  //   path: '/profile',
  //   name: 'Profile',
  //   component: () => import('../pages/Profile.vue'),
  //   meta: { requiresAuth: true },
  // },

  // {
  //   path: '/orders',
  //   name: 'Orders',
  //   component: () => import('../pages/Orders.vue'),
  //   meta: { requiresAuth: true },
  // },

  {
    path: '/wishlist',
    name: 'wishlist',
    component: () => import('../pages/WishList.vue'),
  },

{
  path: '/profile',
  component: () => import('../layout/ProfileLayout.vue'),
  meta: { requiresAuth: true },
  children: [
    {
      path: '',
      name: 'MyAccount',
      component: () => import('../pages/profile/MyAccount.vue'),
    },
    {
      path: 'orders',
      name: 'MyOrders',
      component: () => import('../pages/profile/MyOrders.vue'),
    },
    {
      path: 'wishlist',
      name: 'Wishlist',
      component: () => import('../pages/profile/Wishlist.vue'),
    },
    // {
    //   path: 'settings',
    //   name: 'ProfileSettings',
    //   component: () => import('../pages/profile/Settings.vue'),
    // },
  ],
},

  /* =======================
     AUTH PAGES
  ======================== */

  {
    path: '/login',
    name: 'Login',
    component: () => import('../auth/Login.vue'),
  },

  {
    path: '/register',
    name: 'Register',
    component: () => import('../auth/Register.vue'),
  },

  /* =======================
     404 PAGE (LAST)
  ======================== */

  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../pages/additional/NotFound.vue'),
  },
]

/* =======================
   ROUTER INSTANCE
======================== */

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

/* =======================
   GLOBAL AUTH GUARD
======================== */

router.beforeEach((to) => {
  const auth = useAuthStore()

  // protected route কিন্তু login নাই
  if (to.meta.requiresAuth && !auth.isLoggedIn) {
    return {
      name: 'Login',
      query: { redirect: to.fullPath },
    }
  }

  // already logged in কিন্তু আবার login page এ যাচ্ছে
  if (to.name === 'Login' && auth.isLoggedIn) {
    return { name: 'Home' }
  }
})

export default router
