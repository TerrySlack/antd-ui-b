import { Col as AntCol } from "antd";
import { ReactNode } from "react";

interface Props {
  className?: string;
  children?: ReactNode | ReactNode[];
}
export const Col = ({ className, children }: Props) => (
  <AntCol className={className}>{children}</AntCol>
);
