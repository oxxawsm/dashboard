import TitleCard from "../../../common/Cards/TitleCard"

const userSourceData = [
    { source: "Яндекс Директ", count: "26,345", conversionPercent: 10.2 },
    { source: "Sber Ads", count: "21,341", conversionPercent: 11.7 },
    { source: "Telegram Ads", count: "34,379", conversionPercent: 12.4 },
    { source: "YouTube", count: "12,359", conversionPercent: 20.9 },
    { source: "VK", count: "10,345", conversionPercent: 10.3 },
    { source: "Дзен", count: "7,938", conversionPercent: 10.3 },
    { source: "Пикабу", count: "7,938", conversionPercent: 10.3 },
]

function UserChannels() {
    return (
        <TitleCard title={"Источники прихода пользователей"}>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th className="normal-case">Источник</th>
                            <th className="normal-case">Количество пользователей</th>
                            <th className="normal-case">Конверсия</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userSourceData.map((user, key) => {
                                return (
                                    <tr key={key}>
                                        <th>{key + 1}</th>
                                        <td>{user.source}</td>
                                        <td>{user.count}</td>
                                        <td>{`${user.conversionPercent}%`}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </TitleCard>
    )
}

export default UserChannels