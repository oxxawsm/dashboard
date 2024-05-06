import { themeChange } from 'theme-change'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { openRightDrawer } from '../slices/rightDrawerSlice';
import { RIGHT_DRAWER_TYPES } from '../utils/constants'

import { Link } from 'react-router-dom'

function Header() {

    const dispatch = useDispatch()
    const { noOfNotifications, pageTitle } = useSelector(state => state.header)
    const [currentTheme, setCurrentTheme] = useState(localStorage.getItem('theme'))

    useEffect(() => {
        themeChange(false)
        if (currentTheme === null) {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                setCurrentTheme('dark')
            } else {
                setCurrentTheme('light')
            }
        }
    }, [])

    const openNotification = () => {
        dispatch(openRightDrawer({ header: 'Уведомления', bodyType: RIGHT_DRAWER_TYPES.NOTIFICATION }))
    }

    function logoutUser() {
        localStorage.clear();
        window.location.href = '/'
    }

    return (
        <>
            <div className='navbar sticky top-0 bg-base-200 z-10 shadow-md'>
                <div className='flex-1'>
                    <label htmlFor='left-sidebar' className='btn drawer-button lg:hidden bg-violet-300 dark:bg-violet-700 w-12'>
                        <MenuIcon className='h-5 inline-block w-5' />
                    </label>
                    <h1 className='text-2xl font-semibold ml-2'>{pageTitle}</h1>
                </div>

                <div className='flex-none '>
                    <label className='swap'>
                        <input type='checkbox' />
                        <LightModeIcon data-set-theme='light' data-act-class='ACTIVECLASS' className={'fill-current w-6 h-6 ' + (currentTheme === 'dark' ? 'swap-on' : 'swap-off')} />
                        <DarkModeIcon data-set-theme='dark' data-act-class='ACTIVECLASS' className={'fill-current w-6 h-6 ' + (currentTheme === 'light' ? 'swap-on' : 'swap-off')} />
                    </label>

                    <button className='btn btn-ghost ml-4 btn-circle' onClick={() => openNotification()}>
                        <div className='indicator'>
                            <NotificationsIcon />
                            {noOfNotifications > 0 ? <span className='indicator-item badge bg-violet-300 dark:bg-violet-700 badge-sm'>{noOfNotifications}</span> : null}
                        </div>
                    </button>

                    <div className='dropdown dropdown-end ml-4'>
                        <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
                            <div className='w-10 mask mask-squircle'>
                                <img src='/profile.png' alt='profile' />
                            </div>
                        </label>
                        <ul tabIndex={0} className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'>
                            <li className='justify-between'>
                                <Link to={'/app/settings-profile'}>
                                    Настройки профиля
                                </Link>
                            </li>
                            <div className='divider mt-0 mb-0 '></div>
                            <li><a onClick={logoutUser}>Выход</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header