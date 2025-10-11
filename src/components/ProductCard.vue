<script setup lang="ts">
import type { Product } from '@/types';
import { useCartStore } from '@/composables/useCartStore';

const props = defineProps<{
  product: Product;
}>();

const { addItem } = useCartStore();

const handleAdd = () => {
  addItem(props.product);
};
</script>

<template>
  <div class="card product-card">
    <h3>{{ props.product.name }}</h3>
    <p class="price">{{ props.product.price }} ₴</p>
    <button @click="handleAdd">
      ➕ Додати
    </button>
  </div>
</template>

<style scoped>
.product-card {
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.product-card h3 {
  margin-top: 0;
  color: #333;
}

.product-card .price {
  font-size: 1.2em;
  font-weight: bold;
  color: #dc3545;
}

.product-card button {
  padding: 8px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s;
}

.product-card button:hover {
  background-color: #0056b3;
}
</style>