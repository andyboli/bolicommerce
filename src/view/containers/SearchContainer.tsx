import React, { Fragment, useState } from "react";
import { useIntl } from "react-intl";
import { useSearchParams } from "react-router-dom";
import { useDebouncedCallback } from "use-debounce";

import { SearchComponent } from "../components";
import {
  DomainsProducs,
  Categories,
  PRODUCTS_CATEGORIES,
  DOMAIN_CATEGORIES,
} from "../../entities";
import { AxiosService } from "../../service";

interface SearchContainerProps {
  setProducts: (products: Partial<DomainsProducs>) => void;
  setStoredSearches: (currentSearch: Required<Categories>) => void;
  storedSearches: Required<Categories>[];
}

const SearchContainer: React.FC<SearchContainerProps> = ({
  setProducts,
  setStoredSearches,
  storedSearches,
}) => {
  const intl = useIntl();
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");

  const category = (searchParams.get("category") || "") as
    | PRODUCTS_CATEGORIES
    | "";
  const domain = (searchParams.get("domain") || "") as DOMAIN_CATEGORIES | "";

  const debounceDelay = 1000;

  const sanitizeSearchValue = (searchValue: string) =>
    searchValue.replaceAll(/[-[/\]{}()*+?.,\\^$|#]/g, "");

  const setSearchValueState = useDebouncedCallback((searchValue: string) => {
    setSearchValue(sanitizeSearchValue(searchValue));
  }, debounceDelay);

  const handleSearch = async () => {
    try {
      const hasCategories = !!domain && !!category;

      if (hasCategories) {
        setLoading(true);

        const filledCategories = {
          domain,
          category,
        };

        const isSearchStored = !!storedSearches.find(
          ({ domain, category }) =>
            domain === filledCategories.domain &&
            category === filledCategories.category
        );

        const {
          data: { stored: savedProducts, products },
        } = await AxiosService.postProducts({
          ...filledCategories,
          searchValue: searchValue,
          stored: isSearchStored,
        });

        if (savedProducts && !isSearchStored)
          setStoredSearches(filledCategories);

        setProducts(products);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Fragment>
      <SearchComponent
        placeholder={intl.formatMessage({
          id: "searchContainer.searchInput.placeholder",
        })}
        setSearchValue={setSearchValueState}
        handleSearch={handleSearch}
        loading={isLoading}
      />
    </Fragment>
  );
};

export default SearchContainer;
