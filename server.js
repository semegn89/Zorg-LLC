const express = require('express');
<<<<<<< HEAD
const app = express();
const stripe = require('stripe')('sk_live_...'); // 🔒 вставь свой СЕКРЕТНЫЙ ключ
=======
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_SECRET);
const app = express();
const path = require('path');

app.use(cors({
  origin: 'https://www.zorg-international.com',
  methods: ['POST'],
}));
>>>>>>> 2cc18bcb2a09fccefc2aa17db9a6a3ffeebe8765
app.use(express.static('public'));
app.use(express.json());

app.post('/create-checkout-session', async (req, res) => {
<<<<<<< HEAD
  // Accept both `cart` (old) and `items` (new) for compatibility
  const items = req.body.items || req.body.cart;

=======
  const items = req.body.items || req.body.cart;
>>>>>>> 2cc18bcb2a09fccefc2aa17db9a6a3ffeebe8765
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
<<<<<<< HEAD
    success_url: 'https://zorg-international.com/success.html',
    cancel_url: 'https://zorg-international.com/cancel.html',
  });

  res.json({ id: session.id });
});

app.listen(3000, () => console.log('Server started on port 3000'));
=======
    success_url: 'https://www.zorg-international.com/success.html',
    cancel_url: 'https://www.zorg-international.com/cancel.html',
  });
  res.json({ id: session.id });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(3000, () => console.log('Server started on port 3000'));
>>>>>>> 2cc18bcb2a09fccefc2aa17db9a6a3ffeebe8765
