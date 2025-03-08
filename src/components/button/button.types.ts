import type { ButtonTypes, ButtonViewTypes } from '../../constants';

export interface ButtonProps {
  className?: string;
  label: string;
  typeView?: ButtonViewTypes;
  attrs: {
    type: ButtonTypes;
  };
  onClick?: (evt: Event) => void;
}
