import TitleCard from '../Cards/TitleCard';
import { USERS_SOURCE_DATA } from '../../utils/mockedData';

function UserChannels() {
    return (
        <TitleCard title={'Источники'}>
            <div className='overflow-x-auto'>
                <table className='table w-full'>
                    <thead>
                        <tr>
                            <th></th>
                            <th className='normal-case'>Источник</th>
                            <th className='normal-case'>Количество пользователей</th>
                            <th className='normal-case'>Конверсия</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            USERS_SOURCE_DATA.map((user, key) => {
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