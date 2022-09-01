import { Divider as AntDivider } from "antd";

interface Props {
  className?: string;
}
export const Divider = ({ className }: Props) => (
  <AntDivider className={className} />
);
