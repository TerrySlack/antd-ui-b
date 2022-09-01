import { AntSideBar } from "../LayoutComponents";
import { ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode | ReactNode[];
}

export const SideBar = ({ className, children }: Props) => (
  <AntSideBar className={className}>{children}</AntSideBar>
);
