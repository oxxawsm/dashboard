import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../slices/headerSlice'
import Analytics from '../../features/analytics'

function InternalPage() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title: 'Сводка' }))
    }, [])

    return (
        <Analytics />
    )
}

export default InternalPage