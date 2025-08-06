import type { Chats } from '../../api';
import type {
  ButtonProps,
  InputFieldProps,
  ModalProps,
} from '../../components';
import type {
  PagesDataUnionProps,
  PagesDataTemplatesConstructor,
} from '../../config';
import { Router } from '../../core';
import { MessagesServices } from '../../services';

export interface ChatsPageProps {
  controlsChats: ButtonProps[];
  fieldSearch: InputFieldProps;
  chats: Chats;
  modals: ModalProps[];
  fieldsSendMsg: InputFieldProps[];
  controlsSendMsg: ButtonProps[];
  controlsUserActions: ButtonProps[];
  textNoSelectChat: string;
  router?: Router<PagesDataUnionProps, PagesDataTemplatesConstructor>;
  isLoading?: boolean;
  selectedChatId?: number;
  MessagesServices?: MessagesServices;
}
