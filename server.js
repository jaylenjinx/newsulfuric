const keyPublishable = "pk_live_51JjDBBH4zQ6l3kMW7R1ALegPiyZzHuyQTGzGolhnFfUziFnBG6ovF0N6WR9eXQJMjqPRLdns7326ddzJkTazJ4Db00HGsKM1CN"; // Enter the key here
const keySecret = "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"; // enter the secret here
// const keySecret = "sk_test_51JjDBBH4zQ6l3kMWYnDXBNWUBgfOtAgoQ585wGXmbi548dtMiGAVH5u6ZRCQEujqW3IL1wUpX3Cd40ao53w92KBm00f8Tf5Uf8"; // test secret key

// Load Node modules
const stripe = require('stripe')(keySecret);
const express = require('express');
const ejs = require('ejs');
const path = require('path')
const bodyParser = require('body-parser');

// Initialise Express
var app = express();

// Render static files
app.use(express.static('public'));

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Port website will run on
app.listen(8080);
console.log('Server is listening on port 8080');

// *** GET Routes - display pages ***
// Root Route
app.get('/', function (req, res) {
    res.render('pages/index');
});
app.post('/', function (req, res) {
    res.render('pages/index');
});


// Shop Route
app.get('/shop', function (req, res) {
    res.render('pages/shop');
});


// Sunflower Sulfur Route
app.get('/sunsul', function (req, res) {
    res.render('pages/sunflowersulfur');
});

// Fuzz Route
app.get('/fuzz', function (req, res) {
    res.render('pages/fuzz');
});


// Successful Payment Route
app.get('/success', function (req, res) {
    res.render('pages/success');
});

app.post('/sunsulhoodie', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      shipping_rates: ['shr_1Jk5KhH4zQ6l3kMWGs4HZ46a'],
      shipping_address_collection: {
        allowed_countries: ['AU'],
      },
      line_items: [{
        price: 'price_1JjtF9H4zQ6l3kMWe53hrsCe',
        quantity: 1,
      }],
      mode: 'payment',
      success_url: 'https://sulfuric.studio/success',
      cancel_url: 'https://sulfuric.studio/shop',
    });
  
    res.redirect(303, session.url);
  });

  app.post('/fuzzhoodie', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      shipping_rates: ['shr_1Jk5KhH4zQ6l3kMWGs4HZ46a'],
      shipping_address_collection: {
        allowed_countries: ['AU'],
      },
      line_items: [{
        price: 'price_1JjtFdH4zQ6l3kMW9VTFYLFa',
        quantity: 1,
      }],
      mode: 'payment',
      success_url: 'https://sulfuric.studio/success',
      cancel_url: 'https://sulfuric.studio/shop',
    });
  
    res.redirect(303, session.url);
  });
  
