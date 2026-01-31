<script setup>
import { ref, computed, onMounted } from 'vue'

// --- Mock API data (replace with real API later) ---
const loading = ref(true)
const orders = ref([])

onMounted(() => {
  setTimeout(() => {
    orders.value = [
      {
        id: 'ORD-1001',
        date: '2026-01-28',
        customer: 'Jahirul Islam',
        total: 3450,
        payment: 'COD',
        status: 'processing'
      },
      {
        id: 'ORD-1002',
        date: '2026-01-27',
        customer: 'Rahim Uddin',
        total: 1299,
        payment: 'bKash',
        status: 'completed'
      },
      {
        id: 'ORD-1003',
        date: '2026-01-26',
        customer: 'Karim Ahmed',
        total: 2200,
        payment: 'Nagad',
        status: 'cancelled'
      }
    ]
    loading.value = false
  }, 800)
})

// --- Filters ---
const search = ref('')
const statusFilter = ref('all')

const filteredOrders = computed(() => {
  return orders.value.filter(o => {
    const matchSearch = o.id.toLowerCase().includes(search.value.toLowerCase())
    const matchStatus = statusFilter.value === 'all' || o.status === statusFilter.value
    return matchSearch && matchStatus
  })
})

const statusClasses = status => {
  switch (status) {
    case 'completed': return 'bg-green-100 text-green-700'
    case 'processing': return 'bg-yellow-100 text-yellow-700'
    case 'cancelled': return 'bg-red-100 text-red-700'
    default: return 'bg-gray-100 text-gray-600'
  }
}
</script>

<template>
  <div class="max-w-7xl mx-auto px-4 py-8">
    <!-- Header -->
    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
      <h1 class="text-2xl font-semibold text-gray-800">My Orders</h1>

      <div class="flex gap-3">
        <input
          v-model="search"
          type="text"
          placeholder="Search by Order ID"
          class="w-full md:w-64 rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <select
          v-model="statusFilter"
          class="rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="all">All Status</option>
          <option value="processing">Processing</option>
          <option value="completed">Completed</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </div>
    </div>

    <!-- Table -->
    <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-x-auto">
      <table class="min-w-full text-sm">
        <thead class="bg-gray-50 text-gray-600">
          <tr>
            <th class="px-5 py-3 text-left font-medium">Order ID</th>
            <th class="px-5 py-3 text-left font-medium">Date</th>
            <th class="px-5 py-3 text-left font-medium">Customer</th>
            <th class="px-5 py-3 text-right font-medium">Total</th>
            <th class="px-5 py-3 text-left font-medium">Payment</th>
            <th class="px-5 py-3 text-left font-medium">Status</th>
            <th class="px-5 py-3 text-right font-medium">Action</th>
          </tr>
        </thead>

        <tbody v-if="!loading">
          <tr
            v-for="order in filteredOrders"
            :key="order.id"
            class="border-t hover:bg-gray-50"
          >
            <td class="px-5 py-4 font-medium text-indigo-600">{{ order.id }}</td>
            <td class="px-5 py-4">{{ order.date }}</td>
            <td class="px-5 py-4">{{ order.customer }}</td>
            <td class="px-5 py-4 text-right">৳{{ order.total }}</td>
            <td class="px-5 py-4">{{ order.payment }}</td>
            <td class="px-5 py-4">
              <span
                class="px-3 py-1 rounded-full text-xs font-medium"
                :class="statusClasses(order.status)"
              >
                {{ order.status }}
              </span>
            </td>
            <td class="px-5 py-4 text-right">
              <button class="text-indigo-600 hover:underline text-sm">
                View
              </button>
            </td>
          </tr>

          <tr v-if="filteredOrders.length === 0">
            <td colspan="7" class="px-5 py-10 text-center text-gray-500">
              No orders found
            </td>
          </tr>
        </tbody>

        <!-- Loading state -->
        <tbody v-else>
          <tr>
            <td colspan="7" class="px-5 py-10 text-center text-gray-400">
              Loading orders...
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
/* Optional fine-tuning for production polish */
</style>
