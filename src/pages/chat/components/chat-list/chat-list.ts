import { HTMLElements, EventNames } from '../../../../constants';
import { Block, type BlockProps } from '../../../../core';
import type { ChatListProps } from './chat-list.types';

export class ChatList extends Block<HTMLElement, ChatListProps & BlockProps> {
  constructor(props: ChatListProps) {
    super(HTMLElements.UL, {
      ...props,
      events: { [EventNames.CLICK]: props.onClick },
    });
  }

  render() {
    return `
      ${this.props.chats
        .map(({ avatar: { src, alt }, name, messages, badgeUnread, id }) => {
          const lastMessage = messages[messages.length - 1];
          const badgeClass = badgeUnread?.label
            ? 'chat-item-badge'
            : 'chat-item-badge_off';
          const chatClass =
            this.props.selectedChatId === id
              ? 'chat-item-wrapper chat-item-wrapper_active'
              : 'chat-item-wrapper';

          return `
            <li id="${id}">
              <div class="${chatClass}">
                <div class="chat-item-avatar">
                  <img src="${src}" alt="${alt}" />
                </div>
                <h3>${name}</h3>
                <p class="chat-item-paragraph">${lastMessage?.message ?? ''}</p>
                <span class="chat-item-date">${lastMessage?.date ?? ''}</span>
                <span class="${badgeClass}">${badgeUnread?.label ?? ''}</span>
              </div>
            </li>
        `;
        })
        .join('')}
    `;
  }
}
