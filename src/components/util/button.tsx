import { Component, Prop, h, Host, JSX } from '@stencil/core';

const DEFAULT_CLASSES = 'flex p-2 w-20 items-center justify-center rounded-full';

@Component({
  tag: 'ww-button',
  shadow: false,
})
export class ButtonComponent {
  @Prop()
  public type: 'button' | 'submit' = 'button';

  @Prop()
  public kind: 'primary' | 'secondary' | 'tertiary' = 'primary';

  public render(): JSX.Element {
    const colorClasses = this.getColorClasses();

    return (
      <Host>
        <button type={this.type} class={`${DEFAULT_CLASSES} ${colorClasses}`}>
          <slot />
        </button>
      </Host>
    );
  }

  private getColorClasses(): string {
    switch (this.kind) {
      case 'primary':
        return 'bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring focus:border-green-500';
      case 'secondary':
        return 'bg-green-100 text-gray-600 hover:bg-green-200 focus:outline-none focus:ring focus:border-green-300';
      case 'tertiary':
        return 'bg-green-50 text-green-500 hover:bg-green-100 focus:outline-none focus:ring focus:border-green-200';
    }
  }
}
