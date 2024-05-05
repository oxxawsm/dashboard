import React, { lazy, useEffect } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { themeChange } from 'theme-change'
import checkAuth from './app/auth';
import initializeApp from './app/init';
import axios from 'axios';
import { useState } from 'react';

const Layout = lazy(() => import('./common/Layout'))
const Login = lazy(() => import('./pages/Login'))
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'))
const Register = lazy(() => import('./pages/Register'))

initializeApp()

const token = checkAuth();

function App() {

  useEffect(() => {
    themeChange(false)
  }, [])

  const [subscription, setSubscription] = useState(null);

 useEffect(() => {
    // Запрос на подписку на уведомления
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      navigator.serviceWorker.ready.then(registration => {
        registration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: 'BOI8zyF0w61xSry2zTtKLpCrNwPsLjzbPDiVpGnb1pWq5-BlSTVbM8RjlIBwrA4P2OBfMI-Gn0l-RtBm5ufe-NM'
        })
        .then(sub => {
          console.log('Пользователь разрешил уведомления.');
          setSubscription(sub);
          // Отправка подписки на сервер
          axios.post('http://localhost:9000/add-subscription', sub)
            .then(response => console.log(response))
            .catch(error => console.error('Ошибка при отправке подписки', error));
        })
        .catch(err => {
          console.error('Пользователь отказался от уведомлений или браузер не поддерживает', err);
        });
      });
    }

    // Подписка на клики по уведомлениям
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.addEventListener('notificationclick', event => {
        event.notification.close();
        alert('Пользователь кликнул на уведомление: ' + event.action);
      });
    }
 }, []);



  return (
    <>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
          <Route path='/register' element={<Register />} />

          <Route path='/app/*' element={<Layout />} />

          <Route path='*' element={<Navigate to={token ? '/app/dashboard' : '/login'} replace />} />

        </Routes>
      </Router>
    </>
  )
}

export default App
