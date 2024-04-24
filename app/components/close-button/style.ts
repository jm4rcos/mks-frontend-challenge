import styled from 'styled-components';

type CloseButtonContainer = {
	size?: number;
};

export const CloseButtonContainer = styled.button<CloseButtonContainer>`
	cursor: pointer;
	outline: none;
	border: none;
	border-radius: 50%;
	height: ${({ size }) => (size ? size + 'px' : '38px')};
	width: ${({ size }) => (size ? size + 'px' : '38px')};
	background-color: #000;
	display: grid;
	place-items: center;

	p {
		font-family: 'Montserrat', sans-serif;
		font-weight: 400;
		size: 1.6rem;
	}
`;
