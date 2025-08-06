import type { ButtonProps, InputFieldProps } from '../../components';
import type { ButtonActionNames } from '../../constants';
import type { FormState } from '../../utils';

export interface ModalProps {
  isOpen?: boolean;
  fields: InputFieldProps[];
  controls: ButtonProps[];
  title: string;
  classFields?: string;
  isBlur?: boolean;
  onSubmit?: (evt: Event, data: FormState) => void;
  isLoading?: boolean;
  actionName?: ButtonActionNames;
  onInputField?: (evt: Event, field: InputFieldProps) => void;
}
