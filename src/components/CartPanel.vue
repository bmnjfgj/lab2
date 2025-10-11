<script setup lang="ts">
import { useCartStore } from '@/composables/useCartStore';
import CartItem from '@/components/CartItem.vue';

const { items, totalAmount, totalItemsCount } = useCartStore();
</script>

<template>
  <div class="cart-panel-container">
    <h2>Скарбничка ({{ totalItemsCount }})</h2>

    <div class="cart-summary">
      <p>Всього товарів: <strong>{{ totalItemsCount }}</strong></p>
      <p>Загальна вартість: <strong>{{ totalAmount.toFixed(2) }} ₴</strong></p>
    </div>

    <hr>

    <div v-if="items.length > 0" class="cart-list">
      <CartItem
          v-for="item in items"
          :key="item.id"
          :item="item"
      />
    </div>
    <p v-else class="empty-cart">
      Ваша скарбничка порожня. Додайте щось!
    </p>
  </div>
</template>

<style scoped>
.cart-panel-container {
  margin-top: 30px;
  padding: 20px;
  border: 2px solid #007bff;
  border-radius: 10px;
  background-color: #e9f7ff;
}

.cart-summary {
  padding: 10px;
  margin-bottom: 15px;
  background-color: #d1ecf1;
  border-radius: 5px;
  border-left: 5px solid #007bff;
}

.cart-summary strong {
  color: #004085;
  font-size: 1.1em;
}

.cart-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.empty-cart {
  text-align: center;
  color: #6c757d;
  font-style: italic;
  padding: 20px;
  border: 1px dashed #ced4da;
  border-radius: 5px;
}
</style>