const express = require('express');
const app = express();
const stripe = require('stripe')('sk_live_...'); // 🔒 вставь свой СЕКРЕТНЫЙ ключ
app.use(express.static('public'));
app.use(express.json());

app.post('/create-checkout-session', async (req, res) => {
  // Accept both `cart` (old) and `items` (new) for compatibility
  const items = req.body.items || req.body.cart;

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: 'payment',
    line_items: items.map(item => ({
      price_data: {
        currency: item.currency || 'usd',
        product_data: { name: item.name },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity,
    })),
    success_url: 'https://zorg-international.com/success.html',
    cancel_url: 'https://zorg-international.com/cancel.html',
  });

  res.json({ id: session.id });
});

app.listen(3000, () => console.log('Server started on port 3000'));
<!-- test --> 
