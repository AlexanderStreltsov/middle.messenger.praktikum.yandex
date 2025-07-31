import { Button, InputField, Modal } from '../../components';
import { HTMLElements, EventNames, NamesGoEvent } from '../../constants';
import { Block, type BlockProps } from '../../core';
import { withRouter } from '../../hocs/with-router';
import { getGoEvent } from '../../utils';
import { ChatList, ChatMessages } from './components';
import type { ChatPageProps } from './chat.types';

export class ChatPage extends Block<HTMLElement, ChatPageProps & BlockProps> {
  constructor(props: ChatPageProps) {
    super(HTMLElements.MAIN, {
      ...props,
      className: 'content content_two-column',
      ControlProfile: new Button({
        ...props.controlProfile,
        onClick: getGoEvent(NamesGoEvent.goProfile, props),
      }),
      FieldSearch: new InputField({
        ...props.fieldSearch,
        inputProps: {
          ...props.fieldSearch.inputProps,
          events: {
            [EventNames.INPUT]: (evt: Event) => this.filterChats(evt),
          },
        },
      }),
      ChatList: new ChatList({
        chats: props.messages,
        onClick: (evt: Event) => this.selectChat(evt),
      }),
      ChatMessages: new ChatMessages({
        chats: props.messages,
        fields: props.fieldsSendMsg,
        controls: props.controlsSendMsg,
        addUserClick: () => this.addUserClick(),
        controlsUserAction: props.controlsUserAction,
        textNoSelectChat: props.textNoSelectChat,
      }),
      Modal: new Modal({
        fields: props.fieldsAddUser,
        controls: props.controlsAddUser,
        title: props.titleAddUser,
        isBlur: true,
      }),
    });
  }

  private filterChats = (evt: Event) => {
    const filteredChats = this.props.messages.filter((item) =>
      item.name.includes((evt.target as HTMLInputElement).value),
    );
    const chatList = this.children.ChatList as Block;
    chatList.setProps({ chats: filteredChats });
  };

  private selectChat = (evt: Event) => {
    const selectedChatId =
      (evt.target as HTMLElement)
        .closest(HTMLElements.LI)
        ?.getAttribute('id') ?? '';

    const chatList = this.children.ChatList as Block;
    chatList.setProps({ selectedChatId });

    const chatMessages = this.children.ChatMessages as Block;
    chatMessages.setProps({ selectedChatId });
  };

  private addUserClick = () => {
    const modal = this.children.Modal as Block;
    modal.setProps({ isOpen: true });
  };

  render() {
    return `
      <nav class="chat-nav">
        {{{ ControlProfile }}}
        <form class="chat-nav__search">
          {{{ FieldSearch }}}
        </form>
        {{{ ChatList }}}
      </nav>
      {{{ ChatMessages }}}
      {{{ Modal }}}
    `;
  }
}

const ChatPageWithRouter = withRouter(ChatPage) as unknown as new (
  props: ChatPageProps,
) => Block & ChatPage;

export default ChatPageWithRouter;
