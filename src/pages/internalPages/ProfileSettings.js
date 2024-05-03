import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../slices/headerSlice'
import ProfileSettings from '../../features/profileSettings'

function InternalPage() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title: "Settings" }))
    }, [])


    return (
        <ProfileSettings />
    )
}

export default InternalPage