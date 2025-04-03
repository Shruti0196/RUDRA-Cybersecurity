import React from 'react'
import ReusableAuthPage from '../components/ReusableAuthPage/page'

const Signup = () => {
    const fields = ["name", "email", "password"]
    const buttonText = "SIGNUP";
    return (
        <ReusableAuthPage fields={fields} buttonText={buttonText} authType="signup" />
    )
}

export default Signup