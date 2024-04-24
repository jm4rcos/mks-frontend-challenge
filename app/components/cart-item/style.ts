import { motion } from 'framer-motion';
import styled from 'styled-components';

export const CardItemContainer = styled(motion.div)`
	padding: 1.5rem 0.85rem;
	background-color: #fff;
	border-radius: 8px;
	color: var(--text-color);

	display: flex;
	align-items: center;
	justify-content: space-between;

	position: relative;

	.close-cart-item {
		position: absolute;
		top: -0.6rem;
		right: -0.6rem;
	}

	img {
		width: 100%;
		max-width: 60px;
		border-radius: 50%;
		object-fit: contain;
	}

	h3 {
		font-size: 1rem;
		font-weight: 400;
		max-width: 110px;
	}
`;

export const CartItemValue = styled.h2`
	font-weight: 700;
	font-size: 1.2rem;
`;
