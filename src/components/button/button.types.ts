import type {
  ButtonTypes,
  ButtonViewTypes,
  NamesGoEvent,
  ButtonActionNames,
} from '../../constants';

export interface ButtonProps {
  className?: string;
  label: string;
  typeView?: ButtonViewTypes;
  attrs: {
    type: ButtonTypes;
  };
  nameGoEvent?: NamesGoEvent;
  actionName?: ButtonActionNames;
  onClick?: (evt: Event) => void;
}
