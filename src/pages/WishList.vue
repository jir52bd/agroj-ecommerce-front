<script setup>
import { useProductStore } from '../store/useProductStore';
import { useCartStore } from '../store/useCartStore';

const productStore = useProductStore();
const cartStore = useCartStore();

const moveToCart = (product) => {
    cartStore.addToCart(product)
    productStore.removeFromWishlist(product.id)
}

</script>
<template>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-9 my-5 p-10">
        <div
            v-for="item in productStore.wishlist"
            :key="item.id"
            class="border p-2 rounded shadow-sm relative"
        >
            <img :src="item.thumbnail" :alt="item.name">
            <h3 class="text-lg">{{ item.name }}</h3>
            <p class="text-sm">Price - {{ item.price }}</p>
           
            <button
                @click="moveToCart(item)"
                class="mt-2 border px-3 py-1 rounded-md w-full bg-green-600 text-white hover:bg-green-500">
                Move To Cart
            </button>
        </div>

        <p
        v-if="!productStore.wishlist.length"
        class="col-span-full text-center text-gray-500"
        >
            Your wishlist is empty
        </p>        
    </div>
</template>