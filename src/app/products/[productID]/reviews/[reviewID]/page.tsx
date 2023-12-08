import React from "react";

const Review = ({
  params,
}: {
  params: {
    productID: string;
    reviewID: string;
  };
}) => {
  return (
    <div>
      Review {params.reviewID} for product {params.productID}
    </div>
  );
};

export default Review;
