<script setup lang="ts">
import type { Product } from '@/types';
import { useCartStore } from '@/composables/useCartStore';

const props = defineProps<{
  item: Product;
}>();

const { removeItem } = useCartStore();

const handleRemove = () => {
  removeItem(props.item.id);
};
</script>

<template>
  <div class="cart-item">
    <span class="item-name">{{ props.item.name }}</span>
    <span class="item-price">{{ props.item.price }} ₴</span>
    <button @click="handleRemove">
      ❌ Видалити
    </button>
  </div>
</template>

<style scoped>
.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: white;
  border: 1px solid #ced4da;
  border-radius: 4px;
}

.item-name {
  font-weight: 500;
  flex-grow: 1;
}

.item-price {
  color: #343a40;
  font-weight: bold;
  margin-right: 15px;
}

.cart-item button {
  padding: 5px 10px;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.cart-item button:hover {
  background-color: #c82333;
}
</style>