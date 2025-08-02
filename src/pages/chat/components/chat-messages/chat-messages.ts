import { HTMLElements, EventNames } from '../../../../constants';
import { Block, type BlockProps } from '../../../../core';
import { Form, Button } from '../../../../components';
import { changeFormField, getFormStateValidated } from '../../../../utils';
import type { ChatMessagesProps } from './chat-messages.types';

export class ChatMessages extends Block<
  HTMLElement,
  ChatMessagesProps & BlockProps
> {
  constructor(props: ChatMessagesProps) {
    super(HTMLElements.SECTION, {
      ...props,
      className: 'chat-main-section',
      Form: new Form({
        ...props,
        onSubmit: (evt: Event) => {
          evt.preventDefault();
          getFormStateValidated(this.children.Form as Block);
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
      ControlsUserAction: props.controlsUserAction.map(
        (control) =>
          new Button({
            ...control,
            onClick: props.addUserClick,
          }),
      ),
    });
  }

  render() {
    const { chats, selectedChatId, textNoSelectChat } = this.props;
    const selectedChat = chats.find((chat) => chat.id === selectedChatId);

    return `
      ${
        selectedChat
          ? `
            <header class="chat-main-section__header">
              <div class="chat-main-section-avatar">
                <img src="${selectedChat.avatar.src}" alt="${selectedChat.avatar.alt}" />
              </div>
              <h2>${selectedChat.name}</h2>
              <div>
                {{#each ControlsUserAction}}
                  {{{ this }}}
                {{/each}}
              </div>
            </header>

            <ul class="chat-main-section__messages">
              ${selectedChat.messages
                .map(({ type, message, date }) => {
                  return `
                    <li class="chat-main-section__messages-wrapper chat-main-section__messages-wrapper_${type}">
                      <p class="chat-message chat-message_${type}">
                        ${message}
                        <span>${date}</span>
                      </p>
                    </li>
                  `;
                })
                .join('')}
            </ul>

            {{{Form}}}
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
