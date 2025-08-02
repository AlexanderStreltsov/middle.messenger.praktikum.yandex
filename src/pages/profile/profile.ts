import type { EditProfileData, EditPasswordData } from '../../api';
import {
  Button,
  Form,
  Modal,
  Spinner,
  type ButtonProps,
} from '../../components';
import {
  HTMLElements,
  EventNames,
  NamesGoEvent,
  InputNames,
  ButtonActionNames,
  PagesNames,
} from '../../constants';
import { Block, type BlockProps, type AppState } from '../../core';
import { withRouter, connectStore } from '../../hocs';
import * as AuthServices from '../../services/auth';
import * as UserServices from '../../services/user';
import {
  changeFormField,
  blurFormField,
  getGoEvent,
  getFormStateValidated,
  type FormState,
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
        onClick: () => this.switchModalOpen(),
      }),
      Form: new Form({
        ...props,
        isInputRow: true,
        classFields: 'profile-form__fields',
        classControls: `profile-form__controls profile-form__controls_${props.controlsViewType}`,
        onSubmit: (evt: Event) => this.submit(evt, props.name),
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
          onClick: () => this.formControlClick(control),
        })),
      }),
      Modal: new Modal({
        fields: props.fieldsChangeAvatar ?? [],
        controls: props.controlsChangeAvatar ?? [],
        title: props.titleChangeAvatar ?? '',
        classFields: 'profile-section__modal-form-fields',
        onSubmit: (data) => this.submitChangeAvatar(data),
      }),
    });
  }

  private switchModalOpen = (isOpenAction: boolean = true) => {
    if (this.props.avatar.isChange) {
      const modal = this.children.Modal as Block;
      modal.setProps({ isOpen: isOpenAction });
    }
  };

  private formControlClick = ({ nameGoEvent, actionName }: ButtonProps) => {
    if (actionName === ButtonActionNames.LOGOUT) {
      AuthServices.logout();
      return;
    }

    getGoEvent(nameGoEvent, this.props.router)?.();
  };

  private submit = (evt: Event, name: PagesNames) => {
    evt.preventDefault();

    const form = this.children.Form as Block;
    const data = getFormStateValidated(form);

    if (!data) {
      return;
    }

    if (name === PagesNames['profile-edit']) {
      UserServices.editProfile(data as EditProfileData, form);
    }

    if (name === PagesNames['profile-pass-edit']) {
      UserServices.editPassword(data as EditPasswordData, form);
    }
  };

  private submitChangeAvatar = ({ avatar }: FormState) => {
    const modal = this.children.Modal as Block;
    const form = modal.getChildren().Form as Block;
    UserServices.editAvatar(avatar as FormData, form, this.switchModalOpen);
  };

  render() {
    const { name, title } = this.props;

    return `
      <nav class="profile-nav">
        {{{ BackButton }}}
      </nav>
      <section class="profile-section">
        <div class="profile-section__wrapper">
          {{#if isLoading}}
            {{{ Spinner }}}
          {{else}}
            ${
              name === PagesNames['profile']
                ? `
                    <div class="profile-section__avatar">
                      {{{ Avatar }}}
                    </div>
                  `
                : ''
            }
            ${
              name && title === PagesNames['profile']
                ? '<h1>{{ title }}</h1>'
                : ''
            }
            {{{ Form }}}
          {{/if}}
        </div>
      </section>
      {{{ Modal }}}
    `;
  }
}

const mapStateToProps = ({ isLoading, user }: AppState) => ({
  isLoading: isLoading,
  user: user,
  title: user?.[InputNames.FIRST_NAME],
});

const ProfilePageWithStore = connectStore(mapStateToProps)(
  withRouter(ProfilePage),
) as unknown as new (props: ProfilePageProps) => Block & ProfilePage;

export default ProfilePageWithStore;
