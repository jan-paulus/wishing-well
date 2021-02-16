import { Component, h, Host, JSX } from '@stencil/core';
import { getQuote } from '../../global/quotes';

@Component({
  tag: 'ww-quote',
  shadow: false,
})
export class QuoteComponent {
  public render(): JSX.Element {
    return (
      <Host>
        <blockquote class="font-serif text-gray-500">„{getQuote()}“</blockquote>
      </Host>
    );
  }
}
