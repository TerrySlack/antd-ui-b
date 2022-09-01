import { AntAutoCompleteOption } from "./Components";

interface Props {
  value?: string;
}
export const AutoCompleteOption = ({ value }: Props) => (
  <AntAutoCompleteOption key={value} value={value} a>
    {value}
  </AntAutoCompleteOption>
);
