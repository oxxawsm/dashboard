const { webpush } = require('web-push');
const { not } = require('./simple-not')
const { subscriptions } = require("./db/subs");

exports.sendNotification = async (req, res) => {

  const notificationPayload = { notification: not };

  // console.log(webpush.generateVAPIDKeys());
  const vapidDetails = {
    subject: 'mailto:seu-email@mail.com',
    publicKey: 'BOI8zyF0w61xSry2zTtKLpCrNwPsLjzbPDiVpGnb1pWq5-BlSTVbM8RjlIBwrA4P2OBfMI-Gn0l-RtBm5ufe-NM',
    privateKey: 'tAqCIAn7sD0oDP7v7aoYGxyu4QezloHP9IQYDK1vbdY'
  }

  for (const subscription of subscriptions) {
    await webpush.sendNotification(
      subscription,
      JSON.stringify(notificationPayload),
      { vapidDetails }
    );
  }

  res.status(200).json({message: 'ufyxtjckghkcjxt!'});
}