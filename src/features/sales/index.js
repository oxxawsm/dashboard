import moment from 'moment'
import { useEffect, useState } from 'react'
import TitleCard from '../../common/Cards/TitleCard'
import { PAYMENTS } from '../../utils/mockedData'
import SearchBar from '../../common/Input/SearchBar'

const TopSideButtons = ({ applySearch }) => {

    const [searchText, setSearchText] = useState('')

    useEffect(() => {
        applySearch(searchText)
    }, [searchText])

    return (
        <div className='inline-block float-right'>
            <SearchBar searchText={searchText} styleClass='mr-2 w-54' setSearchText={setSearchText} />
        </div>
    )
}

function Sales() {
    const [payments, setPayments] = useState(PAYMENTS)

    const applySearch = (value) => {
        let filteredTransactions = PAYMENTS.filter((payment) => {
            return payment.subscription.toLowerCase().includes(value.toLowerCase())
                || payment.email.toLowerCase().includes(value.toLowerCase())
                || payment.location.toLowerCase().includes(value.toLowerCase())
                || payment.userId.includes(value)
        })
        setPayments(filteredTransactions)
    }

    return (
        <>

            <TitleCard title='Продажи' topMargin='mt-2' TopSideButtons={<TopSideButtons applySearch={applySearch} />}>
                <div className='overflow-x-auto w-full'>
                    <table className='table w-full'>
                        <thead>
                            <tr>
                                <th>userId</th>
                                <th>Email</th>
                                <th>Локация</th>
                                <th>Подписка</th>
                                <th>Сумма</th>
                                <th>Дата покупки</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                payments.map((label, key) => {
                                    return (
                                        <tr key={key}>
                                            <td>{label.userId}</td>
                                            <td>{label.email}</td>
                                            <td>{label.location}</td>
                                            <td>{label.subscription}</td>
                                            <td>{label.amount} ₽</td>
                                            <td>{moment(label.date).format('D MMM')}</td>
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

export default Sales;
