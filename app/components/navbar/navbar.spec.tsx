import { configureStore } from '@reduxjs/toolkit';
import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Navbar } from '.';
import cartReducer from '../../features/cart/cart-slice';
import sidebarReducer, { openSidebar } from '../../features/sidebar/sidebar-slice';

const makeSut = () => {
    const store = configureStore({
			reducer: {
				cart: cartReducer,
				sidebar: sidebarReducer
			},
	});
	const sut = {
        render: () => render (
            <Provider store={store} >
                <Navbar />
            </Provider>
		)
	}

	return { sut, store }
}

jest.mock('next/navigation', () => ({
	useRouter: () => ({
		push: jest.fn(),
	}),
	usePathname: () => '/current-path',
	useSearchParams: jest.fn().mockReturnValueOnce(
        new URLSearchParams('sidebar=false')
    ),
}));

jest.mock('../../hooks/use-app-selector', () => ({
  useAppSelector: () => (
	[
      { id: 1, name: 'Product 1', price: 10, quantity: 1, photo: 'url1' },
      { id: 2, name: 'Product 2', price: 20, quantity: 2, photo: 'url2' }
    ]
  )
}));

describe(Navbar.name, () => {
	it('renders sidebar correctly when CartButton clicked', async () => {
		const { sut, store } = makeSut(); 
		const container = sut.render();

        fireEvent.click(container.getByTitle('CartButton'));

        expect(store.dispatch(openSidebar()))
	});
});