import DynamicMonitorChart from '../dashboard/components/DynamicMonitorChart';
import DashboardStats from '../analytics/components/Statistics';

function TechMonitoring() {

    const errorsData = [
        { title: "Ошибки", value: "114", description: "↙ 18%" },
        { title: "Краши", value: "385", description: "↙ 6%" },
    ]

    return (
        <>
            <div className="grid lg:grid-cols-5 mt-2 md:grid-cols-2 grid-cols-1 gap-6">
                {
                    errorsData.map((data, key) => {
                        return (
                            <DashboardStats key={key} {...data} colorIndex={key} />
                        )
                    })
                }
            </div>
            <DynamicMonitorChart />
        </>
    )
}

export default TechMonitoring;
