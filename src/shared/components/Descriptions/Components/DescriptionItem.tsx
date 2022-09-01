import { Descriptions as AntDescriptions } from "antd";
import { CSSProperties, ReactNode } from "react";

interface Props {
  className?: string;
  label?: string;
  labelStyle?: CSSProperties;
  contentStyle?: CSSProperties;
  span?: number;
  children?: ReactNode | ReactNode[];
}
/**
 * DescriptionItem
 * @param span The number of columns included.
 */
export const DescriptionItem = ({
  className,
  label,
  labelStyle,
  contentStyle,
  span,
  children,
}: Props) => (
  <AntDescriptions.Item
    className={className}
    label={label}
    labelStyle={labelStyle}
    contentStyle={contentStyle}
    span={span}
  >
    {children}
  </AntDescriptions.Item>
);
