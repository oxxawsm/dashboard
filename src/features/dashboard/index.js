import DashboardStats from './components/DashboardStats'
import UserGroupIcon  from '@heroicons/react/24/outline/UserGroupIcon'
import UsersIcon  from '@heroicons/react/24/outline/UsersIcon'
import CircleStackIcon  from '@heroicons/react/24/outline/CircleStackIcon'
import CreditCardIcon  from '@heroicons/react/24/outline/CreditCardIcon'
import UserChannels from './components/UserChannels'
import LineChart from './components/LineChart'
import BarChart from './components/BarChart'
import DashboardTopBar from './components/DashboardTopBar'
import { useDispatch } from 'react-redux'
import { showNotification } from '../common/headerSlice'
import DoughnutChart from './components/DoughnutChart'

const statsData = [
    {title : "New Users", value : "34.7k", icon : <UserGroupIcon className='w-8 h-8'/>, description : "↗︎ 2300 (22%)"},
    {title : "Total Sales", value : "$34,545", icon : <CreditCardIcon className='w-8 h-8'/>, description : "Current month"},
    {title : "Pending Leads", value : "450", icon : <CircleStackIcon className='w-8 h-8'/>, description : "50 in hot leads"},
    {title : "Active Users", value : "5.6k", icon : <UsersIcon className='w-8 h-8'/>, description : "↙ 300 (18%)"},
]

function Dashboard(){
    const dispatch = useDispatch()
 
    const updateDashboardPeriod = (newRange) => {
        dispatch(showNotification({message : `Period updated to ${newRange.startDate} to ${newRange.endDate}`, status : 1}))
    }

    return(
        <>
            <DashboardTopBar updateDashboardPeriod={updateDashboardPeriod}/>
        
            <div className="grid lg:grid-cols-4 mt-2 md:grid-cols-2 grid-cols-1 gap-6">
                {
                    statsData.map((data, key) => {
                        return (
                            <DashboardStats key={key} {...data} colorIndex={key}/>
                        )
                    })
                }
            </div>

            <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
                <LineChart />
                <BarChart />
            </div>
        
            <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
                <UserChannels />
                <DoughnutChart />
            </div>
        </>
    )
}

export default Dashboard