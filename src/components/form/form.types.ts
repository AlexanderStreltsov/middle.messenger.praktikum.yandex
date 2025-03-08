import type { ButtonProps } from '../button';
import type { InputFieldProps } from '../input';

export interface FormProps {
  fields: InputFieldProps[];
  controls: ButtonProps[];
  onSubmit: EventListener;
  classFields?: string;
  classControls?: string;
  isInputRow?: boolean;
}
