import type { ButtonProps, InputFieldProps } from '../../components';
import type { ChatItemProps } from './components';
import type {
  PagesDataUnionProps,
  PagesDataTemplatesConstructor,
} from '../../constants';
import { Router } from '../../core';

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
  router?: Router<PagesDataUnionProps, PagesDataTemplatesConstructor>;
}
