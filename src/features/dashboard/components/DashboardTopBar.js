import ArrowDownTrayIcon from '@heroicons/react/24/outline/ArrowDownTrayIcon'
import { useState } from "react"
import Datepicker from "react-tailwindcss-datepicker";


export const periodOptions = [
    { name: "Today", value: "TODAY" },
    { name: "Yesterday", value: "YESTERDAY" },
    { name: "This Week", value: "THIS_WEEK" },
    { name: "Last Week", value: "LAST_WEEK" },
    { name: "This Month", value: "THIS_MONTH" },
    { name: "Last Month", value: "LAST_MONTH" },
]

function DashboardTopBar({ updateDashboardPeriod }) {

    const [dateValue, setDateValue] = useState({
        startDate: new Date(),
        endDate: new Date()
    });

    const handleDatePickerValueChange = (newValue) => {
        console.log("newValue:", newValue);
        setDateValue(newValue);
        updateDashboardPeriod(newValue)
    }

    return (
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
                <button className="btn btn-ghost btn-sm normal-case  ml-2"><ArrowDownTrayIcon className="w-4" />Скачать данные</button>
            </div>
        </div>
    )
}

export default DashboardTopBar