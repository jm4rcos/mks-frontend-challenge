import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cart/cart-slice';
import sidebarReducer from './sidebar/sidebar-slice';

const store = configureStore({
	reducer: {
		cart: cartReducer,
		sidebar: sidebarReducer,
	},
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
