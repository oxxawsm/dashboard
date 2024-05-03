import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import ErrorText from '../../common/Typography/ErrorText'
import InputText from '../../common/Input/InputText'
import InsertLinkIcon from '@mui/icons-material/InsertLink';

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
                    {!linkSent && (<h2 className='text-2xl font-semibold mb-2 text-center'>Если забыли пароль</h2>)}

                    {
                        linkSent &&
                        <>
                            <div className='text-center mt-8'><img className='inline-block w-24 text-success' src='https://cdn.onlinewebfonts.com/svg/img_516697.png' /></div>
                            <p className='mt-4 mb-10 font-semibold text-center'>Отправили ссылку для сброса пароля, проверьте свою почту</p>
                            <div className='text-center mt-4'><Link to="/login"><button className="btn btn-block btn-primary ">Вход</button></Link></div>

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