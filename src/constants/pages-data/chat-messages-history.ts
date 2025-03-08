import type { MessageProps } from '../../pages';
import { ChatMessageTypes } from '../chat-message-types';

export const CHAT_MESSAGES_HISTORY_1: MessageProps[] = [
  {
    message:
      'Тестовое сообщение тестовое сообщение тестовое сообщение тестовое сообщение тестовое сообщение',
    date: '12:29',
    type: ChatMessageTypes.OTHER,
  },
  {
    message: 'Тестовое сообщение тестовое',
    date: '12:29',
    type: ChatMessageTypes.MY,
  },
  {
    message:
      'Тестовое сообщение тестовое сообщение тестовое сообщение тестовое сообщение тестовое сообщение тестовое сообщение тестовое сообщение тестовое сообщение тестовое сообщение тестовое сообщение тестовое сообщение тестовое сообщение тестовое сообщение',
    date: '12:40',
    type: ChatMessageTypes.MY,
  },
  {
    message: 'Тестовое сообщение тестовое сообщение тестовое сообщение',
    date: '12:45',
    type: ChatMessageTypes.OTHER,
  },
  {
    message:
      'Тестовое сообщение тестовое сообщение тестовое сообщение тестовое сообщение тестовое сообщение',
    date: '12:50',
    type: ChatMessageTypes.MY,
  },
];

export const CHAT_MESSAGES_HISTORY_2: MessageProps[] = [
  {
    message: 'text message text message text message text message text message',
    date: '11:20',
    type: ChatMessageTypes.OTHER,
  },
  {
    message: 'text message тестовое',
    date: '11:40',
    type: ChatMessageTypes.OTHER,
  },
  {
    message:
      'text message text message text message text message text message text message text message text message text message text message text message text message text message',
    date: '12:40',
    type: ChatMessageTypes.OTHER,
  },
  {
    message: 'text message text message text message',
    date: '12:45',
    type: ChatMessageTypes.OTHER,
  },
  {
    message: 'text message text message text message text message text message',
    date: '17:50',
    type: ChatMessageTypes.MY,
  },
  {
    message: 'text message text message text message text message text message',
    date: '18:50',
    type: ChatMessageTypes.MY,
  },
  {
    message: 'text message text message text message text message text message',
    date: '19:00',
    type: ChatMessageTypes.MY,
  },
];

export const CHAT_MESSAGES_HISTORY_3: MessageProps[] = [
  {
    message: 'hello world hello world hello world hello world hello world',
    date: '11:20',
    type: ChatMessageTypes.OTHER,
  },
  {
    message: 'hello world тестовое',
    date: '11:40',
    type: ChatMessageTypes.MY,
  },
  {
    message:
      'hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world hello world',
    date: '12:40',
    type: ChatMessageTypes.MY,
  },
  {
    message: 'hello world hello world hello world',
    date: '12:45',
    type: ChatMessageTypes.OTHER,
  },
  {
    message: 'hello world hello world hello world hello world hello world',
    date: '16:50',
    type: ChatMessageTypes.MY,
  },
  {
    message: 'hello world hello world hello world hello world hello world',
    date: '16:51',
    type: ChatMessageTypes.MY,
  },
  {
    message: 'hello world hello world hello world hello world hello world',
    date: '16:52',
    type: ChatMessageTypes.MY,
  },
  {
    message: 'hello world hello world hello world hello world hello world',
    date: '20:00',
    type: ChatMessageTypes.OTHER,
  },
];
