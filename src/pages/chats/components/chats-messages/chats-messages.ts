import type { User } from '../../../../api';
import { HTMLElements, EventNames } from '../../../../constants';
import { Block, type BlockProps, type AppState } from '../../../../core';
import { Form } from '../../../../components';
import { connectStore } from '../../../../hocs';
import {
  changeFormField,
  getFormStateValidated,
  getAvatarUrl,
  getTimeMessage,
} from '../../../../utils';
import type { ChatsMessagesProps } from './chats-messages.types';

export class ChatsMessages extends Block<
  HTMLElement,
  ChatsMessagesProps & BlockProps
> {
  constructor(props: ChatsMessagesProps) {
    super(HTMLElements.SECTION, {
      ...props,
      className: 'chat-main-section',
      Form: new Form({
        ...props,
        onSubmit: (evt: Event) => {
          evt.preventDefault();
          const data = getFormStateValidated(this.children.Form as Block);
          if (!data) {
            return;
          }
          props.onSubmit?.(evt, data);
        },
        fields: props.fields.map((field) => ({
          ...field,
          inputProps: {
            attrs: { ...field.inputProps.attrs },
            events: {
              [EventNames.CHANGE]: (evt: Event) =>
                changeFormField(evt, this.children.Form as Block, field),
            },
          },
        })),
      }),
    });
  }

  render() {
    const chats = window.store.getState().chats;
    const messages = this.props.messages ?? [];
    const usersSelectedChat = this.props.usersSelectedChat ?? [];
    const { selectedChatId, textNoSelectChat, errorMessages } = this.props;

    const selectedChat = chats?.find((chat) => chat.id === selectedChatId);

    const usersMapToId = usersSelectedChat.reduce(
      (acc, user) => {
        acc[`${user.id}`] = { ...user };
        return acc;
      },
      {} as Record<string, User>,
    );

    return `
      ${
        selectedChatId
          ? `
            <header class="chat-main-section__header">
              <div class="chat-main-section-avatar">
                <img src="${getAvatarUrl(selectedChat?.avatar)}" alt="" />
              </div>
              <h2>${selectedChat?.title}</h2>
              <div>
                {{#each ControlsUserActions}}
                  {{{ this }}}
                {{/each}}
              </div>
            </header>

            {{#if errorMessages}}
              <div class="chat-main-section_no-messages">
                <p>${errorMessages}</p>
              </div>
            {{else}}
              <ul class="chat-main-section__messages">
                ${messages
                  .map(({ content, time, user_id }) => {
                    const user = usersMapToId[user_id ?? ''];
                    const { avatar, login } = user ?? {};
                    const userAvatarClass = avatar ? 'custom' : 'default';

                    return `
                      <li class="chat-main-section__messages-wrapper">
                        <div class="messages-avatar-wrapper">
                          <img
                            alt=""
                            src="${getAvatarUrl(avatar)}"
                            class="avatar-wrapper__img_${userAvatarClass}"
                          />
                        </div>
                        <div class="chat-message">
                          <h3>${login}</h3>
                          <p>
                            ${content}
                            <span>${getTimeMessage(time)}</span>
                          </p>
                        </div>
                      </li>
                    `;
                  })
                  .join('')}
              </ul>
              {{{Form}}}
            {{/if}}
            `
          : `
            <div class="chat-main-section_no-messages">
              <p>${textNoSelectChat}</p>
            </div>
            `
      }
    `;
  }
}

const mapStateToProps = ({
  messages,
  errorMessages,
  usersSelectedChat,
}: AppState) => ({
  messages,
  errorMessages,
  usersSelectedChat,
});

export default connectStore<ChatsMessagesProps>(mapStateToProps)(ChatsMessages);
