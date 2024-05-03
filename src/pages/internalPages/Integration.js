import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../slices/headerSlice'
import Integrations from '../../features/integrations'

function InternalPage() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title: "Интеграции" }))
    }, [])

    return (
        <Integrations />
    )
}

export default InternalPage;
