import { ErrorPage, NavigatePage } from '../pages';
import type { PagesData } from '../types';

export const PAGES_NAMES = {
  '404': '404',
  '500': '500',
  navigate: 'navigate',
} as const;

export const PAGES_DATA: PagesData = {
  [PAGES_NAMES['404']]: {
    template: ErrorPage,
    data: {
      title: '404',
      subTitle: 'Не туда попали',
      buttonType: 'link',
      buttonLabel: 'Назад к чатам',
    },
  },
  [PAGES_NAMES['500']]: {
    template: ErrorPage,
    data: {
      title: '500',
      subTitle: 'Мы уже фиксим',
      buttonType: 'link',
      buttonLabel: 'Назад к чатам',
    },
  },
  [PAGES_NAMES['navigate']]: {
    template: NavigatePage,
    data: {
      pages: [
        { page: PAGES_NAMES['404'], title: '404' },
        { page: PAGES_NAMES['500'], title: '500' },
      ],
    },
  },
};
