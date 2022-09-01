import {
  AvatarProps,
  BreadcrumbProps,
  PageHeader as AntPageHeader,
  TagType,
} from "antd";
import { ReactElement, ReactNode } from "react";

interface Props {
  className?: string;
  avatar?: AvatarProps;
  backIcon?: ReactNode | boolean;
  breadcrumb?: BreadcrumbProps;
  extra?: ReactNode | ReactNode[];
  footer?: ReactNode | ReactNode[];
  ghost?: boolean;
  subTitle?: ReactNode;
  title?: ReactNode;
  tags?: ReactElement<TagType> | ReactElement<TagType>[];
  children?: ReactNode | ReactNode[];
  //Not sure what the prop types are for props or originBreadcrum
  breadcrumbRender?: (props: any, originBreadcrumb: any) => ReactNode;
  onBack?: () => void;
}
export const PageHeader = ({
  className,
  avatar,
  backIcon,
  breadcrumb,
  extra,
  footer,
  ghost,
  subTitle,
  title,
  tags,
  breadcrumbRender,
  onBack,
  children,
}: Props) => (
  <AntPageHeader
    className={className}
    avatar={avatar}
    backIcon={backIcon}
    breadcrumb={breadcrumb}
    extra={extra}
    footer={footer}
    subTitle={subTitle}
    ghost={ghost}
    title={title}
    tags={tags}
    breadcrumbRender={breadcrumbRender}
    onBack={onBack}
  >
    {children}
  </AntPageHeader>
);
