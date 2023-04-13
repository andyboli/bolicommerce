import * as React from "react";
import { useIntl } from "react-intl";

import { SearchComponent } from "../components";

interface SearchContainerProps {}

const SearchContainer: React.FC<SearchContainerProps> = () => {
  const intl = useIntl();

  return (
    <div>
      <SearchComponent
        placeholder={intl.formatMessage({
          id: "searchContainer.searchInput.placeholder",
        })}
      />
    </div>
  );
};

export default SearchContainer;
