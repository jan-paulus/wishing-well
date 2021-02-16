import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'wb-button',
  shadow: false,
})
export class ButtonComponent {
  @Prop()
  public type: 'button' | 'submit' = 'button';

  public render(): void {
    return (
      <Host>
        <button type={this.type} class="flex p-2 w-20 items-center justify-center rounded-full bg-purple-700 text-white hover:bg-purple-500">
          <slot />
        </button>
      </Host>
    );
  }
}
