import { useDispatch, useSelector } from 'react-redux'
import Notifications from './Notifications'
import { closeRightDrawer } from '../slices/rightDrawerSlice'
import { RIGHT_DRAWER_TYPES } from '../utils/constants'
import CloseIcon from '@mui/icons-material/Close';

async function subscribe() {
    let sw = await navigator.serviceWorker.ready;
    let push = await sw.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey:
            'BJnYC4KPAP51f3wqPDxhd1BRWrd6cPHdHMUDzaF7EbOAzt-zEfQFG_1pnuNfV7J0bahVyIoI0X-H3omFiKmCqFc'
    });
    console.log(JSON.stringify(push));
}

function RightSidebar() {

    const { isOpen, bodyType, extraObject, header } = useSelector(state => state.rightDrawer)
    const dispatch = useDispatch()

    const close = (e) => {
        dispatch(closeRightDrawer(e))
    }

    return (
        <div className={' fixed overflow-hidden z-20 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out ' + (isOpen ? ' transition-opacity opacity-100 duration-500 translate-x-0  ' : ' transition-all delay-500 opacity-0 translate-x-full  ')}>
            <section className={'w-80 md:w-96  right-0 absolute bg-base-100 h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  ' + (isOpen ? ' translate-x-0 ' : ' translate-x-full ')}>
                <div className='relative  pb-5 flex flex-col  h-full'>
                    <div className='navbar flex pl-4 pr-4 shadow-md'>
                        <button className='float-left btn btn-circle btn-outline btn-sm' onClick={() => close()}>
                            <CloseIcon className='h-5 w-5' />
                        </button>
                        <span className='ml-2 font-bold text-xl'>{header}</span>
                    </div>

                    <div className='overflow-y-scroll pl-4 pr-4'>
                        <button className='btn btn-ghost bg-violet-100 dark:bg-violet-800 btn-sm normal-case mt-4'
                            onClick={() => subscribe()}
                        >
                            Оповещать
                        </button>
                        <div className='flex flex-col w-full'>
                            {
                                {
                                    [RIGHT_DRAWER_TYPES.NOTIFICATION]: <Notifications {...extraObject} closeRightDrawer={close} />,
                                    [RIGHT_DRAWER_TYPES.DEFAULT]: <div></div>
                                }[bodyType]
                            }

                        </div>
                    </div>
                </div>

            </section>

            <section className=' w-screen h-full cursor-pointer ' onClick={() => close()} ></section>
        </div>
    )
}

export default RightSidebar