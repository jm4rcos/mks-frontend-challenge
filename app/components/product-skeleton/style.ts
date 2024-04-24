import styled, { keyframes } from 'styled-components';

export const CardContainerSkeleton = styled.div`
	height: 100%;
	width: 100%;

	display: grid;
	place-items: center;
	gap: 1.5rem;

	grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
	background-color: #fff;

	max-width: 900px;
`;

const skeletonAnimation = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`;

export const SkeletonEffect = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	background: linear-gradient(90deg, transparent, #f0f0f0, transparent);
	background-size: 200% 100%;
	animation: ${skeletonAnimation} 2s infinite linear;
	z-index: 9999;
`;

export const CardSkeleton = styled.div`
	overflow: hidden;
	border-radius: 8px;
	background-color: #fff;
	position: relative;

	box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.13);

	.wrapper {
		width: 100%;
		display: flex;
		align-items: center;
		flex-direction: column;
		gap: 0.5rem;

		padding: 1rem;

		.product-img {
			width: 171px;
			height: 171px;
			border-radius: 8px;
			background-color: var(--skeleton-color);
		}

		.product-title {
			width: 8rem;
			height: 1rem;
			border-radius: 8px;
			background-color: var(--skeleton-color);
		}

		.product-description {
			width: 8rem;
			height: 1rem;
			border-radius: 8px;
			background-color: var(--skeleton-color);
		}
	}
	.buy-button-skeleton {
		background-color: var(--skeleton-color);
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #fff;
		gap: 0.5rem;

		padding: 1rem;
		outline: none;
		border: none;

		.bag-icon-skeleton {
			width: 1.5rem;
			height: 1.5rem;
			background-color: #fff;
			border-radius: 12px;
		}
		.buy-button-text {
			width: 4.5rem;
			height: 1rem;
			background-color: #fff;
			border-radius: 12px;
		}
	}
`;
