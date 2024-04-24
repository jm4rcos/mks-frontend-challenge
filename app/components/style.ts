import styled from 'styled-components';

export const Button = styled.button`
	font-family: 'Montserrat', sans-serif;
	border-radius: 8px;
	border: none;
	outline: none;
	padding: 0.75rem 1rem;
	cursor: pointer;

	display: flex;
	align-items: center;
	gap: 0.75rem;

	color: #000;
	background-color: #fff;

	span {
		font-size: 1rem;
		font-weight: 700;
	}
`;

export const HomeContainer = styled.div`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	position: relative;
`;
