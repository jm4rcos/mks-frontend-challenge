import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 4rem 1rem;
	margin-top: 100px;
`;

export const ProductContainer = styled.div`
	height: 100%;
	display: grid;
	place-items: center;
	gap: 1.5rem;

	grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
	background-color: #fff;

	max-width: 900px;

	@media (max-width: 915px) {
		grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
		max-width: 100%;
	}

	@media (max-width: 480px) {
		grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
	}
`;

export const ProductCard = styled.div`
	overflow: hidden;
	border-radius: 8px;
	background-color: #fff;

	box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.13);

	.wrapper {
		width: 100%;
		height: 280px;
		display: flex;
		align-items: center;
		flex-direction: column;
		gap: 0.5rem;

		padding: 1rem;

		img {
			max-width: 150px;
			max-height: 130px;
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
			max-width: 100%;

			display: -webkit-box;
			-webkit-line-clamp: 4;

			-webkit-box-orient: vertical;
			overflow: hidden;
		}
	}

	@media (max-width: 768px) {
		.wrapper {
			height: 250px;

			img {
				max-width: 130px;
				max-height: 110px;
			}

			h3 {
				font-size: 0.9rem;
			}

			p {
				font-size: 11px;
			}
		}
	}

	@media (max-width: 480px) {
		.wrapper {
			height: 220px;

			img {
				max-width: 100px;
				max-height: 90px;
			}

			h3 {
				font-size: 0.8rem;
			}

			p {
				font-size: 10px;
			}
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
