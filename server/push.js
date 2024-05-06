const webpush = require('web-push');

// VAPID keys
const vapidKeys = {
  publicKey:
    'BJnYC4KPAP51f3wqPDxhd1BRWrd6cPHdHMUDzaF7EbOAzt-zEfQFG_1pnuNfV7J0bahVyIoI0X-H3omFiKmCqFc',
  privateKey: 'iMgjw5kcoUeqqnQ19pZuaWIIbgLpufvkAF-ESfQxc7w'
};

webpush.setVapidDetails(
  'mailto:example@yourdomain.org',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {};
//   endpoint: '.....',
//   keys: {
//     auth: '.....',
//     p256dh: '.....'
//   }
// };

webpush.sendNotification(pushSubscription, 'test testov');