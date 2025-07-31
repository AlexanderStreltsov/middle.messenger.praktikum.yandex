import { RoutesNames, NamesGoEvent, type PagesDataProps } from '../constants';

export const getGoEvent = (
  name: NamesGoEvent = '' as NamesGoEvent,
  props: PagesDataProps,
) => {
  const { router } = props;

  switch (name) {
    case NamesGoEvent.goSignup:
      return () => router?.go(RoutesNames.signup);
    case NamesGoEvent.goSignin:
      return () => router?.go(RoutesNames.signin);
    case NamesGoEvent.goChat:
      return () => router?.go(RoutesNames.chat);
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
