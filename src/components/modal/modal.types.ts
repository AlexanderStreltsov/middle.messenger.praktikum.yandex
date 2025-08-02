import type { ButtonProps, InputFieldProps } from '../../components';
import type { FormState } from '../../utils';

export interface ModalProps {
  isOpen?: boolean;
  fields: InputFieldProps[];
  controls: ButtonProps[];
  title: string;
  classFields?: string;
  isBlur?: boolean;
  onSubmit?: (data: FormState) => void;
  isLoading?: boolean;
}
