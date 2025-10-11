<script setup lang="ts">
import { ref } from 'vue';
import ProductCard from '@/components/ProductCard.vue';
import CartPanel from '@/components/CartPanel.vue';
import type { Product } from '@/types';

const availableProducts: Product[] = [
  { id: 101, name: 'Світшот "Vue"', price: 850 },
  { id: 102, name: 'Книга "TypeScript"', price: 420 },
  { id: 103, name: 'Кружка "Coffee"', price: 180 },
  { id: 104, name: 'Бейдж "Dev"', price: 50 },
];

const isCartVisible = ref(false);

const toggleCart = () => {
  isCartVisible.value = !isCartVisible.value;
};
</script>

<template>
  <div id="app-container">
    <h1>🛒 Скарбничка покупок</h1>

    <button @click="toggleCart" class="cart-toggle-btn">
      {{ isCartVisible ? 'Приховати' : 'Показати' }} Скарбничку
    </button>

    <hr>

    <h2>Доступні товари</h2>
    <div class="product-grid">
      <ProductCard
          v-for="product in availableProducts"
          :key="product.id"
          :product="product"
      />
    </div>

    <CartPanel v-if="isCartVisible" />
  </div>
</template>

<style>
/* СТИЛІ ДЛЯ App.vue / ЗАГАЛЬНІ СТИЛІ */

body {
  font-family: Arial, sans-serif;
  margin: 20px;
  background-color: #f4f4f9;
  color: #333;
}

h1, h2 {
  color: #007bff;
  border-bottom: 2px solid #eee;
  padding-bottom: 5px;
}

.cart-toggle-btn {
  padding: 10px 15px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
  margin-bottom: 20px;
}

.cart-toggle-btn:hover {
  background-color: #218838;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 20px;
}
</style>