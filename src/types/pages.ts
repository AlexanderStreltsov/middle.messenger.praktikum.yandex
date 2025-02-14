import type { PagesNames } from './pages-data';

export interface ErrorPageProps {
  buttonLabel: string;
  buttonType: string;
  subTitle: string;
  title: string;
}

export interface NavigatePageProps {
  pages: {
    page: PagesNames;
    title: string;
  }[];
}
