import { Breadcrumb as AntBreadCrumb } from "antd";
import { ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode | ReactNode[];
}
export const BreadCrumb = ({ className, children }: Props) => (
  <AntBreadCrumb className={className}>{children}</AntBreadCrumb>
);
