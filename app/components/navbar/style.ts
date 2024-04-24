import styled from 'styled-components';

export const NavbarContainer = styled.nav`
	position: fixed;
	top: 0;
	background-color: var(--primary-color);
	width: 100%;
	height: 80px;

	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 2rem 4rem;
`;

export const LogoContainer = styled.div`
	display: flex;
	align-items: flex-end;
	gap: 0.5rem;

	h1 {
		font-size: 1.5rem;
		font-weight: 700;
	}

	p {
		font-size: 1rem;
		font-weight: 300;
		margin-bottom: 4px;
	}
`;
