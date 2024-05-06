const webpush = require('web-push');

// VAPID keys
const vapidKeys = {
  publicKey:
    'BKFyr1BtbbFRSssDa74n43Z5cv04kOY4qwULV24s7DDhlUP4fcFSGlIlDkybsAJcb51f-oAk7934Q1lXn1kiwZI',
  privateKey: 'yLYGAgfSGHJJ-HxWOsYJ-b2i00GNpmrG-5WmmkfSztw'
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