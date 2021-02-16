import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  shadow: false,
})
export class AppRoot {
  render() {
    return (
      <div>
        <header />

        <main class="p-4">
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="wb-home" exact={true} />
              <stencil-route url="/error" component="wb-error" />
              <stencil-route url="/cancel" component="wb-cancel" />
              <stencil-route url="/success" component="wb-success" />
            </stencil-route-switch>
          </stencil-router>
        </main>

        <footer />
      </div>
    );
  }
}
