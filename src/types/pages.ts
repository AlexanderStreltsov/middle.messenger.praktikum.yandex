import type { PagesNames, ProfilePageActionsGroupType } from '../constants';
import type {
  AvatarProps,
  ButtonProps,
  InputProps,
  InputRowProps,
  ChatMessageNavProps,
  ChatMessageProps,
} from './components';

export interface AuthPageProps {
  title: string;
  inputs: InputProps[];
  actions: ButtonProps[];
}

export interface ErrorPageProps {
  title: string;
  subTitle: string;
  action: ButtonProps;
}

export interface NavigatePageProps {
  pages: {
    page: PagesNames;
    title: string;
  }[];
}

export interface ProfilePageProps {
  nav: {
    action: ButtonProps;
  };
  section: {
    title?: string;
    isShowTitle: boolean;
    avatar: AvatarProps;
    inputs: InputRowProps[];
    actions: {
      groupType: ProfilePageActionsGroupType;
      buttons: ButtonProps[];
    };
  };
}

export interface ChatPageProps {
  nav: {
    action: ButtonProps;
    search: InputProps;
    messages: ChatMessageNavProps[];
  };
  section: {
    header: {
      avatar: AvatarProps;
      name: string;
    };
    messages: ChatMessageProps[];
    input: InputProps;
    action: ButtonProps;
  };
}
