import React from "react";
import { useIntl } from "react-intl";
import { Input } from "antd";

interface SearchComponentProps {
  placeholder: string;
  loading?: boolean;
}

const SearchComponent: React.FC<SearchComponentProps> = ({
  placeholder,
  loading,
}) => {
  const intl = useIntl();

  return (
    <Input.Search
      enterButton={intl.formatMessage({
        id: "searchComponent.searchInput.enterButton",
      })}
      loading={loading}
      placeholder={placeholder}
      size="large"
    />
  );
};

export default SearchComponent;
