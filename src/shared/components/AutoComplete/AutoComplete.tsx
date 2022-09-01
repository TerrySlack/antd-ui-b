import { AntAutoComplete } from "./Components";

import { ChangeType, FocusType, BlurType, NoParamsType } from "../../Typings";

interface Option {
  label: string;
  value: string | number | object | null;
}

// interface DataSourceItemObject {
//   value: string;
//   text: string;
// }

interface Props {
  className?: string;
  value?: string;
  status?: "error" | "warning";
  placeholder?: "string";
  options?: Option[];
  open?: boolean;
  notFoundContent?: string;
  filterOption?:
    | boolean
    | ((inputValue: string | number, option: any) => boolean);
  dropdownMatchSelectWidth?: boolean | number;
  dropdownClassName?: string;
  disabled?: boolean;
  defaultValue?: string;
  defaultOpen?: boolean;
  defaultActiveFirstOption?: boolean;

  backfill?: boolean;
  // children:
  //   | ReactElement<DataSourceItemObject>
  //   | Array<ReactElement<DataSourceItemObject>>;
  autoFocus?: boolean;
  allowClear?: boolean;

  onChange?: ChangeType;
  onBlur?: BlurType;
  onFocus?: FocusType;
  onClear?: NoParamsType;

  //Don't have access to the antd typings.
  onSelect?: (value: any, option: any) => void;
  onSearch?: (value: string | number) => void;
  onDropdownVisibleChange?: (open: boolean) => void;
}
export const AutoComplete = ({
  className,
  options,
  filterOption,
  onChange,
  onBlur,
  onFocus,
  onClear,
  onSelect,
  onSearch,
  onDropdownVisibleChange,
}: Props) => (
  <AntAutoComplete
    className={className}
    options={options}
    filterOption={filterOption}
    onChange={onChange}
    onFocus={onFocus}
    onBlur={onBlur}
    onClear={onClear}
    onSelect={onSelect}
    onSearch={onSearch}
    onDropdownVisibleChange={onDropdownVisibleChange}
  />
);
