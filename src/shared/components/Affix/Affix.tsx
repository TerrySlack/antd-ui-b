import { Affix as AntAffix } from "antd";
import { ReactNode } from "react";

interface Props {
  className?: string;
  offSetTop?: number;
  offsetBottom?: number;
  children?: ReactNode | ReactNode[];
}
export const Affix = ({
  className,
  offSetTop,
  offsetBottom,
  children,
}: Props) => (
  <AntAffix
    offsetTop={offSetTop}
    offsetBottom={offsetBottom}
    className={className}
  >
    {children}
  </AntAffix>
);
