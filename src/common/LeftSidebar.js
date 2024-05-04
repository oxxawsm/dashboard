import routes from '../routes/sidebar'
import { NavLink, Link, useLocation } from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close';

function LeftSidebar() {
    const location = useLocation();

    const close = (e) => {
        document.getElementById('left-sidebar').click()
    }

    return (
        <div className='drawer-side z-30'>
            <label htmlFor='left-sidebar' className='drawer-overlay'></label>
            <ul className='menu pt-2 w-64 bg-base-300 min-h-full text-base-content'>
                <button className='btn btn-ghost bg-base-300 z-50 top-0 right-0 mt-3 mr-2 absolute lg:hidden' onClick={() => close()}>
                    <CloseIcon className='h-5 inline-block w-5' />
                </button>
                <li className='mb-2 font-semibold text-xl'>
                    <Link to={'/app/dashboard'}><img className='w-10' src='/logo.png' alt='Logo' />DashBoard</Link>
                </li>

                {
                    routes.map((route, k) => {
                        return (
                            <button onClick={() => close()}>
                                <li className='' key={k}>
                                    <NavLink
                                        end
                                        to={route.path}
                                        className={({ isActive }) => `${isActive ? 'font-semibold  bg-base-200' : 'font-normal'}`} >
                                        {route.icon} {route.name}
                                        {
                                            location.pathname === route.path ? (<span className='absolute inset-y-0 left-0 w-1 rounded-tr-md rounded-br-md bg-primary '
                                                aria-hidden='true'></span>) : null
                                        }
                                    </NavLink>

                                </li>
                            </button>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default LeftSidebar