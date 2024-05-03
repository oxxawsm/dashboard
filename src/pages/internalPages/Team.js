import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../slices/headerSlice'
import Team from '../../features/team'

function InternalPage() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title: "Команда" }))
    }, [])


    return (
        <Team />
    )
}

export default InternalPage