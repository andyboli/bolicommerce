import React, { useState, useEffect } from "react";
import { useIntl } from "react-intl";
import styled from "styled-components";
import { Row, Typography } from "antd";

import {
  CategoriesContainer,
  ProductsContainer,
  SearchContainer,
} from "../containers";
import { Categories, DomainsProducs } from "../../entities";

const MainPage: React.FC = () => {
  const intl = useIntl();
  const [products, setProducts] = useState<Partial<DomainsProducs>>({});
  const [storedSearches, setStoredSearches] = useState<Required<Categories>[]>(
    []
  );

  const setStoredSearchesState = (currentSearch: Required<Categories>) => {
    if (!storedSearches.includes(currentSearch))
      setStoredSearches((storedSearches: Required<Categories>[]) => [
        ...storedSearches,
        currentSearch,
      ]);
  };

  const setProductsState = (products: Partial<DomainsProducs>) =>
    setProducts(products);

  return (
    <MainPageWrapper>
      <MainTitle>
        {intl.formatMessage({
          id: "mainPage.title",
        })}
      </MainTitle>
      <ProductsFiltersWrapper>
        <CategoriesContainer />
        <SearchContainer
          setStoredSearches={setStoredSearchesState}
          setProducts={setProductsState}
          storedSearches={storedSearches}
        />
      </ProductsFiltersWrapper>
      <ProductsContainer products={products} />
    </MainPageWrapper>
  );
};

const MainPageWrapper = styled(Row)`
  align-items: center;
  background-color: #151515;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  padding: 10px;

  @media screen and (max-width: 480px) {
    gap: 2px;
  }
`;

const ProductsFiltersWrapper = styled(Row)`
  width: 90%;
  gap: 20px;

  @media screen and (max-width: 480px) {
    width: 100%;
    gap: 5px;
  }
`;

const MainTitle = styled(Typography.Title)`
  background-color: #f4a6b8;
`;

export default MainPage;
