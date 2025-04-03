import React from 'react'
import ReusableAuthPage from '../components/ReusableAuthPage/page'

const Login = () => {
    const fields = ["email", "password"];
    const buttonText = "LOGIN";
    return (
        <ReusableAuthPage fields={fields} buttonText={buttonText} authType="login" />
    )
}

export default Login