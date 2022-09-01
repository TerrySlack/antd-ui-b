import { AntHeader } from "../LayoutComponents";
import { ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode | ReactNode[];
}
export const Header = ({ className, children }: Props) => (
  <AntHeader className={className}>{children}</AntHeader>
);
