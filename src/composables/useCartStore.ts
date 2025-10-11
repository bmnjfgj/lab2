import { reactive, computed } from 'vue';
import type { Product } from '@/types';

interface CartState {
    items: Product[];
}

const state: CartState = reactive({
    items: [],
});

export function useCartStore() {
    const totalItemsCount = computed(() => state.items.length);

    const totalAmount = computed(() =>
        state.items.reduce((sum, item) => sum + item.price, 0)
    );

    function addItem(product: Product) {
        state.items.push(product);
    }

    function removeItem(id: number) {
        const index = state.items.findIndex(item => item.id === id);
        if (index !== -1) {
            state.items.splice(index, 1);
        }
    }

    return {
        items: computed(() => state.items),
        totalItemsCount,
        totalAmount,
        addItem,
        removeItem,
    };
}