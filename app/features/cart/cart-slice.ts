import { Product } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartState {
	products: Product[];
}

const initialState: CartState = {
	products: [],
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addProduct: (state, action: PayloadAction<Product>) => {
			const index = state.products.findIndex(
				(product) => product.id === action.payload.id
			);
			if (index !== -1) {
				state.products[index].quantity += 1;
			} else {
				state.products.push({ ...action.payload, quantity: 1 });
			}
		},
		removeProduct: (state, action: PayloadAction<number>) => {
			state.products = state.products.filter(
				(product) => product.id !== action.payload
			);
		},
		increaseProduct: (state, action: PayloadAction<number>) => {
			const index = state.products.findIndex(
				(product) => product.id === action.payload
			);
			if (index !== -1) {
				state.products[index].quantity += 1;
			}
		},
		decreaseProduct: (state, action: PayloadAction<number>) => {
			const index = state.products.findIndex(
				(product) => product.id === action.payload
			);
			if (index !== -1 && state.products[index].quantity > 1) {
				state.products[index].quantity -= 1;
			} else if (index !== -1 && state.products[index].quantity === 1) {
				state.products.splice(index, 1);
			}
		},
	},
});

export default cartSlice.reducer;
export const { addProduct, removeProduct, increaseProduct, decreaseProduct } =
	cartSlice.actions;
