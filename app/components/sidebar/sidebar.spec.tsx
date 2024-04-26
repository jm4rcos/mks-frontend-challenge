import { configureStore } from '@reduxjs/toolkit';
import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Sidebar } from '.';
import cartReducer from '../../features/cart/cart-slice';
import { closeSidebar } from '../../features/sidebar/sidebar-slice';
import store from '../../features/store';

const makeSut = () => {
	const store = configureStore({
			reducer: {
				cart: cartReducer,
			},
		});
		
	const sut = {
		render: () => render(
		<Provider store={store} >
			<Sidebar />
		</Provider>
		)
	}

	return { sut }
}

jest.mock('next/navigation', () => ({
	useRouter: () => ({
		push: jest.fn(),
	}),
	usePathname: () => '/current-path',
	useSearchParams: () => new URLSearchParams('sidebar=false'),
}));

jest.mock('../cart-item', () => ({ CartItem: () => <div>CartItem</div> }));
jest.mock('../close-button', () => ({
	CloseButton: ({ onClick }: { onClick: () => void
}) => <button onClick={onClick}>Close</button> }));

jest.mock('../../hooks/use-app-selector', () => ({
  useAppSelector: () => (
	[
      { id: 1, name: 'Product 1', price: 10, quantity: 1, photo: 'url1' },
      { id: 2, name: 'Product 2', price: 20, quantity: 2, photo: 'url2' }
    ]
  )
}));

describe('Sidebar', () => {
	it('renders correctly with products', async () => {
		const { sut } = makeSut();
		const container = sut.render();

		expect(await container.findByText('Carrinho de compras')).toBeInTheDocument();
		expect(container.getAllByText('CartItem').length).toBe(2);
	});

	it('toggles sidebar visibility on close button click', async () => {
		const { sut } = makeSut();
		const container = sut.render();

		fireEvent.click(container.getByText('Close'));
		expect(store.dispatch(closeSidebar()))
	});
});