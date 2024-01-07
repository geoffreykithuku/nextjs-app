import React from "react";

function randomInt(count: number) {
  return Math.floor(Math.random() * count);
}

const Review = ({
  params,
}: {
  params: {
    productID: string;
    reviewID: string;
  };
}) => {
  const random = randomInt(2);

  if (random === 1) {
    throw new Error("Error loading review");
  }

  return (
    <div>
      Review {params.reviewID} for product {params.productID}
    </div>
  );
};

export default Review;
