import type { User } from '../../api';
import type { ButtonProps, InputFieldProps } from '../../components';
import type { PagesNames, ProfilePageActionsGroupType } from '../../constants';
import type {
  PagesDataUnionProps,
  PagesDataTemplatesConstructor,
} from '../../config';
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
  user?: User | null;
  isLoading?: boolean;
  name: PagesNames;
}
