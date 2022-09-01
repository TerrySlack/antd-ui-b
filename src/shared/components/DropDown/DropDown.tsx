import { Dropdown as AntDropDown } from "antd";
import { CSSProperties, ReactElement, ReactNode } from "react";

interface Props {
  className?: string;
  arrow?: boolean | { pointAtCenter: boolean };
  autoFocus?: boolean;
  disabled?: boolean;
  destroyPopupOnHide?: boolean;

  overlay?: ReactElement | (() => ReactElement);
  overlayClassName?: string;
  overlayStyle?: CSSProperties;
  placement?:
    | "bottom"
    | "bottomLeft"
    | "bottomRight"
    | "top"
    | "topRight"
    | "topLeft"
    | "topCenter"
    | "bottomCenter";
  trigger?: Array<"click" | "hover" | "contextMenu">;
  visible?: boolean;
  children?: ReactNode | ReactNode[];

  onVisibleChange?: (visible: boolean) => void;
  getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;
}
export const DropDown = ({
  className,
  arrow,
  autoFocus,
  disabled,
  destroyPopupOnHide,
  overlay,
  overlayClassName,
  overlayStyle,
  placement,
  trigger,
  visible,
  children,
  onVisibleChange,
  getPopupContainer,
}: Props) => (
  <AntDropDown
    className={className}
    arrow={arrow}
    autoFocus={autoFocus}
    disabled={disabled}
    destroyPopupOnHide={destroyPopupOnHide}
    overlay={overlay}
    overlayClassName={overlayClassName}
    overlayStyle={overlayStyle}
    placement={placement}
    trigger={trigger}
    visible={visible}
    onVisibleChange={onVisibleChange}
    getPopupContainer={getPopupContainer}
  >
    {children}
  </AntDropDown>
);
