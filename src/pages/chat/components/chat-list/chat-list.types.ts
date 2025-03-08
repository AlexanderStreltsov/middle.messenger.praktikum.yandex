import { ChatMessageTypes } from '../../../../constants';

export interface MessageProps {
  date: string | Date;
  message: string;
  type: ChatMessageTypes;
}

export interface ChatItemProps {
  id: string;
  avatar: { src: string; alt: string };
  name: string;
  badgeUnread?: { label: string };
  messages: MessageProps[];
}

export interface ChatListProps {
  chats: ChatItemProps[];
  onClick: (evt: Event) => void;
  selectedChatId?: string;
}
