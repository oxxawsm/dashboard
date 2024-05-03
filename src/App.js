import React, { lazy, useEffect } from 'react'
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { themeChange } from 'theme-change'
import checkAuth from './app/auth';
import initializeApp from './app/init';

const Layout = lazy(() => import('./common/Layout'))
const Login = lazy(() => import('./pages/Login'))
const ForgotPassword = lazy(() => import('./pages/ForgotPassword'))
const Register = lazy(() => import('./pages/Register'))

initializeApp()

const token = checkAuth() // Check for login and initialize axios

function App() {

  useEffect(() => {
    themeChange(false)
  }, [])


  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/register" element={<Register />} />

          <Route path="/app/*" element={<Layout />} />

          <Route path="*" element={<Navigate to={token ? "/app/dashboard" : "/login"} replace />} />

        </Routes>
      </Router>
    </>
  )
}

export default App
