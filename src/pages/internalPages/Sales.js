import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../slices/headerSlice'
import Sales from '../../features/sales'

function InternalPage() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title: 'Продажи' }))
    }, [])


    return (
        <Sales />
    )
}

export default InternalPage;
