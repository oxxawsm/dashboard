import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Dashboard from '../../features/dashboard'
import { setPageTitle } from '../../slices/headerSlice'

function InternalPage() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title: "Главная" }))
    }, [])


    return (
        <Dashboard />
    )
}

export default InternalPage