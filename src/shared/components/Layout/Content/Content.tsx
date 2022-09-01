import { AntContent } from "../LayoutComponents";
import { ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode | ReactNode[];
}
export const Content = ({ className, children }: Props) => (
  <AntContent className={className}>{children}</AntContent>
);
