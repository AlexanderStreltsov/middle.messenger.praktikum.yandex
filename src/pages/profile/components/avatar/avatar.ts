import defaultAvatar from '../../../../assets/icons/default.svg';
import {
  HTMLElements,
  EventNames,
  API_RESOURCES_URL,
} from '../../../../constants';
import { Block, type BlockProps, type AppState } from '../../../../core';
import { connectStore } from '../../../../hocs';
import type { AvatarProps } from './avatar.types';

export class Avatar extends Block<HTMLDivElement, AvatarProps & BlockProps> {
  constructor(props: AvatarProps) {
    super(HTMLElements.DIV, {
      ...props,
      className: 'avatar-wrapper',
      events: { [EventNames.CLICK]: props.onClick },
      avatarClass: props.avatarClass ?? 'default',
    });
  }

  render() {
    return `
      <img
        alt="{{ alt }}" 
        src="{{ src }}"
        class="avatar-wrapper__img_${this.props.avatarClass}"
      />

      {{#if isChange}}
        <div class="avatar-wrapper__cover">
          <p class="avatar-wrapper__cover-text">
            {{ textCover }}
          </p>
        </div>
      {{/if}}
    `;
  }
}

const mapStateToProps = ({ user }: AppState) => ({
  src: user?.avatar ? `${API_RESOURCES_URL}${user?.avatar}` : defaultAvatar,
  avatarClass: user?.avatar ? 'custom' : 'default',
});

const AvatarWithStore = connectStore(mapStateToProps)(
  Avatar,
) as unknown as new (props: AvatarProps) => Block & Avatar;

export default AvatarWithStore;
