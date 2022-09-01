import { AntLayout } from "../LayoutComponents";
import { ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode | ReactNode[];
}
export const Layout = ({ className, children }: Props) => (
  <AntLayout className={className}>{children}</AntLayout>
);
