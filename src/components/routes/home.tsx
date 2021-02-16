import { Component, h } from '@stencil/core';
import { paymentService } from '../../global/payment-service';
import { ProductId } from '../../global/product.enum';
import { getQuoteOfTheDay } from '../../global/quotes';

@Component({
  tag: 'wb-home',
  shadow: false,
})
export class AppHome {
  public render(): void {
    return (
      <div class="shadow-lg rounded-md p-4">
        <blockquote class="font-serif">„{getQuoteOfTheDay()}“</blockquote>

        <div class="flex flex-wrap">
          <h1 class="flex-auto text-xl font-semibold">Today is your lucky day</h1>
          <div class="text-xl font-semibold text-gray-500">Lel</div>
          <div class="w-full flex-none text-sm font-medium text-gray-500 mt-2">In stock</div>
        </div>

        <div class="flex space-x-3 mb-4 text-sm font-semibold">
          <div class="flex-auto flex space-x-3">
            <wb-button onClick={() => this.pay(ProductId.SMALL)}>0,50 €</wb-button>
            <wb-button onClick={() => this.pay(ProductId.MEDIUM)}>1€</wb-button>
            <wb-button onClick={() => this.pay(ProductId.LARGE)}>2€</wb-button>
          </div>
        </div>
      </div>
    );
  }

  private pay = (productId: ProductId): void => {
    paymentService.purchase(productId);
  };
}
