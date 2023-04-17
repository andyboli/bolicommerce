import React from "react";
import { Row } from "antd";
import styled from "styled-components";

import { ProductCardComponent } from "../components";
import { DomainsProducs, Product } from "../../entities";

interface ProductsContainerProps {
  products: Partial<DomainsProducs>;
}

const ProductsContainer: React.FC<ProductsContainerProps> = ({ products }) => {
  const sortedProducts = [
    ...(products.buscape || []),
    ...(products.freemarket || []),
  ].sort(({ title: titleA }, { title: titleB }) =>
    titleA.localeCompare(titleB)
  );

  return (
    <ProductslWrapper>
      {sortedProducts.map((product: Product, index) => (
        <ProductCardComponent product={product} key={`product-${index}`} />
      ))}
    </ProductslWrapper>
  );
};

const ProductslWrapper = styled(Row)`
  width: 100%;
  max-width: 90vw;
  margin: 0;
  max-heigth: 90vw;
  gap: 20px;

  @media screen and (max-width: 480px) {
    gap: 2px;
    padding: 0;
    justify-content: center;
  }
`;

export default ProductsContainer;
