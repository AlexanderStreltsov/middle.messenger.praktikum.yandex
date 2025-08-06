export function withRouter<P extends object>(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Component: new (props: P) => any,
): new (props: P) => InstanceType<typeof Component> {
  return class extends Component {
    constructor(props: P) {
      super({ ...props, router: window.router });
    }
  };
}
