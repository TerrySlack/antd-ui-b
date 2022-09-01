import { Space as AntSpace } from "antd";
import { ReactNode } from "react";

interface Props {
  className?: string;
  children?: ReactNode | ReactNode[];
}
export const Space = ({ className, children }: Props) => (
  <AntSpace className={className}>{children}</AntSpace>
);
