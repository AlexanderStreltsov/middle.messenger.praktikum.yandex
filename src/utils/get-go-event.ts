import { Router } from '../core';
import type {
  PagesDataUnionProps,
  PagesDataTemplatesConstructor,
} from '../config';
import { RoutesNames, NamesGoEvent } from '../constants';

export const getGoEvent = (
  name: NamesGoEvent = '' as NamesGoEvent,
  router?: Router<PagesDataUnionProps, PagesDataTemplatesConstructor>,
) => {
  switch (name) {
    case NamesGoEvent.goSignup:
      return () => router?.go(RoutesNames.signup);
    case NamesGoEvent.goSignin:
      return () => router?.go(RoutesNames.signin);
    case NamesGoEvent.goChat:
      return () => router?.go(RoutesNames.chats);
    case NamesGoEvent.goProfile:
      return () => router?.go(RoutesNames.profile);
    case NamesGoEvent.goProfileEdit:
      return () => router?.go(RoutesNames.profileEdit);
    case NamesGoEvent.goProfilePass:
      return () => router?.go(RoutesNames.profilePass);
    case NamesGoEvent.goError404:
      return () => router?.go(RoutesNames.error404);
    case NamesGoEvent.goError500:
      return () => router?.go(RoutesNames.error500);
    case NamesGoEvent.goBack:
      return () => router?.back();
    default:
      return;
  }
};
