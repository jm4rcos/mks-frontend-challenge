import styled from 'styled-components';

export const QuantityInputContainer = styled.div`
	display: flex;
	align-items: center;
	border-radius: 8px;
	padding: 0.2rem;
	border: 1px solid #bfbfbf;
	gap: 0.5rem;
	position: relative;

	p {
		padding-inline: 0.4rem;
		font-weight: 600;
	}

	button {
		background: none;
		border: none;
		cursor: pointer;
		color: #000;
		font-size: 1.2rem;
		padding: 0.2rem 0.7rem;
	}

	.minus-button {
		border-right: 1px solid #bfbfbf;
	}

	.plus-button {
		border-left: 1px solid #bfbfbf;
	}
`;

export const Label = styled.p`
	font-size: 0.7rem;
	font-weight: 500;
	color: #000;
`;
