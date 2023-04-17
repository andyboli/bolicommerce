import React from "react";
import styled from "styled-components";
import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, MenuProps, Space } from "antd";

interface DropdownComponentProps {
  label: string;
  menu: MenuProps;
}

const DropdownComponent: React.FC<DropdownComponentProps> = ({
  label,
  menu,
}) => (
  <StyledDropdown menu={menu}>
    <Button>
      <Space>
        {label}
        <DownOutlined />
      </Space>
    </Button>
  </StyledDropdown>
);

const StyledDropdown = styled(Dropdown)`
  width: 40%;
  background-color: #f4a6b8;
  border-color: #f4a6b8;
`;

export default DropdownComponent;
