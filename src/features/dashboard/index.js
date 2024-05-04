import SubsRevenue from '../../common/Charts/SubsRevenue';
import DevicesChart from '../../common/Charts/DevicesChart';
import SubsGeoChart from '../../common/Charts/SubsGeoChart';
import SumRevenue from '../../common/Charts/SumRevenue';
import VisitGeoChart from '../../common/Charts/VisitGeoChart';
import VisitsTable from '../../common/Charts/VisitsTable';
import UserChannels from '../../common/Charts/UserChannels';
import AgeChart from '../../common/Charts/AgeChart';
import Datepicker from 'react-tailwindcss-datepicker';
import { useState } from 'react';
import FileDownloadIcon from '@mui/icons-material/FileDownload';


function Dashboard() {

    const [dateValue, setDateValue] = useState({
        startDate: new Date(),
        endDate: new Date()
    });

    const handleDatePickerValueChange = (newValue) => {
        setDateValue(newValue);
    }

    return (
        <>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                <div className=''>
                    <Datepicker
                        containerClassName='w-72'
                        value={dateValue}
                        theme={'light'}
                        inputClassName='input input-bordered w-72'
                        popoverDirection={'down'}
                        toggleClassName='invisible'
                        onChange={handleDatePickerValueChange}
                        showShortcuts={true}
                        primaryColor={'white'}
                    />
                </div>
                <div className='text-right'>
                    <button className='btn btn-ghost btn-sm normal-case  ml-2'>
                        <FileDownloadIcon className='w-4' />
                        Скачать данные
                    </button>
                </div>
            </div>
            <div className='grid lg:grid-cols-2 mt-0 grid-cols-1 gap-6'>
                <VisitsTable />
                <UserChannels />
            </div>

            <div className='grid lg:grid-cols-2 mt-2 grid-cols-1 gap-6'>
                <DevicesChart />
                <AgeChart />
            </div>

            <div className='grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6'>
                <SumRevenue />
                <SubsRevenue />
            </div>

            <div className='grid lg:grid-cols-2 mt-4 grid-cols-1 gap-6'>
                <SubsGeoChart />
                <VisitGeoChart />
            </div>
        </>
    )
}

export default Dashboard;
