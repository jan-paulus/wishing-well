require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const products = [
  {
    id: 'small',
    name: 'Small Wish',
    description: 'Small Wish',
    // image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=600&h=600&q=80',
    unit_amount: 50,
    currency: 'EUR',
  },
  {
    id: 'medium',
    name: 'Wish',
    description: 'Wish',
    // image: 'https://images.unsplash.com/photo-1454329001438-1752daa90420?auto=format&fit=crop&w=600&h=600&q=80',
    unit_amount: 100,
    currency: 'EUR',
  },
  {
    id: 'large',
    name: 'Grant Wish',
    description: 'Wish',
    // image: 'https://images.unsplash.com/photo-1454329001438-1752daa90420?auto=format&fit=crop&w=600&h=600&q=80',
    unit_amount: 200,
    currency: 'EUR',
  },
];

exports.handler = async function (event, context) {
  const { productId } = JSON.parse(event.body);

  const product = products.find(p => p.id === productId);

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    billing_address_collection: 'auto',
    line_items: [
      {
        price_data: {
          currency: product.currency,
          product_data: {
            name: product.name,
          },
          unit_amount: product.unit_amount,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${process.env.URL}/success`,
    cancel_url: `${process.env.URL}/cancel`,
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ sessionId: session.id, publishableKey: process.env.STRIPE_PUBLISHABLE_KEY }),
  };
};
