import type {
  ButtonTypes,
  InputNames,
  InputTypes,
  ButtonArrows,
  ChatMessageTypes,
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
  placeholder?: string;
}

interface BadgeProps {
  label: string;
}
export interface ChatMessageNavProps {
  avatar: AvatarProps;
  name: string;
  message: string;
  date: string;
  badge?: BadgeProps;
  isActive?: boolean;
}

export interface ChatMessageProps {
  message: string;
  time: string;
  type: ChatMessageTypes;
}
