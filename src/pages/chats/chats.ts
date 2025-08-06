import type { AddChatData, SearchData } from '../../api';
import {
  Button,
  InputField,
  Modal,
  Spinner,
  type ModalClass,
  type InputFieldProps,
} from '../../components';
import {
  HTMLElements,
  EventNames,
  ButtonActionNames,
  InputNames,
} from '../../constants';
import { Block, type BlockProps, type AppState } from '../../core';
import { withRouter, connectStore } from '../../hocs';
import * as ChatsServices from '../../services/chats';
import * as UserServices from '../../services/user';
import { MessagesServices } from '../../services';
import {
  debounce,
  getGoEvent,
  type FormState,
  getFieldComponent,
} from '../../utils';
import { ChatsList, ChatsMessages } from './components';
import type { ChatsPageProps } from './chats.types';

export class ChatsPage extends Block<HTMLElement, ChatsPageProps & BlockProps> {
  constructor(props: ChatsPageProps) {
    super(HTMLElements.MAIN, {
      ...props,
      MessagesServices: new MessagesServices(),
      isLoading: props?.isLoading ?? false,
      selectedChatId: props.selectedChatId,
      className: 'content content_two-column',
      Spinner: new Spinner(),
      Controls: props.controlsChats.map(
        (control) =>
          new Button({
            ...control,
            onClick: () => {
              if (control.actionName === ButtonActionNames.ADD_CHAT_OPEN) {
                this.addOpenClick(ButtonActionNames.ADD_CHAT);
                return;
              }

              getGoEvent(control.nameGoEvent, props.router)?.();
            },
          }),
      ),
      FieldSearch: new InputField({
        ...props.fieldSearch,
        inputProps: {
          ...props.fieldSearch.inputProps,
          events: {
            [EventNames.INPUT]: debounce((evt: Event) => this.filterChats(evt)),
          },
        },
      }),
      ChatsList: new ChatsList({
        chats: props.chats ?? [],
        onClick: debounce((evt: Event) => this.selectChatClick(evt)),
      }),
      ChatsMessages: new ChatsMessages({
        messages: [],
        fields: props.fieldsSendMsg,
        controls: props.controlsSendMsg,
        onSubmit: (evt: Event, data: FormState) => this.sendMessage(evt, data),
        ControlsUserActions: props.controlsUserActions.map(
          (control) =>
            new Button({
              ...control,
              onClick: () => {
                if (control.actionName === ButtonActionNames.ADD_USER_OPEN) {
                  this.addOpenClick(ButtonActionNames.ADD_USER);
                  return;
                }
              },
            }),
        ),
        textNoSelectChat: props.textNoSelectChat,
      }),
      Modals: props.modals.map(
        (modal) =>
          new Modal({
            ...modal,
            onSubmit: (evt: Event, data: FormState) => {
              if (modal.actionName === ButtonActionNames.ADD_CHAT) {
                this.addChatClick(evt, data, modal.actionName);
                return;
              }

              if (modal.actionName === ButtonActionNames.ADD_USER) {
                this.addUserClick(evt, data, modal.actionName);
                return;
              }
            },
            onInputField: debounce((evt, field) => this.searchUser(evt, field)),
            isBlur: true,
          }),
      ),
    });
  }

  private getModal = (name: ButtonActionNames): Block => {
    const modals = this.children.Modals as Block[];

    return modals.find(
      (modal) => modal.getProps().actionName === name,
    ) as Block;
  };

  private addOpenClick = (name: ButtonActionNames) => {
    const modal = this.getModal(name);
    modal.setProps({ isOpen: true });
  };

  private getCloseModal = (evt: Event, name: ButtonActionNames) => {
    const modal = this.getModal(name) as unknown as ModalClass;

    return () => {
      modal.closeModal(evt);
    };
  };

  private addChatClick = (
    evt: Event,
    data: FormState,
    name: ButtonActionNames,
  ) => {
    const modal = this.getModal(name);
    const form = modal.getChildren().Form as Block;
    const closeModal = this.getCloseModal(evt, name);
    ChatsServices.addChat(data as AddChatData, form, closeModal);
  };

