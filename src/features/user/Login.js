import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import ErrorText from '../../components/Typography/ErrorText'
import InputText from '../../components/Input/InputText'

function Login() {

    const INITIAL_LOGIN_OBJ = {
        password: "",
        email: ""
    }

    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [loginObj, setLoginObj] = useState(INITIAL_LOGIN_OBJ)

    const submitForm = (e) => {
        e.preventDefault()
        setErrorMessage("")

        if (loginObj.email.trim() === "" || loginObj.password.trim() === "" ) return setErrorMessage("Неправильный Email или пароль")
        else {
            setLoading(true)
            // Call API to check user credentials and save token in localstorage
            localStorage.setItem("token", "DumyTokenHere")
            setLoading(false)
            window.location.href = '/app/welcome'
        }
    }

    const updateFormValue = ({ updateType, value }) => {
        setErrorMessage("")
        setLoginObj({ ...loginObj, [updateType]: value })
    }

    return (
        <div className="min-h-screen bg-base-200 flex items-center">
            <div className="card mx-auto w-full max-w-2xl">
                <div className='py-24 px-10'>
                    <h2 className='text-2xl font-semibold mb-2 text-center'>Авторизация</h2>

                    <form onSubmit={(e) => submitForm(e)}>
                        <div className="mb-4">
                            <InputText
                                type="email"
                                defaultValue={loginObj.email}
                                updateType="email"
                                containerStyle="mt-4"
                                labelTitle="Электронная почта"
                                updateFormValue={updateFormValue}
                            />
                            <InputText
                                defaultValue={loginObj.password}
                                type="password"
                                updateType="password"
                                containerStyle="mt-4"
                                labelTitle="Пароль"
                                updateFormValue={updateFormValue}
                            />
                        </div>

                        <div className='text-right text-primary'>
                            <Link to="/forgot-password">
                                <span className="text-sm  inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">
                                    Забыли пароль?
                                </span>
                            </Link>
                        </div>

                        <ErrorText styleClass="mt-8">{errorMessage}</ErrorText>
                        <button type="submit" className={"btn mt-2 w-full btn-primary" + (loading ? " loading" : "")}>
                            Вход
                        </button>

                        <div className='text-center mt-4'>
                            Ещё нет аккаунта? 
                            <Link to="/register">
                                <span style={{ paddingLeft: '8px' }} className="inline-block  hover:text-primary hover:underline hover:cursor-pointer transition duration-200">
                                    Зарегистрироваться
                                </span>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login