import { KeyboardEvent, MouseEvent, FocusEvent, TouchEvent } from "react";

//Events
export type ClickType = (e: MouseEvent<HTMLElement>) => void;
export type KeyUpType = (e: KeyboardEvent<HTMLElement>) => void;
export type ChangeType = (e: MouseEvent<HTMLElement>) => void;
export type FocusType = (e: FocusEvent<any, HTMLElement>) => void;
export type BlurType = (e: FocusEvent<HTMLElement>) => void;

//SmartPhone Events
export type TouchStartType = (e: TouchEvent<HTMLElement>) => void;
export type TouchEndType = (e: TouchEvent<HTMLElement>) => void;

//Mouse Events
export type MouseUpType = (e: MouseEvent<HTMLElement>) => void;
export type MouseDownType = (e: MouseEvent<HTMLElement>) => void;
export type MouseEnterType = (e: MouseEvent<HTMLElement>) => void;
export type MouseLeaveType = (e: MouseEvent<HTMLElement>) => void;
export type MouseOverType = (e: MouseEvent<HTMLElement>) => void;
export type MouseOut = (e: MouseEvent<HTMLButtonElement>) => void;
export type NoParamsType = () => void;
