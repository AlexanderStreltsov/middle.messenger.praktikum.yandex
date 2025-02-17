import type { PagesNames } from '../constants';
import type {
  ErrorPageProps,
  NavigatePageProps,
  AuthPageProps,
  ProfilePageProps,
} from './pages';

export type PagesData = {
  [key in PagesNames]: {
    template: string;
    data?:
      | AuthPageProps
      | ErrorPageProps
      | NavigatePageProps
      | ProfilePageProps;
  };
};
