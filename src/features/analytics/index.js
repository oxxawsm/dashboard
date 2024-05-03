import DashboardStats from './components/Statistics'
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import UserChannels from './components/UserChannels'
import MonthActivity from '../dashboard/components/MonthActivity';
import SubsRevenue from '../dashboard/components/SubsRevenue';
import StatisticsTop from './components/StatisticsTop';
import { useDispatch } from 'react-redux'
import { showNotification } from '../../slices/headerSlice'

const statData = [
    { title: "Продажи", value: "460 683 ₽", icon: <MonetizationOnIcon className='w-10 h-10' />, description: "В этом месяце" },
    { title: "Все пользователи", value: "6,3 тыс.", icon: <PeopleAltIcon className='w-8 h-8' />, description: "За всё время" },
    { title: "Новые пользователи", value: "1,7 тыс.", icon: <GroupAddIcon className='w-8 h-8' />, description: "↗︎ 160 (22%)" },
    { title: "Активные пользователи", value: "3,9 тыс.", icon: <SensorOccupiedIcon className='w-8 h-8' />, description: "↙ 100 (18%)" },
]

function Analytics() {
    const dispatch = useDispatch()

    const updatePeriod = (newRange) => {
        dispatch(showNotification({ message: `Period updated to ${newRange.startDate} to ${newRange.endDate}`, status: 1 }))
    }

    return (
        <>
            <StatisticsTop updateDashboardPeriod={updatePeriod} />

            <div className="grid lg:grid-cols-4 mt-2 md:grid-cols-2 grid-cols-1 gap-6">
                {
                    statData.map((data, key) => {
                        return (
                            <DashboardStats key={key} {...data} colorIndex={key} />
                        )
                    })
                }
            </div>
            <div className="grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6">
                <MonthActivity />
                <UserChannels />
            </div>
            <SubsRevenue />
        </>
    )
}

export default Analytics;