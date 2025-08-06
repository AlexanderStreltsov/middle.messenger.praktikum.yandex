import defaultAvatar from '../assets/icons/default.svg';
import { API_RESOURCES_URL } from '../constants';

export const getAvatarUrl = (avatar?: string | null) =>
  avatar ? `${API_RESOURCES_URL}${avatar}` : defaultAvatar;
