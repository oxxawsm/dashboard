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

function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('service-worker.js', { scope: '.' }).then(() => {
        console.log('Service Worker registered successfully.');
      }).catch(error => {
        console.log('Service Worker registration failed:', error);
      });
    }
}

serviceWorkerRegistration.register();

reportWebVitals();
