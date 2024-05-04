import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import ErrorText from '../../common/Typography/ErrorText'
import InputText from '../../common/Input/InputText'

function Register() {

    const INITIAL_REGISTER_OBJ = {
        name: '',
        password: '',
        email: ''
    }

    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [registerObj, setRegisterObj] = useState(INITIAL_REGISTER_OBJ)

    const submitForm = (e) => {
        e.preventDefault()
        setErrorMessage('')

        if (registerObj.name.trim() === '') return setErrorMessage('Пожалуйста, введите имя пользователя')
        if (registerObj.email.trim() === '') return setErrorMessage('Пожалуйста, введите Email')
        if (registerObj.password.trim() === '') return setErrorMessage('Пожалуйста, введите пароль')
        else {
            setLoading(true)
            localStorage.setItem('token', 'loginToken')
            setLoading(false)
            window.location.href = '/app/dashboard'
        }
    }

    const updateFormValue = ({ updateType, value }) => {
        setErrorMessage('')
        setRegisterObj({ ...registerObj, [updateType]: value })
    }

    return (
        <div className='min-h-screen bg-base-200 flex items-center'>
            <div className='card mx-auto w-full max-w-2xl'>
                <div className='py-24 px-10'>
                    <h2 className='text-2xl font-semibold mb-2 text-center'>Регистрация</h2>
                    <form onSubmit={(e) => submitForm(e)}>

                        <div className='mb-4'>

                            <InputText defaultValue={registerObj.name} updateType='name' containerStyle='mt-4' labelTitle='Имя пользователя' updateFormValue={updateFormValue} />

                            <InputText defaultValue={registerObj.email} updateType='email' containerStyle='mt-4' labelTitle='Email' updateFormValue={updateFormValue} />

                            <InputText defaultValue={registerObj.password} type='password' updateType='password' containerStyle='mt-4' labelTitle='Пароль' updateFormValue={updateFormValue} />

                        </div>

                        <ErrorText styleClass='mt-8'>{errorMessage}</ErrorText>
                        <button type='submit' className={'btn mt-2 w-full btn-primary' + (loading ? ' loading' : '')}>Зарегистрироваться</button>

                        <div className='text-center mt-4'>Уже есть аккаунт? <Link to='/login'><span className='  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200'>Вход</span></Link></div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register