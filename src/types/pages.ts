import type { PagesNames } from '../constants';
import type { ButtonProps, InputProps } from './components';

export interface AuthPageProps {
  title: string;
  inputs: InputProps[];
  actions: ButtonProps[];
}

export interface ErrorPageProps {
  action: ButtonProps;
  subTitle: string;
  title: string;
}

export interface NavigatePageProps {
  pages: {
    page: PagesNames;
    title: string;
  }[];
}
