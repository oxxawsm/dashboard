import SubsRevenue from './components/SubsRevenue'
import DevicesChart from './components/DevicesChart'
import SubsGeoChart from './components/SubsGeoChart'
import SumRevenue from './components/SumRevenue'
import VisitGeoChart from './components/VisitGeoChart'
import VisitsTable from './components/VisitsTable'
import UserChannels from '../analytics/components/UserChannels'
import Datepicker from "react-tailwindcss-datepicker";
import { useState } from 'react'
import FileDownloadIcon from '@mui/icons-material/FileDownload';

function Dashboard() {

    const [dateValue, setDateValue] = useState({
        startDate: new Date(),
        endDate: new Date()
    });

    const handleDatePickerValueChange = (newValue) => {
        console.log("newValue:", newValue);
        setDateValue(newValue);
    }

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="">
                    <Datepicker
                        containerClassName="w-72 "
                        value={dateValue}
                        theme={"light"}
                        inputClassName="input input-bordered w-72"
                        popoverDirection={"down"}
                        toggleClassName="invisible"
                        onChange={handleDatePickerValueChange}
                        showShortcuts={true}
                        primaryColor={"white"}
                    />
                </div>
                <div className="text-right ">
                    <button className="btn btn-ghost btn-sm normal-case  ml-2"><FileDownloadIcon className="w-4" />Скачать данные</button>
                </div>
            </div>

            <div className="grid lg:grid-cols-2 mt-0 grid-cols-1 gap-6">
                <VisitsTable />
                <UserChannels />
            </div>


            <div className="grid lg:grid-cols-2 mt-0 grid-cols-1 gap-6">
                <SumRevenue />
                <SubsRevenue />
            </div>

            <div className="grid lg:grid-cols-3 mt-4 grid-cols-1 gap-6">
                <SubsGeoChart />
                <VisitGeoChart />
                <DevicesChart />
            </div>
        </>
    )
}

export default Dashboard;
