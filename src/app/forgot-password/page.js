import React from 'react'
import ReusableAuthPage from '../components/ReusableAuthPage/page';
const ForgotPassword = () => {
    const fields = ["email"];
    const buttonText = "RESET";
    return (
        <ReusableAuthPage fields={fields} buttonText={buttonText} authType="forgot-password" />
    )
}

export default ForgotPassword