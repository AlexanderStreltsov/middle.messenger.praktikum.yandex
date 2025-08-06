import type { Chats } from '../../../../api';

export interface MessageProps {
  date: string | Date;
  message: string;
}

export interface ChatsListProps {
  chats: Chats;
  onClick: (evt: Event) => void;
  selectedChatId?: number;
}
