import defaultAvatar from '../../assets/icons/default.svg';
import { ButtonTypes } from '../button-types';
import { ButtonViewTypes } from '../button-view-types';
import { ProfilePageActionsGroupType } from '../profile-page-actions';

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
