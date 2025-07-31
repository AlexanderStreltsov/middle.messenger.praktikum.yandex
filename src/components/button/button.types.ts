import type {
  ButtonTypes,
  ButtonViewTypes,
  NamesGoEvent,
} from '../../constants';

export interface ButtonProps {
  className?: string;
  label: string;
  typeView?: ButtonViewTypes;
  attrs: {
    type: ButtonTypes;
  };
  nameGoEvent?: NamesGoEvent;
  onClick?: (evt: Event) => void;
}
