import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'wb-error',
  shadow: false,
})
export class ErrorRoute {
  public render(): void {
    return (
      <Host>
        Oh no! Something went wrong. Please try again!
        <stencil-route-link url="/">
          <wb-button>Home</wb-button>
        </stencil-route-link>
      </Host>
    );
  }
}
