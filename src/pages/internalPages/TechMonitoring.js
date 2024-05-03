import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../slices/headerSlice'
import TechMonitoring from '../../features/tech-monitoring'

function InternalPage() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title: "Технические отчёты" }))
    }, [])


    return (
        <TechMonitoring />
    )
}

export default InternalPage;
