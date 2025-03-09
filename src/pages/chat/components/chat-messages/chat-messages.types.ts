import type { ButtonProps, InputFieldProps } from '../../../../components';
import type { ChatItemProps } from '../chat-list';

export interface ChatMessagesProps {
  chats: ChatItemProps[];
  selectedChatId?: string;
  fields: InputFieldProps[];
  controls: ButtonProps[];
  addUserClick: () => void;
  controlsUserAction: ButtonProps[];
  textNoSelectChat: string;
}
