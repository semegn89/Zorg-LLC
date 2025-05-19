const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_SECRET);
const app = express();
const path = require('path');

app.use(cors({
  origin: 'https://www.zorg-international.com',
  methods: ['POST'],
}));
app.use(express.static('public'));
app.use(express.json());

app.post('/create-checkout-session', async (req, res) => {
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
    success_url: 'https://www.zorg-international.com/success.html',
    cancel_url: 'https://www.zorg-international.com/cancel.html',
  });
  res.json({ id: session.id });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(3000, () => console.log('Server started on port 3000'));
