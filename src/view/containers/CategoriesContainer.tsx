import React from "react";
import { useIntl } from "react-intl";
import { MenuProps } from "antd";

import { DropdownComponent } from "../components";
import {
  Categories,
  PRODUCTS_CATEGORIES,
  WEB_CATEGORIES,
} from "../../entities";

interface CategoriesContainerProps {
  categories: Categories;
  setCategories: React.Dispatch<React.SetStateAction<Categories>>;
}

const CategoriesContainer: React.FC<CategoriesContainerProps> = ({
  categories: { productCategory, webCategory },
  setCategories,
}) => {
  const intl = useIntl();

  const mapWebCategoriesToLabel: Record<WEB_CATEGORIES, string> = {
    [WEB_CATEGORIES.BUSCAPE]: intl.formatMessage({
      id: "categoriesContainer.webDropdown.item.buscape",
    }),
    [WEB_CATEGORIES.FREEE_MARKET]: intl.formatMessage({
      id: "categoriesContainer.webDropdown.item.freeMarket",
    }),
    [WEB_CATEGORIES.ALL]: intl.formatMessage({
      id: "categoriesContainer.webDropdown.item.all",
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

  const webCategories: MenuProps["items"] = [
    {
      label: mapWebCategoriesToLabel[WEB_CATEGORIES.ALL],
      key: WEB_CATEGORIES.ALL,
    },
    {
      label: mapWebCategoriesToLabel[WEB_CATEGORIES.BUSCAPE],
      key: WEB_CATEGORIES.BUSCAPE,
    },
    {
      label: mapWebCategoriesToLabel[WEB_CATEGORIES.FREEE_MARKET],
      key: WEB_CATEGORIES.FREEE_MARKET,
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

  const webMenu: MenuProps = {
    items: webCategories,
    onClick: ({ key }) =>
      setCategories((categories) => ({
        ...categories,
        webCategory: key as WEB_CATEGORIES,
      })),
  };

  const productsMenu: MenuProps = {
    items: productsCategories,
    onClick: ({ key }) =>
      setCategories((categories) => ({
        ...categories,
        productCategory: key as PRODUCTS_CATEGORIES,
      })),
  };

  const webLabel = webCategory
    ? mapWebCategoriesToLabel[webCategory]
    : intl.formatMessage({
        id: "categoriesContainer.webDropdown.defaultLabel.webCategories",
      });

  const productLabel = productCategory
    ? mapProductCategoriesToLabel[productCategory]
    : intl.formatMessage({
        id: "categoriesContainer.productsDropdown.defaultLabel.productsCategories",
      });

  return (
    <div>
      <DropdownComponent label={webLabel} menu={webMenu} />
      <DropdownComponent label={productLabel} menu={productsMenu} />
    </div>
  );
};

export default CategoriesContainer;
