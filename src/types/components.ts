import type {
  ButtonTypes,
  InputNames,
  InputTypes,
  ButtonArrows,
} from '../constants';

export interface AvatarProps {
  src: string;
  alt: string;
}

export interface ButtonProps {
  label: string;
  type: ButtonTypes;
  arrow?: ButtonArrows;
  isLinkRed?: boolean;
}

export interface InputProps {
  label: string;
  name: InputNames;
  type: InputTypes;
  value?: string;
  isDisabled?: boolean;
}

export interface InputRowProps extends InputProps {}
