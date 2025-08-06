import { HTMLElements, EventNames } from '../../../../constants';
import { Block, type BlockProps, type AppState } from '../../../../core';
import { connectStore } from '../../../../hocs';
import { getAvatarUrl, getTimeMessage } from '../../../../utils';
import type { ChatsListProps } from './chats-list.types';

export class ChatsList extends Block<HTMLElement, ChatsListProps & BlockProps> {
  constructor(props: ChatsListProps) {
    super(HTMLElements.UL, {
      ...props,
      events: { [EventNames.CLICK]: props.onClick },
    });
  }

  render() {
    const chats = this.props.chats ?? [];

    return `
      ${chats
        .map(
          ({
            avatar,
            title,
            last_message: lastMessage,
            unread_count: count,
            id,
          }) => {
            const badgeClass = !!count
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
                  <img src="${getAvatarUrl(avatar)}" alt="" />
                </div>
                <h3>${title}</h3>
                <p class="chat-item-paragraph">${lastMessage?.content ?? ''}</p>
                <span class="chat-item-date">
                  ${lastMessage ? getTimeMessage(lastMessage.time) : ''}
                </span>
                <span class="${badgeClass}">${count || ''}</span>
              </div>
            </li>
        `;
          },
        )
        .join('')}
    `;
  }
}

const mapStateToProps = ({ chats }: AppState) => ({
  chats,
});

export default connectStore<ChatsListProps>(mapStateToProps)(ChatsList);
