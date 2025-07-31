import { Button, Form, Modal } from '../../components';
import { HTMLElements, EventNames, NamesGoEvent } from '../../constants';
import { Block, type BlockProps } from '../../core';
import { withRouter } from '../../hocs';
import {
  changeFormField,
  blurFormField,
  submitForm,
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
      className: 'content content_two-column',
      BackButton: new Button({
        ...props.backButton,
        className: 'button__icon_arrow-left',
        onClick: getGoEvent(NamesGoEvent.goBack, props),
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
        onSubmit: (evt: Event) => submitForm(evt, this.children.Form as Block),
        fields: props.fields.map((field) => ({
          ...field,
          inputProps: {
            attrs: { ...field.inputProps.attrs },
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
          onClick: getGoEvent(control.nameGoEvent, props),
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
          <div class="profile-section__avatar">
            {{{ Avatar }}}
          </div>
          ${this.props.title ? '<h1>{{ title }}</h1>' : ''}
          {{{ Form }}}
        </div>
      </section>
      {{{ Modal }}}
    `;
  }
}

const ProfilePageWithRouter = withRouter(ProfilePage) as unknown as new (
  props: ProfilePageProps,
) => Block & ProfilePage;

export default ProfilePageWithRouter;
