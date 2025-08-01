import defaultAvatar from '../assets/icons/default.svg';
import {
  ButtonTypes,
  ButtonViewTypes,
  ProfilePageActionsGroupType,
} from '../constants';

export const PROFILE_PAGE_NAV = {
  backButton: {
    label: '',
    typeView: ButtonViewTypes.ICON,
    attrs: {
      type: ButtonTypes.BUTTON,
    },
  },
};

export const PROFILE_PAGE_COMMON = {
  avatar: { src: defaultAvatar, alt: '', isChange: false },
  controlsViewType: ProfilePageActionsGroupType.ELEMENT,
  controls: [
    {
      label: 'Сохранить',
      attrs: {
        type: ButtonTypes.SUBMIT,
      },
    },
  ],
};
