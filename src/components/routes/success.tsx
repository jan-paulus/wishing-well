import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'wb-success',
  shadow: false,
})
export class SuccessRoute {
  public render(): void {
    return (
      <Host>
        Möge dein Wunsch in Erfüllung gehen!
        <br />
        Why not start another one?
        <stencil-route-link url="/">
          <wb-button>Home</wb-button>
        </stencil-route-link>
      </Host>
    );
  }
}
