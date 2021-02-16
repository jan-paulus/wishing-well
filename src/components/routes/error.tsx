import { Component, h, Host, JSX } from '@stencil/core';

@Component({
  tag: 'ww-error',
  shadow: false,
})
export class ErrorRoute {
  public render(): JSX.Element {
    return (
      <Host>
        Oh no! Something went wrong. Please try again!
        <stencil-route-link url="/">
          <ww-button>Home</ww-button>
        </stencil-route-link>
      </Host>
    );
  }
}
