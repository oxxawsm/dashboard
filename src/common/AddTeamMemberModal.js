import { useState } from 'react'
import { useDispatch } from 'react-redux'
import InputText from './Input/InputText'
import ErrorText from './Typography/ErrorText'
import { showNotification } from '../slices/headerSlice'
import { addNewTeamMember } from '../slices/teamSlice'

// подумать, как добавить должность
const INITIAL_LEAD_OBJ = {
    first_name: '',
    last_name: '',
    email: '',
}

function AddTeamMemberModal({ closeModal }) {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [leadObj, setLeadObj] = useState(INITIAL_LEAD_OBJ)


    const saveNewLead = () => {
        if (leadObj.first_name.trim() === '') return setErrorMessage('Введите имя')
        else if (leadObj.email.trim() === '') return setErrorMessage('Введите фамилию')
        else {
            let newLeadObj = {
                'id': 7,
                'email': leadObj.email,
                'first_name': leadObj.first_name,
                'last_name': leadObj.last_name,
                'avatar': 'https://reqres.in/img/faces/1-image.jpg'
            }
            dispatch(addNewTeamMember({ newLeadObj }))
            dispatch(showNotification({ message: 'Новый сотрудник добавлен', status: 1 }))
            closeModal()
        }
    }

    const updateFormValue = ({ updateType, value }) => {
        setErrorMessage('')
        setLeadObj({ ...leadObj, [updateType]: value })
    }

    return (
        <>
            <InputText type='text' defaultValue={leadObj.first_name} updateType='first_name' containerStyle='mt-4' labelTitle='Имя' updateFormValue={updateFormValue} />
            <InputText type='text' defaultValue={leadObj.last_name} updateType='last_name' containerStyle='mt-4' labelTitle='Фамилия' updateFormValue={updateFormValue} />
            <InputText type='email' defaultValue={leadObj.email} updateType='email' containerStyle='mt-4' labelTitle='Email' updateFormValue={updateFormValue} />
            <ErrorText styleClass='mt-16'>{errorMessage}</ErrorText>
            <div className='modal-action'>
                <button className='btn btn-ghost' onClick={() => closeModal()}>Отмена</button>
                <button className='btn bg-violet-400 px-6' onClick={() => saveNewLead()}>Готово</button>
            </div>
        </>
    )
}

export default AddTeamMemberModal;