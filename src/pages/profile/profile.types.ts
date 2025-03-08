import type { ButtonProps, InputFieldProps } from '../../components';
import type { ProfilePageActionsGroupType } from '../../constants';
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
}
