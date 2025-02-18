import defaultAvatar from '../assets/icons/default.svg';
import type { ChatMessageNavProps } from '../types';

export const CHAT_MESSAGES_NAV: ChatMessageNavProps[] = [
  {
    avatar: { src: defaultAvatar, alt: '' },
    name: 'Test Testovich',
    date: '12 окт',
    badge: { label: '10' },
    message: 'Тестовая строка',
  },
  {
    avatar: { src: defaultAvatar, alt: '' },
    name: 'Test Testovich',
    date: '12.02.2025',
    badge: { label: '3' },
    message:
      'Тестовая строка тестовая строка тестовая строка тестовая строка тестовая строка тестовая строка тестовая строка тестовая строка тестовая строка тестовая строка ',
  },
  {
    avatar: { src: defaultAvatar, alt: '' },
    name: 'Test Testovich',
    date: 'Вчера',
    badge: { label: '2' },
    message: 'Тестовая строка тестовая строка тестовая строка тестовая',
    isActive: true,
  },
  {
    avatar: { src: defaultAvatar, alt: '' },
    name: 'Иван Иванов',
    date: 'Сегодня',
    message:
      'Тестовая строка тестовая строка тестовая строка тестовая строка тестовая строка тестовая строка тестовая',
  },
  {
    avatar: { src: defaultAvatar, alt: '' },
    name: 'Иван Иванов',
    date: '9 мая',
    message: 'Тестовая строка тестовая строка тестовая строка',
  },
  {
    avatar: { src: defaultAvatar, alt: '' },
    name: 'Петр',
    date: '10 мая',
    badge: { label: '1' },
    message:
      'Тестовая строка тестовая строка тестовая строка тестовая строка тестовая строка',
  },
];
