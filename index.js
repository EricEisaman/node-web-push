const express = require('express');
const webpush = require('web-push');

const publicVapidKey = process.env.PUBLIC_VAPID_KEY;
const privateVapidKey = process.env.PRIVATE_VAPID_KEY;

// Replace with your email
webpush.setVapidDetails('mailto:no-reply@cs1.org', publicVapidKey, privateVapidKey);

const app = express();

app.use(require('body-parser').json());

app.post('/subscribe', (req, res) => {
  const subscription = req.body;
  res.status(201).json({});
  const payload = JSON.stringify({ title: 'test' });

  console.log(subscription);

  webpush.sendNotification(subscription, payload).catch(error => {
    console.error(error.stack);
    console.log(error.body);
  });
});

app.use(require('express-static')('./public'));

app.listen(3000);
