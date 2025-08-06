import { HTMLElements, EventNames } from '../../../../constants';
import { Block, type BlockProps, type AppState } from '../../../../core';
import { connectStore } from '../../../../hocs';
import { getAvatarUrl } from '../../../../utils';
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
  src: getAvatarUrl(user?.avatar),
  avatarClass: user?.avatar ? 'custom' : 'default',
});

export default connectStore<AvatarProps>(mapStateToProps)(Avatar);
