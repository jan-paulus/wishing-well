import { ProductId } from './product.enum';

class PaymentService {
  public purchase(productId: ProductId): void {
    console.log(productId);

    const requestConfig = {
      method: 'POST',
      body: JSON.stringify({ productId }),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    fetch('/.netlify/functions/create-checkout-session', requestConfig)
      .then(res => res.json())
      .then(({ sessionId, publishableKey }) => (window as any).Stripe(publishableKey).redirectToCheckout({ sessionId }))
      .then(res => {
        // If `redirectToCheckout` fails due to a browser or network
        // error, you should display the localized error message to your
        // customer using `error.message`.
        if (res.error) {
          alert(res.error.message);
        }
      })
      .catch(function (error) {
        console.error('Error:', error);
      });
  }
}

export const paymentService = new PaymentService();
