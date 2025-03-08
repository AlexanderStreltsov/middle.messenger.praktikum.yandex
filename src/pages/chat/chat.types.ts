import type { ButtonProps, InputFieldProps } from '../../components';
import type { ChatItemProps } from './components';

export interface ChatPageProps {
  controlProfile: ButtonProps;
  fieldSearch: InputFieldProps;
  messages: ChatItemProps[];
  fieldsSendMsg: InputFieldProps[];
  controlsSendMsg: ButtonProps[];
  controlsUserAction: ButtonProps[];
  fieldsAddUser: InputFieldProps[];
  controlsAddUser: ButtonProps[];
  titleAddUser: string;
  textNoSelectChat: string;
}
