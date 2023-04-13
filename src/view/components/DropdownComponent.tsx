import React from "react";
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
  <Dropdown menu={menu}>
    <Button>
      <Space>
        {label}
        <DownOutlined />
      </Space>
    </Button>
  </Dropdown>
);

export default DropdownComponent;
