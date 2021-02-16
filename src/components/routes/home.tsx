import { Component, h, Host, JSX } from '@stencil/core';
import { paymentService } from '../../global/payment-service';
import { ProductId } from '../../global/product.enum';

@Component({
  tag: 'ww-home',
  shadow: false,
})
export class AppHome {
  public render(): JSX.Element {
    return (
      <Host class="block shadow-xl rounded-md p-8 bg-white">
        <ww-quote />

        <div class="flex flex-wrap text-center my-6">
          <h1 class="flex-auto text-2xl font-semibold uppercase text-gray-500 font-serif">Spare a coin & make a wish</h1>
        </div>

        <div class="flex space-x-3 mb-4 text-sm font-semibold">
          <div class="flex-auto flex space-x-3 justify-center">
            <ww-button kind="tertiary" onClick={() => this.purchase(ProductId.SMALL)}>
              0,50 €
            </ww-button>
            <ww-button kind="secondary" onClick={() => this.purchase(ProductId.MEDIUM)}>
              1€
            </ww-button>
            <ww-button kind="primary" onClick={() => this.purchase(ProductId.LARGE)}>
              2€
            </ww-button>
          </div>
        </div>
      </Host>
    );
  }

  private purchase = (productId: ProductId): void => {
    paymentService.purchase(productId);
  };
}
