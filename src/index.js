import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './app/store'
import { Provider } from 'react-redux'
import Loading from './common/Loading';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Suspense fallback={<Loading />}>
        <Provider store={store}>
            <App />
        </Provider>
    </Suspense>
  // </React.StrictMode>
);

serviceWorkerRegistration.register(); // Регистрация Service Worker'а

const tokenString = document.getElementById("token");

const firebaseApp = initializeApp({
  apiKey: "AIzaSyBzoeeiWQ8Qu9XxJdc4V1fvu1RO7VDI4xs",
  authDomain: "oxxawsm-dashboard.firebaseapp.com",
  projectId: "oxxawsm-dashboard",
  storageBucket: "oxxawsm-dashboard.appspot.com",
  messagingSenderId: "809122524558",
  appId: "1:809122524558:web:be31539cc4dd104e1308df",
  measurementId: "G-1S40ERNJK7"
});

const messaging = getMessaging(firebaseApp);

getToken(messaging)
  .then((currentToken) => {
    if (currentToken) {
      tokenString.innerHTML = 'Token is ' + currentToken;
    }
  })
  .catch(err => {
    console.log('unable to get permission', err)
  })

onMessage(payload => {
  console.log("Message received. ", payload);
  const { title, ...options } = payload.notification;
});

reportWebVitals();
