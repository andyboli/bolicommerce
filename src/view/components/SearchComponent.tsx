import React from "react";
import { useIntl } from "react-intl";
import styled from "styled-components";
import { DebouncedState } from "use-debounce";
import { Input } from "antd";

interface SearchComponentProps {
  placeholder: string;
  loading?: boolean;
  setSearchValue: DebouncedState<(searchValue: string) => void>;
  handleSearch: () => Promise<void>;
}

const SearchComponent: React.FC<SearchComponentProps> = ({
  placeholder,
  loading,
  setSearchValue,
  handleSearch,
}) => {
  const intl = useIntl();

  return (
    <StyledSearchInput
      enterButton={intl.formatMessage({
        id: "searchComponent.searchInput.enterButton",
      })}
      loading={loading}
      placeholder={placeholder}
      size="large"
      onChange={(e) => setSearchValue(e.target.value)}
      onSearch={handleSearch}
    />
  );
};

const StyledSearchInput = styled(Input.Search)`
  width: 50%;

  .ant-btn-primary {
    background-color: #f4a6b8;
  }

  .ant-btn-primary:hover {
    background-color: #e17992;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export default SearchComponent;
