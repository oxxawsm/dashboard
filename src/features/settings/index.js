import { useDispatch } from 'react-redux'
import TitleCard from '../../common/Cards/TitleCard'
import { showNotification } from '../../slices/headerSlice'
import InputText from '../../common/Input/InputText'
import TextAreaInput from '../../common/Input/TextAreaInput'

function ProfileSettings() {

    const dispatch = useDispatch()

    const updateProfile = () => {
        dispatch(showNotification({ message: 'Данные обновлены', status: 1 }))
    }

    const updateFormValue = ({ updateType }) => {
        console.log(updateType)
    }

    return (
        <>
            <TitleCard title='Настройки профиля' topMargin='mt-2'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <InputText labelTitle='Имя пользователя' defaultValue='Елена Титенко' updateFormValue={updateFormValue} />
                    <InputText labelTitle='Email' defaultValue='ellena.titenko@gmail.com' updateFormValue={updateFormValue} />
                    <InputText labelTitle='Должность' defaultValue='Frontend-разработчик' updateFormValue={updateFormValue} />
                    <InputText labelTitle='Локация' defaultValue='Санкт-Петербург' updateFormValue={updateFormValue} />
                    <TextAreaInput labelTitle='О себе' defaultValue='Frontend-разработчица и гитаристка' updateFormValue={updateFormValue} />
                </div>
                <div className='divider' ></div>
                <div className='mt-16'><button className='btn bg-violet-300 dark:bg-violet-700 hover:bg-violet-400 float-right' onClick={() => updateProfile()}>Обновить профиль</button></div>
            </TitleCard>
        </>
    )
}

export default ProfileSettings