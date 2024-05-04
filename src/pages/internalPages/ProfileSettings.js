import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../slices/headerSlice'
import ProfileSettings from '../../features/settings'

function InternalPage() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title: 'Настройки профиля' }))
    }, [])


    return (
        <ProfileSettings />
    )
}

export default InternalPage;
