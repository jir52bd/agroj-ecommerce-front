<script setup>
import BulletinNav from './layout/BulletinNav.vue';
import HeadingNav from './layout/HeadingNav.vue';
import MainNav from './layout/MainNav.vue';
import Footer from './layout/Footer.vue';
// import Navbar from './layout/Navbar.vue';
import { onMounted } from 'vue';
import { useAuthStore } from './store/useAuthStore';
import CartDrawer from './components/cart/CartDrawer.vue';
import FloatingCart from './components/cart/FloatingCart.vue';

const auth = useAuthStore()

onMounted(
  () =>{
     auth.loadUser
  }
)


</script>

<template>
  <div>
    
    <BulletinNav />
    <HeadingNav />
    <MainNav />
    <!-- <Navbar /> -->
    <main class="p-0">
      <router-view />
    </main>

    <FloatingCart />
    <CartDrawer />
    <Footer />
  </div>  
</template>

<style scoped>
/*  */
</style>
