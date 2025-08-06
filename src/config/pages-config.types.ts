import {
  ErrorPage,
  AuthPage,
  ProfilePage,
  ChatsPage,
  AuthPageClass,
  ErrorPageClass,
  ProfilePageClass,
  ChatsPageClass,
  type AuthPageProps,
  type ProfilePageProps,
  type ErrorPageProps,
  type ChatsPageProps,
} from '../pages';
import { PagesNames, RoutesNames } from '../constants';
import { Block } from '../core';

export type PagesDataProps =
  | ErrorPageProps
  | AuthPageProps
  | ProfilePageProps
  | ChatsPageProps;

export type PagesDataUnionProps = AuthPageProps &
  ErrorPageProps &
  ProfilePageProps &
  ChatsPageProps;

export type PagesDataTemplates =
  | (AuthPageClass & Block)
  | (ErrorPageClass & Block)
  | (ProfilePageClass & Block)
  | (ChatsPageClass & Block);

export type PagesDataTemplatesConstructor =
  | typeof AuthPage
  | typeof ErrorPage
  | typeof ProfilePage
  | typeof ChatsPage;

export type PagesConfig = {
  [key in PagesNames]: {
    route: RoutesNames;
    template: PagesDataTemplatesConstructor;
    props: PagesDataProps;
  };
};
