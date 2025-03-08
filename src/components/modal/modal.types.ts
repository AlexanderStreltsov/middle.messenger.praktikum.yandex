import type { ButtonProps, InputFieldProps } from '../../components';

export interface ModalProps {
  isOpen?: boolean;
  fields: InputFieldProps[];
  controls: ButtonProps[];
  title: string;
  classFields?: string;
  isBlur?: boolean;
}
