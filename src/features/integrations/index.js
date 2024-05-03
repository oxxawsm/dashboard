import { useState } from "react"
import TitleCard from "../../common/Cards/TitleCard"
import { INTEGRATION_TRANSACTIONS } from "../../utils/mockedData"

function Integrations() {
    const [transactions] = useState(INTEGRATION_TRANSACTIONS)

    const getPaymentStatus = (status) => {
        if (status === "Оплачено") return <div className="badge badge-success">{status}</div>
        if (status === "Ожидает") return <div className="badge badge-warning">{status}</div>
        else return <div className="badge badge-error">{status}</div>
    }

    return (
        <>
            <TitleCard title="История оплаты интеграций" topMargin="mt-2">
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Счёт</th>
                                <th>Дата выставления счёта</th>
                                <th>Описание</th>
                                <th>Сумма</th>
                                <th>Статус</th>
                                <th>Дата оплаты</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                transactions.map((l, k) => {
                                    return (
                                        <tr key={k}>
                                            <td>{l.accountNum}</td>
                                            <td>{l.generatedOn}</td>
                                            <td>{l.description}</td>
                                            <td>${l.amount}</td>
                                            <td>{getPaymentStatus(l.status)}</td>
                                            <td>{l.date}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </TitleCard>
        </>
    )
}

export default Integrations;
