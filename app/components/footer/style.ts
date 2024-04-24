import styled from 'styled-components';

export const FooterContainer = styled.footer`
	background-color: var(--footer-color);
	width: 100%;
	position: fixed;
	bottom: 0;

	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0.5rem;

	p {
		color: #000;
		font-size: 12px;
		font-weight: 400;
		font-family: 'Montserrat', sans-serif;
	}
`;
