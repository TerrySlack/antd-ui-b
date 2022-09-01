import { Row as AntRow } from "antd";
import { ReactNode } from "react";

interface Props {
  className?: string;
  children?: ReactNode | ReactNode[];
}
export const Row = ({ className, children }: Props) => (
  <AntRow className={className}>{children}</AntRow>
);
