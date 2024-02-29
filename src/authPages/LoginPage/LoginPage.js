import React, { useState, useEffect } from 'react'
import AuthBox from '../../shared/components/AuthBox'
import LoginPageFooter from './LoginPageFooter'
import LoginPageHeader from './LoginPageHeader'
import LoginPageInputs from './LoginPageInputs'
import { validateLoginForm } from '../../shared/utils/validators'

import { useDispatch } from 'react-redux'
import { getActions } from '../../store/actions/authActions'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const login = getActions(dispatch).login

    const [mail, setMail] = useState('')
    const [password, setPassword] = useState('')
    const [isFormValid, setIsFormValid] = useState(false)

    useEffect(() => {
        setIsFormValid(validateLoginForm({ mail, password }))
    }, [mail, password, setIsFormValid])

    const handleLogin = () => {
        const userDetails = {
            mail,
            password,
        }

        login(userDetails, navigate)
    }

    return (
        <AuthBox>
            <LoginPageHeader />
            <LoginPageInputs
                mail={mail}
                setMail={setMail}
                password={password}
                setPassword={setPassword}
            />
            <LoginPageFooter
                isFormValid={isFormValid}
                handleLogin={handleLogin}
            />
        </AuthBox>
    )
}

export default LoginPage
