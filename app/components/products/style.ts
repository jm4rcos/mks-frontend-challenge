import styled from 'styled-components';

export const ProductContainer = styled.div`
	display: grid;
	place-items: center;
	gap: 1.5rem;

	grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
	background-color: #fff;

	max-width: 900px;
`;

export const ProductCard = styled.div`
	overflow: hidden;
	border-radius: 8px;
	background-color: #fff;

	box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.13);

	.wrapper {
		width: 100%;
		display: flex;
		align-items: center;
		flex-direction: column;
		gap: 0.5rem;

		padding: 1rem;

		img {
			max-width: 171px;
			object-fit: contain;
		}

		h3 {
			font-size: 1rem;
			font-weight: 400;
			color: var(--text-color);
		}

		p {
			font-size: 12px;
			font-weight: 300;
			color: var(--text-color);
		}
	}
`;

export const BuyButton = styled.button`
	background-color: var(--primary-color);
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #fff;
	gap: 1rem;

	padding: 1rem;
	outline: none;
	border: none;
	cursor: pointer;

	p {
		color: #fff;
		font-weight: 600;
		text-transform: uppercase;
		font-size: 0.75rem;
		font-family: 'Montserrat', sans-serif;
	}
`;
