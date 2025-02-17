import { ButtonTypes } from './button-types';
import { ButtonArrows } from './button-arrows';
import { ProfilePageActionsGroupType } from './profile-page-actions';

export const PROFILE_PAGE_NAV = {
  action: {
    label: '',
    type: ButtonTypes.ARROW,
    arrow: ButtonArrows.LEFT,
  },
};

export const PROFILE_EDIT_PAGE_SECTION_COMMON = {
  avatar: {
    src: 'src/assets/icons/default.svg',
    alt: '',
  },
  isShowTitle: false,
  actions: {
    groupType: ProfilePageActionsGroupType.ELEMENT,
    buttons: [{ label: 'Сохранить', type: ButtonTypes.PRIMARY }],
  },
};
