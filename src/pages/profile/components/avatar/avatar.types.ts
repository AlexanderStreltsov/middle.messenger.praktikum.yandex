export interface AvatarProps {
  src: string;
  alt: string;
  textCover?: string;
  isChange: boolean;
  onClick?: (evt: Event) => void;
  avatarClass?: string;
}
