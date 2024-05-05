import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './app/store'
import { Provider } from 'react-redux'
import Loading from './common/Loading';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

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

if ('serviceWorker' in navigator && 'PushManager' in window) {
  window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();

      const deferredPrompt = e;

      const installButton = document.createElement('button');
      installButton.textContent = 'Install App';
      installButton.style.position = 'fixed';
      installButton.style.top = '10px';
      installButton.style.left = '50%';
      installButton.style.transform = 'translateX(-50%)';
      installButton.style.zIndex = '9999';
      installButton.style.padding = '10px 20px';
      installButton.classList.add('btn-grad');
      installButton.style.color = 'white';
      installButton.style.border = 'none';
      installButton.style.borderRadius = '5px';
      installButton.style.cursor = 'pointer';

      installButton.addEventListener('click', () => {

          deferredPrompt.prompt();

          deferredPrompt.userChoice.then(choiceResult => {
              if (choiceResult.outcome === 'accepted') {
                  console.log('App installed');
              } else {
                  console.log('App installation declined');
              }

              installButton.style.display = 'none';
          });
      });

      document.body.appendChild(installButton);
  });
}

reportWebVitals();
