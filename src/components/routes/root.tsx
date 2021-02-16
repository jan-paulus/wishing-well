import { Component, h, Host, JSX } from '@stencil/core';

@Component({
  tag: 'app-root',
  shadow: false,
})
export class AppRoot {
  public render(): JSX.Element {
    return (
      <Host class="block">
        <div
          class="flex items-center justify-center h-screen p-6"
          style={{
            background:
              'url(https://images.unsplash.com/photo-1489981424607-45c58daf0581?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80) no-repeat center center fixed',
            backgroundSize: 'cover',
          }}
        >
          <main>
            <stencil-router>
              <stencil-route-switch scrollTopOffset={0}>
                <stencil-route url="/" component="ww-home" exact={true} />
                <stencil-route url="/error" component="ww-error" />
                <stencil-route url="/cancel" component="ww-cancel" />
                <stencil-route url="/success" component="ww-success" />
              </stencil-route-switch>
            </stencil-router>
          </main>
        </div>
      </Host>
    );
  }
}
