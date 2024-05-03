import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import ErrorText from '../../components/Typography/ErrorText'
import InputText from '../../components/Input/InputText'
import CheckCircleIcon from '@heroicons/react/24/solid/CheckCircleIcon'

function ForgotPassword() {

    const INITIAL_USER_OBJ = {
        email: ""
    }

    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [linkSent, setLinkSent] = useState(false)
    const [userObj, setUserObj] = useState(INITIAL_USER_OBJ)

    const submitForm = (e) => {
        e.preventDefault()
        setErrorMessage("")

        if (userObj.email.trim() === "") return setErrorMessage("Пожалуйста, введите Email")
        else {
            setLoading(true)
            // Call API to send password reset link
            setLoading(false)
            setLinkSent(true)
        }
    }

    const updateFormValue = ({ updateType, value }) => {
        setErrorMessage("")
        setUserObj({ ...userObj, [updateType]: value })
    }

    return (
        <div className="min-h-screen bg-base-200 flex items-center">
            <div className="card mx-auto w-full max-w-xl">
                <div className='py-24 px-10'>
                    <h2 className='text-2xl font-semibold mb-2 text-center'>Если забыли пароль</h2>

                    {
                        linkSent &&
                        <>
                            <div className='text-center mt-8'><CheckCircleIcon className='inline-block w-32 text-success' /></div>
                            <p className='my-4 text-xl font-bold text-center'>Link Sent</p>
                            <p className='mt-4 mb-8 font-semibold text-center'>Check your email to reset password</p>
                            <div className='text-center mt-4'><Link to="/login"><button className="btn btn-block btn-primary ">Login</button></Link></div>

                        </>
                    }

                    {
                        !linkSent &&
                        <>
                            <p className='my-8 font-semibold text-center'>Мы отправим ссылку для сброса пароля на Ваш Email</p>
                            <form onSubmit={(e) => submitForm(e)}>

                                <div className="mb-4">

                                    <InputText
                                        type="email"
                                        defaultValue={userObj.email}
                                        updateType="email"
                                        containerStyle="mt-4"
                                        labelTitle="Email"
                                        updateFormValue={updateFormValue}
                                    />
                                </div>

                                <ErrorText styleClass="mt-12">{errorMessage}</ErrorText>
                                <button
                                    type="submit"
                                    className={"btn mt-2 w-full btn-primary" + (loading ? " loading" : "")}
                                >
                                    Сбросить пароль
                                </button>

                                <div className='text-center mt-4'>Ещё нет аккаунта? <Link to="/register"><button className="  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">Зарегистрироваться</button></Link></div>
                            </form>
                        </>
                    }

                </div>
            </div>
        </div>
    )
}

export default ForgotPassword