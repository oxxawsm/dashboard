import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../slices/headerSlice'

function InternalPage() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title: "" }))
    }, [])

    return (
        <div className="hero h-4/5 bg-base-200">
            <div className="hero-content text-purple-600 text-center">
                <div className="max-w-md">
                    <img src='/error-404.png' />
                    <h1 className="text-7xl font-bold mb-6">404</h1>
                    <h2 className="text-3xl font-bold">Ничего не найдено по такому адресу!</h2>
                </div>
            </div>
        </div>
    )
}

export default InternalPage