import { ReactNode, KeyboardEvent, ReactElement, MouseEvent } from "react";
import { Dropdown as AntDropDown } from "antd";
import type { SizeType } from "antd/es/config-provider/SizeContext";

interface Props {
  className?: string;
  loading?: boolean | { delay: number };
  disabled?: boolean;
  icon?: ReactNode;
  overlay?: ReactElement;
  placement?:
    | "bottom"
    | "bottomLeft"
    | "bottomRight"
    | "top"
    | "topRight"
    | "topLeft"
    | "topCenter"
    | "bottomCenter";
  size?: SizeType;
  trigger?: Array<"click" | "hover" | "contextMenu">;
  type?: "link" | "text" | "ghost" | "default" | "primary" | "dashed";
  visible?: boolean;
  children?: ReactNode | ReactNode[];

  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  onKeyUp?: (e: KeyboardEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  onVisibleChange: (visible: boolean) => void;
}

export const DropDownButton = ({
  className,
  loading,
  disabled,
  icon,
  overlay,
  placement,
  size,
  trigger,
  type,
  visible,
  children,
  onClick,
  onVisibleChange,
}: Props) => (
  <AntDropDown.Button
    className={className}
    loading={loading}
    disabled={disabled}
    icon={icon}
    overlay={overlay}
    placement={placement}
    size={size}
    trigger={trigger}
    type={type}
    visible={visible}
    onClick={onClick}
    onVisibleChange={onVisibleChange}
  >
    {children}
  </AntDropDown.Button>
);
