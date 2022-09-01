import { Descriptions as AntDescriptions } from "antd";
import { ReactNode } from "react";

interface Props {
  className?: string;
  offSetTop?: number;
  offsetBottom?: number;
  children?: ReactNode | ReactNode[];
}
export const Descriptions = ({ className, children }: Props) => (
  <AntDescriptions className={className}>{children}</AntDescriptions>
);
