import { useState } from 'react'
import Datepicker from 'react-tailwindcss-datepicker';

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
        <div>
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
    )
}

export default StatisticsTop;
