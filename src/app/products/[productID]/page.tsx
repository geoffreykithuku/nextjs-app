import React from "react";

import { Metadata } from "next";

export const generateMetadata = ({ params }: {
  params: { productID: string };
}): Metadata => {
  return {
    title: `Product ${params.productID}`,
    description: `Product ${params.productID}`,
  };
}

const Details = ({ params }: { params: { productID: string } }) => {
  return <div>Details for product {params.productID}</div>;
};

export default Details;
