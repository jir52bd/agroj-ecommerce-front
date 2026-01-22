<template>
  <section class="bg-[#f7f4ef] py-12">
    <div class="max-w-7xl mx-auto px-4">

      <div class="grid grid-cols-2 sm:grid-cols-4 gap-8">
        <div
          v-for="(item, index) in products"
          :key="index"
          class="text-center group cursor-pointer"
        >
        <RouterLink :to="{ name: 'ProductDetails', params: { id: index } }">
          <!-- Image Wrapper -->
          <div class="relative w-full max-w-[220px] mx-auto mb-4">

            <!-- Default Image -->
            <img
              :src="item.image"
              :alt="item.title"
              class="w-full transition-opacity duration-500 group-hover:opacity-0"
            />

            <!-- Hover Image -->
            <img
              :src="item.hoverImage"
              :alt="item.title"
              class="w-full absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            />
          </div>

          <p class="text-sm font-medium text-gray-800">
            {{ item.title }}
          </p>
          <p class="text-xs text-gray-600 mt-1">
            from Tk {{ item.price }}
          </p>
          </RouterLink>
        </div>
        
      </div>

      <div class="flex justify-center mt-12">
        <button
          class="bg-green-700 text-white text-xs tracking-widest px-8 py-3 hover:bg-green-600 transition"
        >
          VIEW ALL
        </button>
      </div>

    </div>
  </section>
</template>


<script>
export default {
  name: "NewArrivals",
  data() {
    return {
      products: [
        {
          title: "Burgundy - Trinket Basket",
          price: "1950.00",
          image: "../src/assets/img/products/1.jpg",
          hoverImage: "../src/assets/img/products/1-hover.jpg",
        },
        {
          title: "Bluewave - Trinket Basket",
          price: "1950.00",
          image: "../src/assets/img/products/2.jpg",
          hoverImage: "../src/assets/img/products/1-hover.jpg",
        },
        {
          title: "Sandstone - Trinket Basket",
          price: "1950.00",
          image: "../src/assets/img/products/3.jpg",
          hoverImage: "../src/assets/img/products/1-hover.jpg",
        },
        {
          title: "Raven - Trinket Basket",
          price: "1950.00",
          image: "../src/assets/img/products/4.jpg",
          hoverImage: "../src/assets/img/products/1-hover.jpg",
        },
        {
          title: "Burgundy - Doormat",
          price: "795.00",
          image: "../src/assets/img/products/5.jpg",
          hoverImage: "../src/assets/img/products/1-hover.jpg",
        },
        {
          title: "Bluewave - Doormat",
          price: "795.00",
          image: "../src/assets/img/products/6.jpg",
          hoverImage: "../src/assets/img/products/1-hover.jpg",
        },
      ],
    };
  },
};
</script>
