const stripe = require('stripe')('your-stripe-secret-key');

app.post('/create-payment-intent', async (req, res) => {
    const paymentIntent = await stripe.paymentIntents.create({
        amount: 500, // e.g., $5.00
        currency: 'usd',
    });
    res.send({
        clientSecret: paymentIntent.client_secret,
    });
});
