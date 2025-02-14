import { PAGES_NAMES } from '../constants';
import type { ErrorPageProps, NavigatePageProps } from './pages';

export type PagesNames = keyof typeof PAGES_NAMES;

export type PagesData = {
  [key in PagesNames]: {
    template: string;
    data?: ErrorPageProps | NavigatePageProps;
  };
};
