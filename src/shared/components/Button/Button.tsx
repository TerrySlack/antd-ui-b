import { Button as AntButton } from "antd";
// import {
//   ReactNode,
//   KeyboardEvent,
//   MouseEvent,
//   FocusEvent,
//   TouchEvent,
// } from "react";
import { ReactNode } from "react";

import {
  ClickType,
  KeyUpType,
  ChangeType,
  FocusType,
  BlurType,
  TouchStartType,
  TouchEndType,
  MouseUpType,
  MouseDownType,
  MouseEnterType,
  MouseLeaveType,
  MouseOverType,
  MouseOut,
} from "../../Typings";

import { defaultButtonType } from "./ButtonConstants";
interface Props {
  //Primitives
  className?: string;
  id?: string;
  name?: string;
  value?: string;
  type?: "link" | "text" | "ghost" | "default" | "primary" | "dashed";
  autoFocus?: boolean;
  disabled?: boolean;
  children: ReactNode | ReactNode[];

  //Events
  onClick?: ClickType;
  onKeyUp?: KeyUpType;
  onChange?: ChangeType;
  onFocus?: FocusType;
  onBlur?: BlurType;

  //SmartPhone Events
  onTouchStart?: TouchStartType;
  onTouchEnd?: TouchEndType;

  //Mouse Events
  onMouseUp?: MouseUpType;
  onMouseDown?: MouseDownType;
  onMouseEnter?: MouseEnterType;
  onMouseLeave?: MouseLeaveType;
  onMouseOut?: MouseOut;
  onMouseOver?: MouseOverType;

  // //Events
  // onClick?: (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  // onKeyUp?: (e: KeyboardEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  // onChange?: (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  // onFocus?: (e: FocusEvent<any, HTMLButtonElement | HTMLAnchorElement>) => void;
  // onBlur?: (e: FocusEvent<HTMLButtonElement | HTMLAnchorElement>) => void;

  // //SmartPhone Events
  // onTouchStart?: (e: TouchEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  // onTouchEnd?: (e: TouchEvent<HTMLButtonElement | HTMLAnchorElement>) => void;

  // //Mouse Events
  // onMouseUp?: (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  // onMouseDown?: (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  // onMouseEnter?: (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  // onMouseLeave?: (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  // onMouseOut?: (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  // onMouseOver?: (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
}

export const Button = ({
  //Primitives
  className,
  id,
  name,
  value,
  type = defaultButtonType, //this is created outside the object in order to ensure that the props destructuring references the same object on rerenders
  autoFocus,
  disabled,

  //Events
  onClick,
  onKeyUp,
  onChange,
  onFocus,
  onBlur,
  onTouchStart,
  onTouchEnd,
  onMouseUp,
  onMouseDown,
  onMouseEnter,
  onMouseLeave,
  onMouseOut,
  onMouseOver,
  children,
}: Props) => {
  return (
    <AntButton
      className={className}
      id={id}
      name={name}
      value={value}
      type={type}
      autoFocus={autoFocus}
      disabled={disabled}
      onClick={onClick}
      onKeyUp={onKeyUp}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onMouseUp={onMouseUp}
      onMouseDown={onMouseDown}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseOut={onMouseOut}
      onMouseOver={onMouseOver}
    >
      {children}
    </AntButton>
  );
};
