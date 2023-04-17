import React from "react";
import { useIntl } from "react-intl";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { MenuProps, Row } from "antd";

import { DropdownComponent } from "../components";
import { PRODUCTS_CATEGORIES, DOMAIN_CATEGORIES } from "../../entities";

const CategoriesContainer: React.FC = () => {
  const intl = useIntl();
  const [searchParams, setSearchParams] = useSearchParams();

  const category = (searchParams.get("category") || "") as
    | PRODUCTS_CATEGORIES
    | "";
  const domain = (searchParams.get("domain") || "") as DOMAIN_CATEGORIES | "";

  const mapDomainCategoriesToLabel: Record<DOMAIN_CATEGORIES, string> = {
    [DOMAIN_CATEGORIES.BUSCAPE]: intl.formatMessage({
      id: "categoriesContainer.domainDropdown.item.buscape",
    }),
    [DOMAIN_CATEGORIES.FREEEMARKET]: intl.formatMessage({
      id: "categoriesContainer.domainDropdown.item.freeMarket",
    }),
    [DOMAIN_CATEGORIES.ALL]: intl.formatMessage({
      id: "categoriesContainer.domainDropdown.item.all",
    }),
  };

  const mapProductCategoriesToLabel: Record<PRODUCTS_CATEGORIES, string> = {
    [PRODUCTS_CATEGORIES.MOBILE]: intl.formatMessage({
      id: "categoriesContainer.productsDropdown.item.mobile",
    }),
    [PRODUCTS_CATEGORIES.REFRIGERATOR]: intl.formatMessage({
      id: "categoriesContainer.productsDropdown.item.refrigerator",
    }),
    [PRODUCTS_CATEGORIES.TV]: intl.formatMessage({
      id: "categoriesContainer.productsDropdown.item.tv",
    }),
  };

  const domainCategories: MenuProps["items"] = [
    {
      label: mapDomainCategoriesToLabel[DOMAIN_CATEGORIES.ALL],
      key: DOMAIN_CATEGORIES.ALL,
    },
    {
      label: mapDomainCategoriesToLabel[DOMAIN_CATEGORIES.BUSCAPE],
      key: DOMAIN_CATEGORIES.BUSCAPE,
    },
    {
      label: mapDomainCategoriesToLabel[DOMAIN_CATEGORIES.FREEEMARKET],
      key: DOMAIN_CATEGORIES.FREEEMARKET,
    },
  ];

  const productsCategories: MenuProps["items"] = [
    {
      label: mapProductCategoriesToLabel[PRODUCTS_CATEGORIES.MOBILE],
      key: PRODUCTS_CATEGORIES.MOBILE,
    },
    {
      label: mapProductCategoriesToLabel[PRODUCTS_CATEGORIES.REFRIGERATOR],
      key: PRODUCTS_CATEGORIES.REFRIGERATOR,
    },
    {
      label: mapProductCategoriesToLabel[PRODUCTS_CATEGORIES.TV],
      key: PRODUCTS_CATEGORIES.TV,
    },
  ];

  const domainMenu: MenuProps = {
    items: domainCategories,
    onClick: ({ key: filterValue }) =>
      setSearchParams({
        domain: filterValue,
        category,
      }),
  };

  const productsMenu: MenuProps = {
    items: productsCategories,
    onClick: ({ key: filterValue }) =>
      setSearchParams({
        domain,
        category: filterValue,
      }),
  };

  const domainLabel = domain
    ? mapDomainCategoriesToLabel[domain]
    : intl.formatMessage({
        id: "categoriesContainer.domainDropdown.defaultLabel.domainCategories",
      });

  const productLabel = category
    ? mapProductCategoriesToLabel[category]
    : intl.formatMessage({
        id: "categoriesContainer.productsDropdown.defaultLabel.productsCategories",
      });

  return (
    <CategoriesWrapper>
      <DropdownComponent label={domainLabel} menu={domainMenu} />
      <DropdownComponent label={productLabel} menu={productsMenu} />
    </CategoriesWrapper>
  );
};

const CategoriesWrapper = styled(Row)`
  width: 40%;
  gap: 2%;

  @media screen and (max-width: 480px) {
    width: 100%;
    justify-content: center;
  }
`;

export default CategoriesContainer;
