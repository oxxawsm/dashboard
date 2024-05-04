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
            <SearchBar searchText={searchText} styleClass='mr-2 w-72' setSearchText={setSearchText} />
        </div>
    )
}

function Sales() {
    const [trans, setTrans] = useState(PAYMENTS)

    const applySearch = (value) => {
        let filteredTransactions = PAYMENTS.filter((t) => { return t.email.toLowerCase().includes(value.toLowerCase()) || t.email.toLowerCase().includes(value.toLowerCase()) })
        setTrans(filteredTransactions)
    }

    return (
        <>

            <TitleCard title='Продажи' topMargin='mt-2' TopSideButtons={<TopSideButtons applySearch={applySearch} />}>
                <div className='overflow-x-auto w-full'>
                    <table className='table w-full'>
                        <thead>
                            <tr>
                                <th>Email</th>
                                <th>Локация</th>
                                <th>Подписка</th>
                                <th>Сумма</th>
                                <th>Дата покупки</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                trans.map((l, k) => {
                                    return (
                                        <tr key={k}>
                                            <td>{l.email}</td>
                                            <td>{l.location}</td>
                                            <td>{l.subscription}</td>
                                            <td>${l.amount}</td>
                                            <td>{moment(l.date).format('D MMM')}</td>
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
