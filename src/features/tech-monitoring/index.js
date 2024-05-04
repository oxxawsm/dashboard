import DynamicMonitorChart from '../../common/Charts/DynamicMonitorChart';
import DashboardStats from '../analytics/components/Statistics';
import { ERRORS_DATA } from '../../utils/mockedData';
import { useState } from 'react';

function TechMonitoring() {

    const [errorsData] = useState(ERRORS_DATA);

    return (
        <>
            <div className='grid lg:grid-cols-5 mt-2 md:grid-cols-2 grid-cols-1 gap-6'>
                {
                    errorsData.map((data, key) => {
                        return (
                            <DashboardStats key={key} {...data} colorIndex={key} />
                        )
                    })
                }
            </div>
            <div className='mt-4'>
                <DynamicMonitorChart />
            </div>
        </>
    )
}

export default TechMonitoring;
