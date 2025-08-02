import { nanoid } from 'nanoid';

import defaultAvatar from '../../assets/icons/default.svg';
import type { ChatItemProps } from '../../pages';
import {
  CHAT_MESSAGES_HISTORY_1,
  CHAT_MESSAGES_HISTORY_2,
  CHAT_MESSAGES_HISTORY_3,
} from './chat-messages-history';

export const CHAT_MESSAGES: ChatItemProps[] = [
  {
    id: nanoid(6),
    avatar: { src: defaultAvatar, alt: '' },
    name: 'Юрий Гагарин',
    badgeUnread: { label: '10' },
    messages: CHAT_MESSAGES_HISTORY_1,
  },
  {
    id: nanoid(6),
    avatar: { src: defaultAvatar, alt: '' },
    name: 'Test Testovich',
    badgeUnread: { label: '3' },
    messages: CHAT_MESSAGES_HISTORY_2,
  },
  {
    id: nanoid(6),
    avatar: { src: defaultAvatar, alt: '' },
    name: 'Тест Тестович',
    badgeUnread: { label: '2' },
    messages: CHAT_MESSAGES_HISTORY_3,
  },
  {
    id: nanoid(6),
    avatar: { src: defaultAvatar, alt: '' },
    name: 'Иван Иванов',
    messages: CHAT_MESSAGES_HISTORY_1,
  },
  {
    id: nanoid(6),
    avatar: { src: defaultAvatar, alt: '' },
    name: 'vasya_789',
    messages: CHAT_MESSAGES_HISTORY_2,
  },
  {
    id: nanoid(6),
    avatar: { src: defaultAvatar, alt: '' },
    name: 'temp328',
    badgeUnread: { label: '1' },
    messages: CHAT_MESSAGES_HISTORY_3,
  },
];
