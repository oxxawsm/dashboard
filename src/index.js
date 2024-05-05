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

let installPrompt = null;
const installButton = document.querySelector("#install");

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  installPrompt = event;
  installButton.removeAttribute("hidden");
});

installButton.addEventListener("click", async () => {
  if (!installPrompt) {
    return;
  }
  const result = await installPrompt.prompt();
  console.log(`Install prompt was: ${result.outcome}`);
  disableInAppInstallPrompt();
});

function disableInAppInstallPrompt() {
  installPrompt = null;
  installButton.setAttribute("hidden", "");
}

window.addEventListener("appinstalled", () => {
  disableInAppInstallPrompt();
});

reportWebVitals();
