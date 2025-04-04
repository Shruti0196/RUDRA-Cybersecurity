import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import { CardActions, Button } from '@mui/material';
import Link from 'next/link';
import styles from './ReusableAuthPage.module.css'
import Image from 'next/image';

function ReusableAuthPage({ fields, buttonText, authType }) {
    return (
        <Card className={styles.card}>
            <CardContent>
                <Image
                    src="/logo.svg"
                    alt="Logo"
                    width={200}
                    height={100}
                />
                {fields.map((textField) => (
                    <TextField className={styles.textField} id="outlined-basic" label={textField} variant="outlined" key={textField} />
                ))}
                {authType === "login" && <Link href="/forgot-password" key="forgot-password"><div className={styles.forgotPassword}>Forgot Password ?</div></Link>}
            </CardContent>
            <CardActions>
                <Button size="small" className={styles.button}>{buttonText}</Button>
            </CardActions>
        </Card>
    )
}

export default ReusableAuthPage;