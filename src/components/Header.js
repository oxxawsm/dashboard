import { themeChange } from 'theme-change'
import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { openRightDrawer } from '../features/common/rightDrawerSlice';
import { RIGHT_DRAWER_TYPES } from '../utils/globalConstantUtil'

import { Link } from 'react-router-dom'


function Header() {

    const dispatch = useDispatch()
    const { noOfNotifications, pageTitle } = useSelector(state => state.header)
    const [currentTheme, setCurrentTheme] = useState(localStorage.getItem("theme"))

    useEffect(() => {
        themeChange(false)
        if (currentTheme === null) {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
                setCurrentTheme("light")
            } else {
                setCurrentTheme("dark")
            }
        }
    }, [])


    // Opening right sidebar for notification
    const openNotification = () => {
        dispatch(openRightDrawer({ header: "Уведомления", bodyType: RIGHT_DRAWER_TYPES.NOTIFICATION }))
    }

    function logoutUser() {
        localStorage.clear();
        window.location.href = '/'
    }

    return (
        <>
            <div className="navbar sticky top-0 bg-base-100 z-10 shadow-md ">
                <div className="flex-1">
                    <label htmlFor="left-sidebar-drawer" className="btn drawer-button lg:hidden">
                        <MenuIcon className="h-5 inline-block w-5" />
                    </label>
                    <h1 className="text-2xl font-semibold ml-2">{pageTitle}</h1>
                </div>

                <div className="flex-none ">
                    <label className="swap">
                        <input type="checkbox" />
                        <LightModeIcon data-set-theme="light" data-act-class="ACTIVECLASS" className={"fill-current w-6 h-6 " + (currentTheme === "dark" ? "swap-on" : "swap-off")} />
                        <DarkModeIcon data-set-theme="dark" data-act-class="ACTIVECLASS" className={"fill-current w-6 h-6 " + (currentTheme === "light" ? "swap-on" : "swap-off")} />
                    </label>

                    <button className="btn btn-ghost ml-4  btn-circle" onClick={() => openNotification()}>
                        <div className="indicator">
                            <NotificationsIcon />
                            {noOfNotifications > 0 ? <span className="indicator-item badge badge-secondary badge-sm">{noOfNotifications}</span> : null}
                        </div>
                    </button>

                    <div className="dropdown dropdown-end ml-4">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                {/* сюда бы своё фото */}
                                <img src="https://placeimg.com/80/80/people" alt="profile" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li className="justify-between">
                                <Link to={'/app/settings-profile'}>
                                    Настройки профиля
                                </Link>
                            </li>
                            <div className="divider mt-0 mb-0"></div>
                            <li><a onClick={logoutUser}>Выход</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header