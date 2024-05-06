const webpush = require('web-push');

// VAPID keys
const vapidKeys = {
  publicKey:
    'BHtMZejRwMIjhIjpQztMfZfofLM6HDBXa4jpNIZ_T2UA_urLa-FTSIcxrnoetD6yg-OLkkIp-4KkTwmCcQo4Vho',
  privateKey: 'JxL_x1dWfFI5XTjBXeFeBMMjbNuDBCaNqe_IaMw2zbo'
};

webpush.setVapidDetails(
  'mailto:example@yourdomain.org',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

// This is the same output of calling JSON.stringify on a PushSubscription
const pushSubscription = {
  endpoint: '.....',
  keys: {
    auth: '.....',
    p256dh: '.....'
  }
};

webpush.sendNotification(pushSubscription, 'Your Push Payload Text');