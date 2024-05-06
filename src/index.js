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

if ('serviceWorker' in navigator) {
  addEventListener('load', async () => {
      let sw = await navigator.serviceWorker.register('/service-worker.js');
      console.log(sw);
  });
}


reportWebVitals();
