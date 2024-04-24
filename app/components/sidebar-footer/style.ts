import styled from 'styled-components';

export const SidebarFooterContainer = styled.footer`
	display: flex;
	flex-direction: column;
	width: 100%;
	position: fixed;
	bottom: 0;
`;

export const FinishOrderButton = styled.button`
	width: 100%;
	outline: none;
	border: none;
	padding: 1.75rem;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #000;

	color: #fff;
	font-size: 1.4rem;
	font-weight: 700;

	cursor: pointer;
`;
