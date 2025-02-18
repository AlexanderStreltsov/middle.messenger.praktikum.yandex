import type { PagesNames } from '../constants';
import type {
  ErrorPageProps,
  NavigatePageProps,
  AuthPageProps,
  ProfilePageProps,
  ChatPageProps,
} from './pages';

export type PagesData = {
  [key in PagesNames]: {
    template: string;
    data?:
      | AuthPageProps
      | ChatPageProps
      | ErrorPageProps
      | NavigatePageProps
      | ProfilePageProps;
  };
};
