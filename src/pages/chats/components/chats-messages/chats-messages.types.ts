import type { Message, User } from '../../../../api';
import type {
  Button,
  ButtonProps,
  InputFieldProps,
} from '../../../../components';
import type { FormState } from '../../../../utils';

export interface ChatsMessagesProps {
  messages: Message[];
  selectedChatId?: number;
  fields: InputFieldProps[];
  controls: ButtonProps[];
  ControlsUserActions: Button[];
  textNoSelectChat: string;
  errorMessages?: string | null;
  onSubmit?: (evt: Event, data: FormState) => void;
  usersSelectedChat?: User[];
}
