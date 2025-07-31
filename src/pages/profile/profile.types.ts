import type { ButtonProps, InputFieldProps } from '../../components';
import type {
  ProfilePageActionsGroupType,
  PagesDataUnionProps,
  PagesDataTemplatesConstructor,
} from '../../constants';
import { Router } from '../../core';
import type { AvatarProps } from './components';

export interface ProfilePageProps {
  avatar: AvatarProps;
  backButton: ButtonProps;
  title?: string;
  fields: InputFieldProps[];
  controls: ButtonProps[];
  controlsViewType: ProfilePageActionsGroupType;
  fieldsChangeAvatar?: InputFieldProps[];
  controlsChangeAvatar?: ButtonProps[];
  titleChangeAvatar?: string;
  router?: Router<PagesDataUnionProps, PagesDataTemplatesConstructor>;
}
