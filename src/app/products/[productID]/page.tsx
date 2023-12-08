import React from "react";

const Details = ({ params }: { params: { productID: string } }) => {
  return <div>Details for product {params.productID}</div>;
};

export default Details;
