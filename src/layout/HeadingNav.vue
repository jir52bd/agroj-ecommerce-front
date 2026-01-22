<script setup>

</script>

<template>
    <div>
        <header class="w-full border-b border-gray-200">
            <div class="max-w-7xl max-auto px-4">
                <div class="relative flex items-center h-20">
                    <!--center logo-->
                    <div class="absolute left-1/2 -translate-x-1/2">
                        <img src="../assets/img/agroj-logo.png" alt="Agroj Logo" class="h-10 object-contain"/>
                    </div>

                    <!--right nav-->
                    <div class="ml-auto flex item-center space-x-6 text-gray-500">
                        <!--Search button-->
                        <button class="flex item-center gap-1 hover:text-black">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /> 
                            </svg>
                            <span class="text-xs">Search</span>
                        </button>
                        <!--Account button-->
                        <button class="flex item-center gap-1 hover:text-black">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                            <span class="text-xs">Account</span>
                        </button>

                        <!--Cart button-->
                        <button class="flex item-center gap-1 hover:text-black">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                            <span class="text-xs">Cart - 0</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>