import { Component, h, Host, JSX } from '@stencil/core';

@Component({
  tag: 'ww-success',
  shadow: false,
})
export class SuccessRoute {
  public render(): JSX.Element {
    return (
      <Host>
        Möge dein Wunsch in Erfüllung gehen!
        <br />
        Why not start another one?
        <stencil-route-link url="/">
          <ww-button>Home</ww-button>
        </stencil-route-link>
      </Host>
    );
  }
}
