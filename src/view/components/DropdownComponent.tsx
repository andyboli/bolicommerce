import * as React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, MenuProps, Space } from "antd";

interface DropdownProps {
  label: string;
  menu: MenuProps;
}

const DropdownComponent: React.FC<DropdownProps> = ({ label, menu }) => {
  return (
    <Dropdown menu={menu}>
      <Button>
        <Space>
          {label}
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
  );
};

export default DropdownComponent;
