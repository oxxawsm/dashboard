import { useState } from 'react'
import { useDispatch } from 'react-redux'
import InputText from './Input/InputText'
import ErrorText from './Typography/ErrorText'
import { showNotification } from '../slices/headerSlice'
import { addNewTeamMember } from '../slices/teamSlice'

const TEAM_OBJ = {
    first_name: '',
    last_name: '',
    email: '',
    role: ''
}

function AddTeamMemberModal({ closeModal }) {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [teamObj, setTeamObj] = useState(TEAM_OBJ)


    const saveNewLead = () => {
        if (teamObj.first_name.trim() === '') return setErrorMessage('Введите имя')
        else if (teamObj.last_name.trim() === '') return setErrorMessage('Введите фамилию')
        else if (teamObj.email.trim() === '') return setErrorMessage('Введите Email')
        else if (teamObj.role.trim() === '') return setErrorMessage('У нового члена команды должна быть должность')
        else {
            let newTeamObj = {
                'id': 7,
                'email': teamObj.email,
                'first_name': teamObj.first_name,
                'last_name': teamObj.last_name,
                'avatar': 'https://reqres.in/img/faces/2-image.jpg',
                'role': teamObj.role
            }
            dispatch(addNewTeamMember({ newTeamObj }))
            dispatch(showNotification({ message: 'Новый сотрудник добавлен', status: 1 }))
            closeModal()
        }
    }

    const updateFormValue = ({ updateType, value }) => {
        setErrorMessage('')
        setTeamObj({ ...teamObj, [updateType]: value })
    }

    return (
        <>
            <InputText
                type='text'
                defaultValue={teamObj.first_name}
                updateType='first_name'
                containerStyle='mt-4'
                labelTitle='Имя'
                updateFormValue={updateFormValue}
            />
            <InputText
                type='text'
                defaultValue={teamObj.last_name}
                updateType='last_name'
                containerStyle='mt-4'
                labelTitle='Фамилия'
                updateFormValue={updateFormValue}
            />
            <InputText
                type='email'
                defaultValue={teamObj.email}
                updateType='email'
                containerStyle='mt-4'
                labelTitle='Email'
                updateFormValue={updateFormValue}
            />
            <InputText
                type='role'
                defaultValue={teamObj.role}
                updateType='role'
                containerStyle='mt-4'
                labelTitle='Должность'
                updateFormValue={updateFormValue}
            />

            <ErrorText styleClass='mt-16'>{errorMessage}</ErrorText>

            <div className='modal-action'>
                <button className='btn btn-ghost' onClick={() => closeModal()}>Отмена</button>
                <button className='btn bg-violet-300 dark:bg-violet-700 hover:bg-violet-400 px-6' onClick={() => saveNewLead()}>Готово</button>
            </div>
        </>
    )
}

export default AddTeamMemberModal;