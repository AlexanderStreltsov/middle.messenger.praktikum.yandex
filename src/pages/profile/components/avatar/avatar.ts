import { HTMLElements, EventNames } from '../../../../constants';
import { Block, type BlockProps } from '../../../../core';
import type { AvatarProps } from './avatar.types';

export class Avatar extends Block<HTMLDivElement, AvatarProps & BlockProps> {
  constructor(props: AvatarProps) {
    super(HTMLElements.DIV, {
      ...props,
      className: 'avatar-wrapper',
      events: { [EventNames.CLICK]: props.onClick },
    });
  }

  render() {
    return `
      <img src="{{ src }}" alt="{{ alt }}" />

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
