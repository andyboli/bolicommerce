import React from "react";
import { useIntl } from "react-intl";
import { Card, Typography, Button, Row } from "antd";
import styled from "styled-components";

import {
  Product,
  DOMAIN_CATEGORIES,
  PRODUCTS_CATEGORIES,
} from "../../entities";

interface CardComponentProps {
  product: Product;
}

const ProductCardComponent: React.FC<CardComponentProps> = ({ product }) => {
  const intl = useIntl();

  const mapCategory: Record<PRODUCTS_CATEGORIES, string> = {
    [PRODUCTS_CATEGORIES.MOBILE]: intl.formatMessage({
      id: "productCardComponent.category.mobile",
    }),
    [PRODUCTS_CATEGORIES.REFRIGERATOR]: intl.formatMessage({
      id: "productCardComponent.category.refrigerator",
    }),
    [PRODUCTS_CATEGORIES.TV]: intl.formatMessage({
      id: "productCardComponent.category.tv",
    }),
  };

  return (
    <CardWrapper>
      <StyledCard
        hoverable
        cover={<img alt={product.title} src={product.image} />}
      >
        <Card.Meta title={product.title} description={product.description} />
        <Typography.Text>{mapCategory[product.category]}</Typography.Text>
        <Typography.Text>{product.price}</Typography.Text>
      </StyledCard>
      {product.domain === DOMAIN_CATEGORIES.BUSCAPE && (
        <BuscapeButton>
          <Typography.Link href={product.url}>
            {intl.formatMessage({
              id: "productCardComponent.button.buscape",
            })}
          </Typography.Link>
        </BuscapeButton>
      )}
      {product.domain === DOMAIN_CATEGORIES.FREEEMARKET && (
        <FreemarketButton>
          <Typography.Link href={product.url}>
            {intl.formatMessage({
              id: "productCardComponent.button.freemarket",
            })}
          </Typography.Link>
        </FreemarketButton>
      )}
    </CardWrapper>
  );
};

const CardWrapper = styled(Row)`
  max-width: 200px;
  gap: 10px;
  display: flex;
  flex-flow: column;
  align-itens: space-between;
  justify-content: space-between;
  background-color: white;
  padding: 10px;

  height: 400px;

  .ant-card-cover > img {
    max-height: 240px;
  }

  .ant-card-body {
    padding: 0;
    display: flex;
    flex-flow: column;
    align-content: space-between;
  }
`;

const FreemarketButton = styled(Button)`
  background-color: #e09f3e;

  :hover {
    background-color: #151515;
    a {
      color: #f4a6b8;
    }
  }
`;

const BuscapeButton = styled(Button)`
  background-color: #9e2a2b;

  :hover {
    background-color: #151515;
    a {
      color: #f4a6b8;
    }
  }
`;

const StyledCard = styled(Card)`
  min-height: 90%;
`;

export default ProductCardComponent;
