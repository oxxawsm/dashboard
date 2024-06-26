import moment from 'moment';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TitleCard from '../../common/Cards/TitleCard'
import { openModal } from '../../slices/modalSlice'
import { getTeamContent } from '../../slices/teamSlice'
import { CONFIRMATION_MODAL_CLOSE_TYPES, MODAL_BODY_TYPES } from '../../utils/constants'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const TopSideButtons = () => {

    require('moment/locale/ru');
    moment.locale('ru');

    const dispatch = useDispatch()

    const openAddNewTeamMemberModal = () => {
        dispatch(openModal({ title: 'Добавить нового сотрудника', bodyType: MODAL_BODY_TYPES.ADD_NEW_TEAM_MEMBER }))
    }

    return (
        <div className='inline-block float-right'>
            <button className='btn px-6 btn-sm normal-case bg-violet-300 dark:bg-violet-700' onClick={() => openAddNewTeamMemberModal()}>Добавить</button>
        </div>
    )
}

function Team() {

    const { team } = useSelector(state => state.team)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTeamContent())
    }, [])

    const getPersonRole = (index) => {
        if (index % 5 === 0) return <div className='badge bg-violet-300 dark:bg-violet-700'>Владелец</div>
        else if (index % 5 === 1) return <div className='badge bg-rose-200 dark:bg-rose-600'>Админ</div>
        else if (index % 5 === 2) return <div className='badge badge-primary'>Менеджер</div>
        else return <div className='badge badge-accent'>Поддержка</div>
    }

    const deleteCurrentTeamMember = (index) => {
        dispatch(openModal({
            title: 'Удаление сотрудника из списка', bodyType: MODAL_BODY_TYPES.CONFIRMATION,
            extraObject: { message: `Точно удалить?`, type: CONFIRMATION_MODAL_CLOSE_TYPES.DELETE_TEAM_MEMBER, index }
        }))
    }

    return (
        <>
            <TitleCard title='Сотрудники' topMargin='mt-2' TopSideButtons={<TopSideButtons />}>
                <div className='overflow-x-auto w-full'>
                    <table className='table w-full'>
                        <thead>
                            <tr>
                                <th>Имя</th>
                                <th>Email</th>
                                <th>Должность</th>
                                <th>Был(а) в сети</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                team.map((label, key) => {
                                    return (
                                        <tr key={key}>
                                            <td>
                                                <div className='flex items-center space-x-3'>
                                                    <div className='avatar'>
                                                        <div className='mask mask-squircle w-12 h-12'>
                                                            <img src={label.avatar} alt='Avatar' />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <div className='font-bold'>{label.first_name}</div>
                                                        <div className='text-sm opacity-50'>{label.last_name}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{label.email}</td>
                                            <td>
                                                {label.role
                                                    ? <div className={`badge badge-primary`}>
                                                        {label.role}
                                                    </div>
                                                    : getPersonRole(key)}
                                            </td>
                                            <td>{moment(new Date()).subtract(15 * (key + 1), 'minutes').fromNow()}</td>
                                            <td>
                                                <button className='btn btn-square btn-ghost' onClick={() => deleteCurrentTeamMember(key)}>
                                                    <DeleteForeverIcon className='w-5' />
                                                </button>
                                            </td>
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

export default Team;
