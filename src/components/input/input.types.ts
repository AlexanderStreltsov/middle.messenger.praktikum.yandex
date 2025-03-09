import type { InputNames, InputTypes, EventNames } from '../../constants';

export interface InputProps {
  attrs: {
    name: InputNames;
    type: InputTypes;
    value?: string;
    disabled?: string;
    placeholder?: string;
  };
  events?: { [key in EventNames]?: EventListener };
}

export interface InputFieldProps {
  attrs?: { for: InputNames };
  label: string;
  error?: string;
  inputProps: InputProps;
}
