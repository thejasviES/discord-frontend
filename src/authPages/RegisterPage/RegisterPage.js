import React, { useState, useEffect } from 'react'
import { Typography } from '@mui/material'
import AuthBox from '../../shared/components/AuthBox'
import RegisterPageInputs from './RegisterPageInputs'
import RegisterPageFooter from './RegisterPageFooter'
import { validateRegisterForm } from '../../shared/utils/validators'

import { getActions } from '../../store/actions/authActions'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const RegisterPage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const register = getActions(dispatch).register

    const [mail, setMail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [isFormValid, setIsFormValid] = useState(false)

    const handleRegister = () => {
        const userDetails = {
            mail,
            password,
            username,
        }
        register(userDetails, navigate)
    }

    useEffect(() => {
        setIsFormValid(
            validateRegisterForm({
                mail,
                username,
                password,
            })
        )
    }, [mail, username, password, setIsFormValid])

    return (
        <AuthBox>
            <Typography variant='h5' sx={{ color: 'white ' }}>
                Create an account
            </Typography>
            <RegisterPageInputs
                mail={mail}
                setMail={setMail}
                username={username}
                setUsername={setUsername}
                password={password}
                setPassword={setPassword}
            />
            <RegisterPageFooter
                handleRegister={handleRegister}
                isFormValid={isFormValid}
            />
        </AuthBox>
    )
}

export default RegisterPage
