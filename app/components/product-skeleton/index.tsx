import { CardContainerSkeleton, CardSkeleton, SkeletonEffect } from "./style";

const ProductSkeleton = () => (
  <CardContainerSkeleton>
    <CardSkeletons />
  </CardContainerSkeleton>
);

export default ProductSkeleton;

export const CardSkeletons = () => (
  <>
    {Array.from({ length: 6 }).map((_, index) => (
      <CardSkeleton key={index}>
        <SkeletonEffect />
        <div className="wrapper">
          <div className="product-img"/>
              <div className="product-title" />
              <div className="product-description"/>
          </div>
          <div className="buy-button-skeleton">
            <div className="bag-icon-skeleton" />
            <div className="buy-button-text" />
          </div>
      </CardSkeleton>
    ))}
  </>
);