/* eslint-disable no-restricted-globals */

import { getMessaging } from "firebase/messaging";
import { initializeApp } from "firebase/app";

importScripts("https://www.gstatic.com/firebasejs/7.5.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.5.0/firebase-messaging.js");
importScripts("https://www.gstatic.com/firebasejs/7.5.0/firebase-analytics.js");

initializeApp({
  messagingSenderId: "809122524558"
});


getMessaging.setBackgroundMessageHandler(payload => {
  const notification = JSON.parse(payload.data.notification);
  const notificationTitle = notification.title;
  const notificationOptions = {
    body: notification.body
  };

  return self.registration.showNotification(
    notificationTitle,
    notificationOptions
  );
});