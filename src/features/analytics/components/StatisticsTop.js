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

function StatisticsTop({ updatePeriod}) {

    const [dateValue, setDateValue] = useState({
        startDate: new Date(),
        endDate: new Date()
    });

    const handleDatePickerValueChange = (newValue) => {
        setDateValue(newValue);
        updatePeriod(newValue)
    }

    return (
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
    )
}

export default StatisticsTop;
