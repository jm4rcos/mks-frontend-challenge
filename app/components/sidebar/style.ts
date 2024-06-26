import { motion } from 'framer-motion';
import styled from 'styled-components';

export const SidebarContainer = styled(motion.div)`
	max-width: 486px;
	width: 100%;
	background-color: var(--primary-color);
	position: fixed;
	box-shadow: -5px 0 6px 0 rgba(0, 0, 0, 0.13);

	display: flex;
	flex-direction: column;
	gap: 3rem;

	height: 100vh;
	right: 0;
	z-index: 999;

	.sidebar-header {
		padding: 2rem 1.5rem;
		display: flex;
		justify-content: space-between;
		align-items: center;

		h3 {
			max-width: 180px;
			font-size: 1.5rem;
			font-weight: 700;
			color: #fff;
		}
	}

	.sidebar-content {
		padding: 2rem 1.5rem;
		display: flex;
		flex-direction: column;
		gap: 1.25rem;

		overflow: auto;
		scrollbar-width: thin;
		scrollbar-color: #6969dd #e0e0e0;
		scrollbar-width: thin;
		scrollbar-gutter: stable;

		&::-webkit-scrollbar {
			width: 10px;
		}

		&::-webkit-scrollbar-thumb {
			border-radius: 100px;
			background: #8070d4;
			border: 6px solid rgba(0, 0, 0, 0.2);
		}
	}

	.sidebar-footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		margin-top: auto;
		position: relative;
		color: #fff;
	}
`;