  private filterChats = (evt: Event) => {
    const filteredChats = this.props.chats.filter((chat) =>
      chat.title.includes((evt.target as HTMLInputElement).value),
    );
    const chatsList = this.children.ChatsList as Block;
    chatsList.setProps({ chats: filteredChats });
  };

  private selectChatClick = (evt: Event) => {
    if (!this.props.MessagesServices) {
      return;
    }

    const selectedChatId = Number(
      (evt.target as HTMLElement)
        .closest(HTMLElements.LI)
        ?.getAttribute('id') ?? '',
    );

    const chatsList = this.children.ChatsList as Block;
    const chatsMessages = this.children.ChatsMessages as Block;

    chatsList.setProps({ selectedChatId });
    chatsMessages.setProps({ selectedChatId });
    this.setProps({ ...this.props, selectedChatId });

    ChatsServices.getMessages(selectedChatId, this.props.MessagesServices);
  };

  private searchUser = async (
    evt: Event,
    {
      inputProps: {
        attrs: { list, name },
      },
    }: InputFieldProps,
  ) => {
    if (list) {
      const modal = this.getModal(ButtonActionNames.ADD_USER);
      const form = modal.getChildren().Form as Block;
      const searchUserField = getFieldComponent(form, name);

      const searchedUsers = await UserServices.searchUser(
        {
          [name]: (evt.target as HTMLInputElement).value,
        } as SearchData,
        form,
      );

      const options = searchedUsers?.map((user) => ({
        value: user.login,
        id: user.id,
      }));

      searchUserField?.setProps({ options });
      (evt.target as HTMLInputElement).focus();
    }
  };

  private addUserClick = (
    evt: Event,
    data: FormState,
    name: ButtonActionNames,
  ) => {
    if (!this.props.MessagesServices) {
      return;
    }

    const modal = this.getModal(name);
    const form = modal.getChildren().Form as Block;
    const selectedChatId = this.props.selectedChatId as number;
    const closeModal = this.getCloseModal(evt, name);

    const datalist = (evt.target as HTMLElement).querySelector(
      'datalist',
    ) as HTMLDataListElement;

    const [{ id: userId }] = Array.from(datalist.options).filter(
      (option) => option.value === data.login,
    );

    ChatsServices.addUser(
      { users: [Number(userId)], chatId: Number(this.props.selectedChatId) },
      form,
      selectedChatId,
      this.props.MessagesServices,
      closeModal,
    );
  };

  private sendMessage = (evt: Event, data: FormState) => {
    if (!this.props.MessagesServices) {
      return;
    }

    const input = (evt.target as HTMLFormElement).querySelector('input');
    if (input) {
      input.value = '';
    }

    const message = data[InputNames.MESSAGE] as string;
    this.props.MessagesServices.sendMessage(message);
  };

  componentDidMount = () => ChatsServices.getChats();

  componentWillUnmount = () => {
    if (this.props.MessagesServices) {
      this.props.MessagesServices.closeChatsConnection();
    }
  };

  render() {
    return ` 
      <nav class="chats-nav">
        {{#if isLoading}}
          {{{ Spinner }}}
        {{else}}
          <div class="chats-nav__controls">
            {{#each Controls}}
              {{{ this }}}
            {{/each}}
          </div>
          <form class="chats-nav__search">
            {{{ FieldSearch }}}
          </form>
          {{{ ChatsList }}}
        {{/if}}
      </nav>

      {{#if isLoadingMessages}}
        {{{ Spinner }}}
      {{else}}
        {{{ ChatsMessages }}}
      {{/if}}
      
      {{#each Modals}}
        {{{ this }}}
      {{/each}}
    `;
  }
}

const mapStateToProps = ({
  isLoading,
  isLoadingMessages,
  chats,
}: AppState) => ({
  isLoading,
  isLoadingMessages,
  chats,
});

export default connectStore<ChatsPageProps>(mapStateToProps)(
  withRouter(ChatsPage),
);
