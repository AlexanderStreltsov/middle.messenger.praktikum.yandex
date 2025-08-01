import {
  ErrorPage,
  AuthPage,
  ProfilePage,
  ChatPage,
  AuthPageClass,
  ErrorPageClass,
  ProfilePageClass,
  ChatPageClass,
  type AuthPageProps,
  type ProfilePageProps,
  type ErrorPageProps,
  type ChatPageProps,
} from '../pages';
import { PagesNames, RoutesNames } from '../constants';
import { Block } from '../core';

export type PagesDataProps =
  | ErrorPageProps
  | AuthPageProps
  | ProfilePageProps
  | ChatPageProps;

export type PagesDataUnionProps = AuthPageProps &
  ErrorPageProps &
  ProfilePageProps &
  ChatPageProps;

export type PagesDataTemplates =
  | (AuthPageClass & Block)
  | (ErrorPageClass & Block)
  | (ProfilePageClass & Block)
  | (ChatPageClass & Block);

export type PagesDataTemplatesConstructor =
  | typeof AuthPage
  | typeof ErrorPage
  | typeof ProfilePage
  | typeof ChatPage;

export type PagesConfig = {
  [key in PagesNames]: {
    route: RoutesNames;
    template: PagesDataTemplatesConstructor;
    props: PagesDataProps;
  };
};
