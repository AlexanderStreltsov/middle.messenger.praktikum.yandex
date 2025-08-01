import { Button, Form, Modal, Spinner } from '../../components';
import {
  HTMLElements,
  EventNames,
  NamesGoEvent,
  InputNames,
  ButtonActionNames,
} from '../../constants';
import { Block, type BlockProps, type AppState } from '../../core';
import { withRouter, connectStore } from '../../hocs';
import * as AuthServices from '../../services';
import {
  changeFormField,
  blurFormField,
  getFormData,
  getGoEvent,
} from '../../utils';
import { Avatar } from './components';
import type { ProfilePageProps } from './profile.types';

export class ProfilePage extends Block<
  HTMLElement,
  ProfilePageProps & BlockProps
> {
  constructor(props: ProfilePageProps) {
    super(HTMLElements.MAIN, {
      ...props,
      title: props.title ?? '',
      isLoading: props?.isLoading ?? false,
      className: 'content content_two-column',
      Spinner: new Spinner(),
      BackButton: new Button({
        ...props.backButton,
        className: 'button__icon_arrow-left',
        onClick: getGoEvent(NamesGoEvent.goBack, props.router),
      }),
      Avatar: new Avatar({
        ...props.avatar,
        onClick: () => this.changeAvatarClick(),
      }),
      Form: new Form({
        ...props,
        isInputRow: true,
        classFields: 'profile-form__fields',
        classControls: `profile-form__controls profile-form__controls_${props.controlsViewType}`,
        onSubmit: (evt: Event) => getFormData(evt, this.children.Form as Block),
        fields: props.fields.map((field) => ({
          ...field,
          inputProps: {
            attrs: {
              ...field.inputProps.attrs,
              value:
                (props.user?.[field.inputProps.attrs.name] as string) ?? '',
            },
            events: {
              [EventNames.BLUR]: (evt: Event) =>
                blurFormField(evt, this.children.Form as Block, field),
              [EventNames.CHANGE]: (evt: Event) =>
                changeFormField(evt, this.children.Form as Block, field),
            },
          },
        })),
        controls: props.controls.map((control) => ({
          ...control,
          onClick: () => {
            const goEvent = getGoEvent(control.nameGoEvent, props.router);

            if (goEvent) {
              goEvent();
              return;
            }

            if (control.actionName === ButtonActionNames.LOGOUT) {
              AuthServices.logout();
            }
          },
        })),
      }),
      Modal: new Modal({
        fields: props.fieldsChangeAvatar ?? [],
        controls: props.controlsChangeAvatar ?? [],
        title: props.titleChangeAvatar ?? '',
        classFields: 'profile-section__modal-form-fields',
      }),
    });
  }

  private changeAvatarClick = () => {
    if (this.props.avatar.isChange) {
      const modal = this.children.Modal as Block;
      modal.setProps({ isOpen: true });
    }
  };

  render() {
    return `
      <nav class="profile-nav">
        {{{ BackButton }}}
      </nav>
      <section class="profile-section">
        <div class="profile-section__wrapper">
          {{#if isLoading}}
            {{{ Spinner }}}
          {{else}}
            <div class="profile-section__avatar">
              {{{ Avatar }}}
            </div>
            ${this.props.title ? '<h1>{{ title }}</h1>' : ''}
            {{{ Form }}}
          {{/if}}
        </div>
      </section>
      {{{ Modal }}}
    `;
  }
}

const mapStateToProps = (state: AppState) => ({
  isLoading: state.isLoading,
  user: state.user,
  title: state.user?.[InputNames.FIRST_NAME],
});

const ProfilePageWithStore = connectStore(mapStateToProps)(
  withRouter(ProfilePage),
) as unknown as new (props: ProfilePageProps) => Block & ProfilePage;

export default ProfilePageWithStore;
